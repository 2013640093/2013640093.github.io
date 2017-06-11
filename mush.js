THREE.ImageUtils.crossOrigin = '';
 var texturah =THREE.ImageUtils.loadTexture('blu.png');
var matexth = new THREE.MeshBasicMaterial({map: texturah});

var geometry = new THREE.SphereGeometry( 10, 60, 60, Math.PI, Math.PI*2, 3*Math.PI/2);
geometry.translate(0,5,0)
var material = new THREE.MeshBasicMaterial( { color: 0xddddff } );
var sphere = new THREE.Mesh( geometry, material );
//scene.add( sphere );
//sphere.position.set(0,10,0);


var troncoForma = new THREE.CylinderGeometry(3, 6, 14);
var troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla.position.set(0, 6, 0);

var ojoi=new THREE.SphereGeometry(1,32,32);
ojoi.translate(-2.5,9,9);
var mallojoi =new THREE.Mesh( ojoi, material);


var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
bottom.translate(0,-10,0)
var mallabot = new THREE.Mesh( bottom, material );

var ojod=new THREE.SphereGeometry(1,32,32);
ojod.translate(2.5,9,9);
var mallojod =new THREE.Mesh( ojod, material);



var figura = new THREE.Shape();
figura.moveTo(6, -7);
figura.lineTo(6.2, -7);
figura.lineTo(6.2, -7.05);
figura.lineTo(6, -7.05);
figura.lineTo(6, -7);
var pied = new THREE.ExtrudeGeometry( figura,
                                       {amount: .75} );

var mallapied =new THREE.Mesh( pied, material);


var figura2 = new THREE.Shape();
figura2.moveTo(-6, -7);
figura2.lineTo(-6.2, -7);
figura2.lineTo(-6.2, -7.05);
figura2.lineTo(-6, -7.05);
figura2.lineTo(-6, -7);
var piei = new THREE.ExtrudeGeometry( figura2,
                                       {amount: 0.75} );

var mallapiei =new THREE.Mesh( piei, material);

var hongoForma = new THREE.Geometry();


hongoForma.merge(sphere.geometry, sphere.matrix);
hongoForma.merge(troncoMalla.geometry, troncoMalla.matrix);
hongoForma.merge(mallojoi.geometry, mallojoi.matrix);
hongoForma.merge(mallojod.geometry, mallojod.matrix);
hongoForma.merge(mallapied.geometry, mallapied.matrix);
hongoForma.merge(mallapiei.geometry, mallapiei.matrix);
hongoForma.merge(mallabot.geometry, mallabot.matrix);






var material2 = new THREE.MeshNormalMaterial();
var mallahongoForma = new THREE.Mesh(hongoForma, matexth);

var escena = new THREE.Scene();
mallahongoForma.scale.set(0.75,0.75,0.75);
escena.add(mallahongoForma);

//escena.add(sphere,troncoMalla,mallojoi,mallojod,mallapied,mallapiei);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

function loop() 
{
requestAnimationFrame(loop);


mallahongoForma.rotation.x += 0.01;

mallahongoForma.rotation.y += 0.01;


renderizador.render(escena, camara);

}

loop();
