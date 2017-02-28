
var puntos = [];
for ( var i = 0; i < 25; i ++ ) {
    puntos.push( new THREE.Vector2(Math.sqrt(10*i*i/Math.sqrt(i)-i*i),( i - 5 ) * 2 ));
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI );
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
