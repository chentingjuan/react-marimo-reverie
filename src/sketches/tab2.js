var vert = `

    precision highp float;
    
    // attributes, in
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    attribute vec2 aTexCoord;

    // attributes, out
    varying vec3 var_vertPos;
    varying vec3 var_vertNormal;
    varying vec2 var_vertTexCoord;
    
    // matrices
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform mat3 uNormalMatrix;

    void main() {
      vec3 pos = aPosition;  
      gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(pos, 1.0);

      // set out value
      var_vertPos      = pos;
      var_vertNormal   =  aNormal;
      var_vertTexCoord = aTexCoord;
    }
`;


var frag = `

precision highp float;
#define PI 3.14159265359


uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform mat3 uNormalMatrix;
uniform vec3 u_lightDir;
uniform vec3 u_col;

//attributes, in
varying vec3 var_vertPos;
varying vec2 var_vertTexCoord;
varying vec3 var_vertNormal;


float gridGra(in vec2 uv , float gridNum){
    float scale = gridNum;
    uv *= scale;
    uv = fract(uv);
    float o = abs(uv.y + -0.5)*2.;
		o *= abs(uv.x + -0.5)*2.;
    return o;
}

float random (in vec2 st) {
		//return fract(sin(dot(co.xy,vec2(12.9898,78.233))) * 43758.5453);// < - not work on mobile
   	highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(st.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

float noise(vec2 st) {
    vec2 i = vec2(0.);
		i = floor(st);
    vec2 f = vec2(0.);
		f = fract(st);
    vec2 u =  vec2(0.);
		u = f*f*(3.0-2.0*f);
    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

void main(){
		vec2 st = gl_FragCoord.xy/u_resolution.x;
		float g = gridGra(st,u_resolution.x/20.);
		float noise = 1.- random(st);
		float noise2 = random(st  + vec2(100.,0));

		vec3 vertNormal = normalize(uNormalMatrix * var_vertNormal);
    float dot = dot(vertNormal,-normalize(u_lightDir));
    dot = (dot *.5) + .5;
		
    float tone = step(noise,dot*1.2);
		vec3 col = u_col * tone + (u_col-0.3) * (1.-tone);
		col += noise2*.15;

    gl_FragColor = vec4(col,1.0);
}

`;

export { vert, frag };