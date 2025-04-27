import vertexShaderSource from "./shader/vertexShader.glsl";
import fragmentShaderSource from "./shader/fragmentShader.glsl";
import * as THREE from "three";

const u = new THREE.Vector3(1, 2, 3);
const v = new THREE.Vector3(4, 5, 6);

const m = new THREE.Matrix3();
m.set(2, -1, 1, -2, 1, 1, -1, 2, 1);
const n = new THREE.Matrix3();
n.set(4, -3, 1, 3, 5, 1, 1, 1, 1);

console.log(m.multiply(n));

const canvas = document.querySelector("#myGLCanvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl");
if (gl == null) throw new Error("glコンテキストにエラー");

// シェーダー
const vertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

// プログラム
const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);
const vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
const vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
gl.enableVertexAttribArray(vertexPositionAttribute);
gl.enableVertexAttribArray(vertexColorAttribute);

//buffer
// 六角形
const hexagonVertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, hexagonVertexBuffer);
const hexagonVertices = [
  -0.3,
  0.6,
  0.0, // v0
  -0.4,
  0.8,
  0.0, //v1
  -0.6,
  0.8,
  0.0, //v2
  -0.7,
  0.6,
  0.0, //v3
  -0.6,
  0.4,
  0.0, //v4
  -0.4,
  0.4,
  0.0, // v5
  -0.3,
  0.6,
  0.0, // v6
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hexagonVertices), gl.STATIC_DRAW);
const hexagonBufferData = {
  itemSize: 3,
  numberOfItems: 7,
};

// 三角形
const triangleVertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);
const triangleVertices = [
  0.3,
  0.4,
  0.0, // v0
  0.7,
  0.4,
  0.0, // v1
  0.5,
  0.8,
  0.0, // v2
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
const triangleBufferData = {
  itemSize: 3,
  numberOfItems: 3,
};

// 三角形カラー
const triangleVertexColorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
const colors = [
  1.0,
  0.0,
  0.0,
  1.0, // v0
  0.0,
  1.0,
  0.0,
  1.0, // v1
  0.0,
  0.0,
  1.0,
  1.0, // v2
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
const triangleVertexColorData = {
  itemSize: 4,
  numberOfItems: 3,
};

const stripVertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, stripVertexBuffer);
const stripVertices = [
  -0.5,
  0.2,
  0.0, // v0
  -0.4,
  0.0,
  0.0, // v1
  -0.3,
  0.2,
  0.0, // v2
  -0.2,
  0.0,
  0.0, // v3
  -0.1,
  0.2,
  0.0, // v4
  0.0,
  0.0,
  0.0, // v5
  0.1,
  0.2,
  0.0, // v6
  0.2,
  0.0,
  0.0, // v7
  0.3,
  0.2,
  0.0, // v8
  0.4,
  0.0,
  0.0, // v9
  0.5,
  0.2,
  0.0, // v10
  -0.5,
  -0.3,
  0.0, // v11
  -0.4,
  -0.5,
  0.0, // v12
  -0.3,
  -0.3,
  0.0, // v13
  -0.2,
  -0.5,
  0.0, // v14
  -0.1,
  -0.3,
  0.0, // v15
  0.0,
  -0.5,
  0.0, // v16
  0.1,
  -0.3,
  0.0, // v17
  0.2,
  -0.5,
  0.0, // v18
  0.3,
  -0.3,
  0.0, // v19
  0.4,
  -0.5,
  0.0, // v20
  0.5,
  -0.3,
  0.0, // v21
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(stripVertices), gl.STATIC_DRAW);
const stripBufferData = {
  itemSize: 3,
  numberOfItems: 22,
};

const stripElementBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, stripElementBuffer);
const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
const stripElementBufferData = {
  numberOfItems: 25,
};

gl.clearColor(1.0, 1.0, 1.0, 1.0);

gl.frontFace(gl.CCW);
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.BACK);

// draw
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clear(gl.COLOR_BUFFER_BIT);

// 六角形
gl.disableVertexAttribArray(vertexColorAttribute);
gl.vertexAttrib4f(vertexColorAttribute, 0.0, 0.0, 0.0, 1.0);

gl.bindBuffer(gl.ARRAY_BUFFER, hexagonVertexBuffer);
gl.vertexAttribPointer(vertexPositionAttribute, hexagonBufferData.itemSize, gl.FLOAT, false, 0, 0);
gl.drawArrays(gl.LINE_STRIP, 0, hexagonBufferData.numberOfItems);

// 三角形
gl.enableVertexAttribArray(vertexColorAttribute);
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);
gl.vertexAttribPointer(vertexPositionAttribute, triangleBufferData.itemSize, gl.FLOAT, false, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
gl.vertexAttribPointer(vertexColorAttribute, triangleVertexColorData.itemSize, gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, triangleBufferData.numberOfItems);

// 三角形ストリップ
gl.disableVertexAttribArray(vertexColorAttribute);
gl.bindBuffer(gl.ARRAY_BUFFER, stripVertexBuffer);
gl.vertexAttribPointer(vertexPositionAttribute, stripBufferData.itemSize, gl.FLOAT, false, 0, 0);
gl.vertexAttrib4f(vertexColorAttribute, 1.0, 1.0, 0.0, 1.0);
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, stripElementBuffer);
gl.drawElements(gl.TRIANGLE_STRIP, stripElementBufferData.numberOfItems, gl.UNSIGNED_SHORT, 0);
gl.vertexAttrib4f(vertexColorAttribute, 0.0, 0.0, 0.0, 1.0);
gl.drawArrays(gl.LINE_STRIP, 0, 11);
gl.drawArrays(gl.LINE_STRIP, 11, 11);
