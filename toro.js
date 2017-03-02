var figura = new THREE.Shape();

figura.moveTo(5, 9);
figura.lineTo(3, 9);
figura.lineTo(3, 1);
figura.lineTo(7, 1);
figura.lineTo(9,-5);
figura.lineTo(13,-5);
figura.lineTo(15,1);
figura.lineTo(19,1);
figura.lineTo(19,9);
figura.lineTo(17,9);
figura.lineTo(17,5);
figura.lineTo(15,5);
figura.lineTo(15,7);
figura.lineTo(7,7);
figura.lineTo(7,5);
figura.lineTo(5,5);


var toroforma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 10} );
var anillo = new THREE.TorusGeometry(5,2,16,100);
anillo.translate(11.4,-10,0);

var material = new THREE.MeshNormalMaterial();

var mallatoro = new THREE.Mesh( toroforma, material );
var torus= new THREE.Mesh( anillo, material);


var toro = new THREE.Geometry();
toro.merge(mallatoro.geometry, mallatoro.matrix);
toro.merge(torus.geometry, torus.matrix);

var toroMalla = new THREE.Mesh(toro, material);

var escena = new THREE.Scene();
escena.add(toroMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
