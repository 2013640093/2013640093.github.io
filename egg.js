
var puntos = [];
for ( var i = 0; i < 100;  i++ ) {
    
    puntos.push( new THREE.Vector2(-Math.sqrt(10*i*i/Math.sqrt(i)-i*i),i));
    //Modificar el signo de z, voltea la el ovalo en y
    //puntos.push( new THREE.Vector3(Math.sqrt(10*(i)*(i)/Math.sqrt(i)-i*i),-i));
    //puntos.push( new THREE.Vector3(i,Math.sqrt(10*(i)*(i)/Math.sqrt(i)-i*i)));
}

var forma = new THREE.LatheGeometry(puntos);
//var material = new THREE.MeshBasicMaterial( {color: 0xfff99} );
var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material);
malla.rotateY( Math.PI/4 );
malla.rotateZ( Math.PI );
var escena = new THREE.Scene();
escena.add(malla);



var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
