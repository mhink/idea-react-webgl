const vertexSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentSource = `
  uniform sampler2D source;
  void main(){
    gl_FragColor = texture2D(source, vec2(1.0, 1.0));
  }
`;

const WebGLIdea = () => (
  <WebGLRenderingContext>
    <Program>
      <VertexShader source={vertexSource} />
      <FragmentShader source={fragmentSource} />
      <Attrib name="position" type="FLOAT" />
      <Uniform name="source" type=":wq

    </Program>
  </WebGLRenderingContext>
);
