const canvas = document.querySelector("#myGLCanvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl") as WebGLRenderingContext;

// コンテキスト消失
let requestId: number;
canvas.addEventListener("webglcontextlost", handleContextLost);
canvas.addEventListener("webglcontextrestored", handleContextRestored);

function handleContextLost(e: Event) {
  e.preventDefault();
  // cancelAnimationFrame(requestId);
  for (let i = 0; i < ongoingImageLoads.length; i++) {
    ongoingImageLoads[i].onload = null;
  }
  ongoingImageLoads = [];
}

function handleContextRestored() {
  console.log("context restored");
}

// テクスチャへのリファレンスとして使うWebGLTexture
const texture = gl.createTexture();

// 画像データをロード
let ongoingImageLoads: HTMLImageElement[] = [];

loadImageForTexture("", texture, ongoingImageLoads);

function loadImageForTexture(url: string, texture: WebGLTexture, ongoingImageLoads: HTMLImageElement[]) {
  const image = new Image();
  image.addEventListener("load", () => {
    ongoingImageLoads.splice(ongoingImageLoads.indexOf(image), 1);
    textureFinishLoading(image, texture);
  });
  ongoingImageLoads.push(image);
  image.src = url;
}

function textureFinishLoading(image: HTMLImageElement, texture: WebGLTexture) {
  // テクスチャをバインドする
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 画像を水平方向に反転
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

  // テクスチャをGPUにアップロード
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

  // テクスチャのパラメータを指定
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
}
