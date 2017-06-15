THREE.ImageUtils.crossOrigin = '';
 var textura =THREE.ImageUtils.loadTexture('blu.png');
var material = new THREE.MeshBasicMaterial({map: textura});

var geometry = new THREE.TorusGeometry( 10, 2, 16, 100 );
var torus = new THREE.Mesh( geometry, material );


var escena = new THREE.Scene();                        
escena.add(torus);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


function loop() 
{
requestAnimationFrame(loop);


torus.rotation.x += 0.01;

torus.rotation.y += 0.01;


renderizador.render(escena, camara);

}

loop();
