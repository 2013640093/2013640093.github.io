var geometry = new THREE.SphereGeometry( 10, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x0AF9EE} );
var sphere = new THREE.Mesh( geometry, material );

var bottom = new THREE.CylinderGeometry( 28, 28, 2.5, 32 );
bottom.translate(0,-10,0)
var mallabot = new THREE.Mesh( bottom, material );


/*var bottom2 = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
bottom2.translate(0,0,0)
var mallabot2 = new THREE.Mesh( bottom, material );*/


var figura = new THREE.Shape();

figura.moveTo(8,8);
figura.lineTo(27.5,15);
figura.lineTo(30,25);
figura.lineTo(8.75,11.25);
figura.lineTo(8,8);
/*
figura.moveTo(8,8);
figura.lineTo(37.5,15);
figura.lineTo(50,45);
figura.lineTo(8.75,11.25);
figura.lineTo(8,8);*/

var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.scale.set(0.5,0.5,0.5)
//malla.rotateY( -Math.PI/4 );

var figurai = new THREE.Shape();
/*
figurai.moveTo(-8,8);
figurai.lineTo(-35,10);
figurai.lineTo(-42.5,45);
figurai.lineTo(-8.75,11.25);
figurai.lineTo(-8,8);
*/

figurai.moveTo(-8,8);
figurai.lineTo(-25,10);
figurai.lineTo(-30,25);
figurai.lineTo(-8.75,11.25);
figurai.lineTo(-8,8);
var formai = new THREE.ExtrudeGeometry( figurai,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var mallai = new THREE.Mesh( formai, material );
mallai.scale.set(0.5,0.5,0.5)


/*
var figuraiu = new THREE.Shape();
figuraiu.moveTo(-35,-45);
figuraiu.lineTo(-25,-90);
figuraiu.lineTo(-55,-75);
figuraiu.lineTo(-75,-55);
figuraiu.lineTo(-40,-40);
figuraiu.lineTo(-35,-45);
var formaiu = new THREE.ExtrudeGeometry( figuraiu,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var mallaiu = new THREE.Mesh( formaiu, material );
var figuraiue = new THREE.Shape();
figuraiue.moveTo(35,-45);
figuraiue.lineTo(25,-100);
figuraiue.lineTo(65,-85);
figuraiue.lineTo(70,-50);
figuraiue.lineTo(45,-40);
figuraiue.lineTo(35,-45);
var formaiue = new THREE.ExtrudeGeometry( figuraiue,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var mallaiue = new THREE.Mesh( formaiue, material );
*/

THREE.ImageUtils.crossOrigin = '';
 var textura =THREE.ImageUtils.loadTexture('blu.png');
var matext = new THREE.MeshBasicMaterial({map: textura});


var hada = new THREE.Geometry();
hada.merge(sphere.geometry, sphere.matrix);
hada.merge(malla.geometry, malla.matrix);
hada.merge(mallai.geometry, mallai.matrix);
hada.merge(mallabot.geometry, mallabot.matrix);
//hada.merge(mallaiu.geometry, mallaiu.matrix);
//hada.merge(mallaiue.geometry, mallaiue.matrix);



var material3 = new THREE.MeshNormalMaterial();
var mallahada = new THREE.Mesh(hada, matext);
//mallahada.scale.set(0.35,0.35,0.35);

//var hadaf = new THREE.Geometry();
//hada.merge(mallahada.geometry, mallahada.matrix);
//hada.merge(mallabot.geometry, mallabot.matrix);

//var material4 = new THREE.MeshNormalMaterial();
//var mallahadaf = new THREE.Mesh(hadaf, material4);

//mallahada.rotateY( Math.PI/8 );
var escena = new THREE.Scene();
mallahada.scale.set(0.5,0.5,0.5)
escena.add(mallahada);
//escena.add(mallabot2);





//var escena = new THREE.Scene();
//escena.add(sphere,malla,mallai,mallaiu,mallaiue );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

function loop() 
{
requestAnimationFrame(loop);


mallahada.rotation.x += 0.01;

mallahada.rotation.y += 0.01;


renderizador.render(escena, camara);

}

loop();
