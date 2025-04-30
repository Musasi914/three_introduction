function createGLContext(canvas) {
  var names = ["webgl", "experimental-webgl"];
  var context = null;
  for (var i = 0; i < names.length; i++) {
    try {
      context = canvas.getContext(names[i]);
    } catch (e) {}
    if (context) {
      break;
    }
  }

  if (context) {
    context.viewportWidth = canvas.width;
    context.viewportHeight = canvas.height;
  } else {
    alert("Failed to create WebGL context!");
  }
  return context;
}

function loadShaderFromDOM(id) {
  var shaderScript = document.getElementById(id);
  if (!shaderScript) {
    return null;
  }
  var shaderSource = "";
  var currentChild = shaderScript.firstChild;
  while (currentChild) {
    if (currentChild.nodeType == 3) {
      // 3 corresponds to TEXT_NODE
      shaderSource += currentChild.textContent;
    }
    currentChild = currentChild.nextSibling;
  }

  var shader;

  if (shaderScript.type == "x-shader/x-fragment") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderScript.type == "x-shader/x-vertex") {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    return null;
  }

  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(shader));
    return null;
  }
  return shader;
}

function setupShaders() {
  var vertexShader = loadShaderFromDOM("shader-vs");
  var fragmentShader = loadShaderFromDOM("shader-fs");

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert("Failed to setup shaders");
  }

  gl.useProgram(shaderProgram);

  shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
  shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");

  gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
}

function pushModelViewMatrix() {
  var copyToPush = mat4.create(modelViewMatrix);
  modelViewMatrixStack.push(copyToPush);
}

function popModelViewMatrix() {
  if (modelViewMatrixStack.length == 0) {
    throw "Error popModelViewMatrix() - Stack was empty ";
  }
  modelViewMatrix = modelViewMatrixStack.pop();
}

function setupFloorBuffers() {
  floorVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexPositionBuffer);

  var floorVertexPosition = [
    // Plane in y=0
    5.0,
    0.0,
    5.0, //v0
    5.0,
    0.0,
    -5.0, //v1
    -5.0,
    0.0,
    -5.0, //v2
    -5.0,
    0.0,
    5.0,
  ]; //v3

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(floorVertexPosition), gl.STATIC_DRAW);
  floorVertexPositionBuffer.itemSize = 3;
  floorVertexPositionBuffer.numberOfItems = 4;

  floorVertexIndexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, floorVertexIndexBuffer);

  var floorVertexIndices = [0, 1, 2, 3];
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(floorVertexIndices), gl.STATIC_DRAW);
  floorVertexIndexBuffer.itemSize = 1;
  floorVertexIndexBuffer.numberOfItems = 4;
}

function setupCubeBuffers() {
  cubeVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);

  var cubeVertexPosition = [
    1.0,
    1.0,
    1.0, //v0
    -1.0,
    1.0,
    1.0, //v1
    -1.0,
    -1.0,
    1.0, //v2
    1.0,
    -1.0,
    1.0, //v3
    1.0,
    1.0,
    -1.0, //v4
    -1.0,
    1.0,
    -1.0, //v5
    -1.0,
    -1.0,
    -1.0, //v6
    1.0,
    -1.0,
    -1.0, //v7
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVertexPosition), gl.STATIC_DRAW);

  cubeVertexPositionBuffer.itemSize = 3;
  cubeVertexPositionBuffer.numberOfItems = 8;

  cubeVertexIndexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
  var cubeVertexIndices = [
    0,
    1,
    2,
    0,
    2,
    3, // Front face
    4,
    6,
    5,
    4,
    7,
    6, // Back face
    1,
    5,
    6,
    1,
    6,
    2, //left
    0,
    3,
    7,
    0,
    7,
    4, //right
    0,
    5,
    1,
    0,
    4,
    5, //top
    3,
    2,
    6,
    3,
    6,
    7, //bottom
  ];

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
  cubeVertexIndexBuffer.itemSize = 1;
  cubeVertexIndexBuffer.numberOfItems = 36;
}

function setupBuffers() {
  setupFloorBuffers();
  setupCubeBuffers();
}

function uploadModelViewMatrixToShader() {
  gl.uniformMatrix4fv(shaderProgram.uniformMVMatrix, false, modelViewMatrix);
}

function uploadProjectionMatrixToShader() {
  gl.uniformMatrix4fv(shaderProgram.uniformProjMatrix, false, projectionMatrix);
}

function drawFloor(r, g, b, a) {
  // Disable vertex attrib array and use constant color for the floor.
  gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);
  // Set colour
  gl.vertexAttrib4f(shaderProgram.vertexColorAttribute, r, g, b, a);

  // Draw the floor
  gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexPositionBuffer);
  gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, floorVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, floorVertexIndexBuffer);
  gl.drawElements(gl.TRIANGLE_FAN, floorVertexIndexBuffer.numberOfItems, gl.UNSIGNED_SHORT, 0);
}

function drawCube(r, g, b, a) {
  // Disable vertex attrib array and use constant color for the cube.
  gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);
  // Set color
  gl.vertexAttrib4f(shaderProgram.vertexColorAttribute, r, g, b, a);
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
  gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
  gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numberOfItems, gl.UNSIGNED_SHORT, 0);
}

function drawTable() {
  // Draw table top
  // Draw table legs
}

function draw() {
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Draw floor in red color
  drawFloor(1.0, 0.0, 0.0, 1.0);

  // Draw table

  // Draw box on top of the table
}

function startup() {
  canvas = document.getElementById("myGLCanvas");
  gl = WebGLDebugUtils.makeDebugContext(createGLContext(canvas));
  setupShaders();
  setupBuffers();
  gl.clearColor(1.0, 1.0, 1.0, 1.0);
  gl.enable(gl.DEPTH_TEST);

  draw();
}
