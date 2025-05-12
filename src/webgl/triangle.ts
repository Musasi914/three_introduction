import vertexShaderSource from "./shader_texture/vertexShader.glsl";
import fragmentShaderSource from "./shader_texture/fragmentShader.glsl";

class WebGLUtility {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;
  shaderProgram: WebGLProgram;
  vertexPositionAttribLocation: number = -1;
  vertexColorAttribLocation: number = -1;
  private ongoingImageLoads: HTMLImageElement[] | undefined;
  texture: WebGLTexture | undefined;

  constructor(canvas: HTMLCanvasElement, vertexShaderSource: string, fragmentShaderSource: string) {
    this.canvas = canvas;
    const gl = this.canvas.getContext("webgl");
    if (!gl) throw new Error("WebGL context could not be initialized");
    this.gl = gl;

    this.setupContextLostHandlers();

    this.shaderProgram = this.setupShaders(vertexShaderSource, fragmentShaderSource);
  }

  private setupContextLostHandlers() {
    this.canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      console.log("context lost");

      if (this.ongoingImageLoads && this.ongoingImageLoads.length !== 0) {
        for (let i = 0; i < this.ongoingImageLoads.length; i++) {
          this.ongoingImageLoads[i].onload = null;
        }
        this.ongoingImageLoads = [];
      }
    });
    this.canvas.addEventListener("webglcontextrestored", () => {
      console.log("context restored");
      // this.draw();
    });
  }

  /** vertexShader, fragmenShaderをコンパイル, shaderProgramとリンク */
  private setupShaders(vertexShaderSource: string, fragmentShaderSource: string) {
    const vertexShader = this.compileShader(vertexShaderSource, this.gl.VERTEX_SHADER);
    // const fragmentShader = this.compileShader(fragmentShaderSource, this.gl.FRAGMENT_SHADER);

    const shaderProgram = this.gl.createProgram();
    this.gl.attachShader(shaderProgram, vertexShader);
    // this.gl.attachShader(shaderProgram, fragmentShader);
    this.gl.linkProgram(shaderProgram);
    if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS) && !this.gl.isContextLost())
      throw new Error(`${this.gl.getProgramInfoLog(shaderProgram)}`);
    this.gl.useProgram(shaderProgram);

    this.vertexPositionAttribLocation = this.gl.getAttribLocation(shaderProgram, "aVertexPosition");
    this.vertexColorAttribLocation = this.gl.getAttribLocation(shaderProgram, "aVertexColor");

    return shaderProgram;
  }

  private compileShader(shaderSource: string, type: number) {
    const shader = this.gl.createShader(type) as WebGLShader;
    this.gl.shaderSource(shader, shaderSource);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS) && !this.gl.isContextLost())
      throw new Error(`${this.gl.getShaderInfoLog(shader)}`);
    return shader;
  }

  // private setupBuffer() {
  //   this.vertexPositionBuffer = this.gl.createBuffer();
  //   this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexPositionBuffer);
  //   const triangleVertices = [0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];
  //   this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(triangleVertices), this.gl.STATIC_DRAW);

  //   this.vertexColorBuffer = this.gl.createBuffer();
  //   this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexColorBuffer);
  //   const colors = [1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0];
  //   this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
  // }

  // private draw() {
  //   this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  //   this.gl.clear(this.gl.COLOR_BUFFER_BIT);

  //   if (!this.vertexPositionBuffer || !this.vertexColorBuffer) throw new Error("aaaaa");

  //   this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexPositionBuffer);
  //   this.gl.enableVertexAttribArray(this.vertexPositionAttribLocation);
  //   this.gl.vertexAttribPointer(this.vertexPositionAttribLocation, 3, this.gl.FLOAT, false, 0, 0);

  //   this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexColorBuffer);
  //   this.gl.enableVertexAttribArray(this.vertexColorAttribLocation);
  //   this.gl.vertexAttribPointer(this.vertexColorAttribLocation, 4, this.gl.FLOAT, false, 0, 0);

  //   this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
  // }

  loadImageForTexture(url: string) {
    const texture = this.gl.createTexture();
    this.ongoingImageLoads = [];

    const image = new Image();
    image.addEventListener("load", () => {
      this.ongoingImageLoads?.splice(this.ongoingImageLoads.indexOf(image), 1);
      this.textureFinishLoading(texture, image);
    });
    this.ongoingImageLoads.push(image);
    image.src = url;
  }

  private textureFinishLoading(texture: WebGLTexture, image: HTMLImageElement) {
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    // 画像を水平方向に反転
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);

    // テクスチャをGPUにアップロード
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);

    // テクスチャのパラメータを指定
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
  }

  getAttribLocation(name: string): number {
    const location = this.gl.getAttribLocation(this.shaderProgram, name);
    if (location === -1) throw new Error(`Attribute ${name} not found`);
    return location;
  }
}

const canvas = document.querySelector("#myGLCanvas") as HTMLCanvasElement;
const utils = new WebGLUtility(canvas, vertexShaderSource, fragmentShaderSource);
const gl = utils.gl;
const vertexPositionAttribLocation = utils.getAttribLocation("aVertexPosition");
// const vertexColorAttribLocation = utils.getAttribLocation("aVertexColor");

// setupBuffer
const vertexPositionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
const triangleVertices = [0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

const vertexColorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
const colors = [1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

utils.loadImageForTexture("");
const texture = utils.texture;
if (!texture) throw new Error("texture error");

// バッファにテクスチャ座標をセットアップする
const triangleVertexTextureCoordinateBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexTextureCoordinateBuffer);
const textureCoordinates = [0.0, 0.0, 1.0, 0.0, 0.5, 1.0];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);
const triangleVertexTextureBufferData = { itemSize: 2, numOfItems: 3 };

// uniform uSamplerの場所を調べる
const uniformSamplerLoc = utils.getAttribLocation("uSampler");

// テクスチャをテクスチャ画像ユニットgl.TEXTURE0にバインドする
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, texture);

// フラグメントシェーダでuSamplerの値が0になるように設定する
// (テクスチャ画像ユニットgl.TEXTURE0と一致させる)
gl.uniform1i(uniformSamplerLoc, 0);

// データとテクスチャ座標がどのように構成されるのか、頂点シェーダの属性のうちどれにバッファを接続するのか
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexTextureCoordinateBuffer);
gl.vertexAttribPointer(vertexTextureAttribLoc, triangleVertexTextureBufferData.itemSize, gl.FLOAT, false, 0, 0);
gl.bindTexture(gl.TEXTURE_2D, woodTexture);
gl.drawArrays(gl.TRIANGLES, 0, triangleVertexTextureBufferData.numOfItems);

// draw
gl.clearColor(0.9, 0.9, 0.9, 1.0);
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
gl.enableVertexAttribArray(vertexPositionAttribLocation);
gl.vertexAttribPointer(vertexPositionAttribLocation, 3, gl.FLOAT, false, 0, 0);

// gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
// gl.enableVertexAttribArray(vertexColorAttribLocation);
// gl.vertexAttribPointer(vertexColorAttribLocation, 4, gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, 3);
