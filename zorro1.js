THREE.ImageUtils.crossOrigin = '';
//var textura =THREE.ImageUtils.loadTexture('2013640173Ivan.github.io/easter.jpg');
  var textura =THREE.ImageUtils.loadTexture('blu.png');
var material = new THREE.MeshLambertMaterial({map: textura});

var material2 = new THREE.MeshBasicMaterial( {color: 0xfff99} );

var geometry = new THREE.BoxGeometry( 8, 7, 10 );
geometry.translate(0,0,0);
var cube = new THREE.Mesh( geometry, material2 );


var geometry2 = new THREE.BoxGeometry(10,3,4);
geometry2.translate(0,2,7);
var cube2 = new THREE.Mesh( geometry2, material2 );


var geometry3 = new THREE.BoxGeometry(4,2,3);
geometry3.translate(0,3,10.5);
var cube3 = new THREE.Mesh( geometry3, material2 );

var geometry4 = new THREE.BoxGeometry(8,5,4);
geometry4.translate(0,5.5,7);
var cube4 = new THREE.Mesh( geometry4, material2 );


var geometry5 = new THREE.BoxGeometry(3,5,1.5);
geometry5.translate(2.5,10.5,6.75);
var cube5 = new THREE.Mesh( geometry5, material2 );


var geometry6 = new THREE.BoxGeometry(3,5,1.5);
geometry6.translate(-2.5,10.5,6.75);
var cube6 = new THREE.Mesh( geometry6, material2 );

var geometry7 = new THREE.BoxGeometry(3,3,8);
geometry7.translate(0,-2,-9);
var cube7 = new THREE.Mesh( geometry7, material2 );



var geometry8 = new THREE.BoxGeometry(2,9,2);
geometry8.translate(2,-7,2.5);
var cube8 = new THREE.Mesh( geometry8, material2 );





var geometry9 = new THREE.BoxGeometry(2,9,2);
geometry9.translate(-2,-7,2.5);
var cube9 = new THREE.Mesh( geometry9, material2 );




var geometry10 = new THREE.BoxGeometry(2,9,2);
geometry10.translate(2,-7,-2.5);
var cube10 = new THREE.Mesh( geometry10, material2 );




var geometry11 = new THREE.BoxGeometry(2,9,2);
geometry11.translate(-2,-7,-2.5);
var cube11 = new THREE.Mesh( geometry11, material2 );



var geometry12 = new THREE.BoxGeometry(2,2,1);
geometry12.translate(2,-10.5,4);
var cube12 = new THREE.Mesh( geometry12, material2 );

var geometry13 = new THREE.BoxGeometry(2,2,1);
geometry13.translate(-2,-10.5,4);
var cube13 = new THREE.Mesh( geometry13, material2 );

var geometry14 = new THREE.BoxGeometry(2,2,1);
geometry14.translate(2,-10.5,-1);
var cube14 = new THREE.Mesh( geometry14, material2 );


var geometry15 = new THREE.BoxGeometry(2,2,1);
geometry15.translate(-2,-10.5,-1);
var cube15 = new THREE.Mesh( geometry15, material2 );


var ojoi=new THREE.SphereGeometry(0.5,32,32);
ojoi.translate(2.5,6,9);
var mallojoi =new THREE.Mesh( ojoi, material2);

var ojod=new THREE.SphereGeometry(0.5,32,32);
ojod.translate(-2.5,6,9);
var mallojod =new THREE.Mesh( ojod, material2);



var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
bottom.translate(0,-13.25,0)
var mallabot = new THREE.Mesh( bottom, material2 );

var zo = new THREE.Geometry();
zo.merge(cube.geometry, cube.matrix);
zo.merge(cube2.geometry, cube2.matrix);
zo.merge(cube3.geometry, cube3.matrix);
zo.merge(cube4.geometry, cube4.matrix);
zo.merge(cube5.geometry, cube5.matrix);
zo.merge(cube6.geometry, cube6.matrix);
zo.merge(cube7.geometry, cube7.matrix);
zo.merge(cube8.geometry, cube8.matrix);
zo.merge(cube9.geometry, cube9.matrix);
zo.merge(cube10.geometry, cube10.matrix);
zo.merge(cube11.geometry, cube11.matrix);
zo.merge(cube12.geometry, cube12.matrix);
zo.merge(cube13.geometry, cube12.matrix);
zo.merge(cube14.geometry, cube12.matrix);
zo.merge(cube15.geometry, cube12.matrix);
zo.merge(mallojoi.geometry, mallojoi.matrix);
zo.merge(mallojod.geometry, mallojod.matrix);
zo.merge(mallabot.geometry, mallabot.matrix);

var mallazo = new THREE.Mesh(zo, material);
//mallabomba.rotateY( Math.PI/4);
var escena = new THREE.Scene();
//mallabomba.scale.set(0.75,0.75,0.75);
escena.add(mallazo);


/*var escena = new THREE.Scene();
escena.add( cube );
escena.add(cube2);
*/


 
  
  
  var luzPuntual = new THREE.PointLight(0xFFFFFF);
  luzPuntual.position.x=50;
  luzPuntual.position.y=50;
  luzPuntual.position.z=50;
  
  



  
  escena.add(luzPuntual);

camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);



function loop() {

requestAnimationFrame(loop);



mallazo.rotation.x += 0.01;

mallazo.rotation.y += 0.01;


renderer.render(escena, camara);


}

var camara, escena, renderer, mallapingui;



loop();
