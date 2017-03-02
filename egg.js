
var puntos = [];
for ( var i = 0; i < 100;  i++ ) {
    
    puntos.push( new THREE.Vector2(Math.sqrt(10*i*i/Math.sqrt(i)-i*i),i));
    //Modificar el signo de z, voltea la el ovalo en y
    //puntos.push( new THREE.Vector3(Math.sqrt(10*(i)*(i)/Math.sqrt(i)-i*i),-i));
    //puntos.push( new THREE.Vector3(i,Math.sqrt(10*(i)*(i)/Math.sqrt(i)-i*i)));
}
var color = new THREE.Color("rgb(245,245,220)");
var forma = new THREE.LatheGeometry(puntos);
//var material = new THREE.MeshNormalMaterial();
var material= new TREE.MeshBasicmATERIAL(color);
var malla = new THREE.Mesh( forma, material);
malla.rotateZ( Math.PI );
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
