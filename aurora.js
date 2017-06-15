THREE.ImageUtils.crossOrigin = '';
 var textura =THREE.ImageUtils.loadTexture('blu.png');
var material = new THREE.MeshBasicMaterial({map: textura});

var geometry = new THREE.TorusGeometry( 7, 1, 16, 100 );
var torus = new THREE.Mesh( geometry, material );


var escena = new THREE.Scene(); 
torus.rotation.x = 177;
escena.add(torus);



var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


function loop() 
{
requestAnimationFrame(loop);


//torus.rotation.x += 0.00;

torus.rotation.y += 0.00;


renderizador.render(escena, camara);

}

loop();
