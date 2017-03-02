var cuerpo= new TREE.SphereGeometry(5,64,64);
var material = new THREE.MeshBasicMaterial( {color: 0x40000} );
var mallacuerpo =new THREE.Mesh( cuerpo, material);

var escena = new THREE.Scene();
escena.add(mallacuerpo);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
