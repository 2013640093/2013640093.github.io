THREE.ImageUtils.crossOrigin = '';
 var texturah =THREE.ImageUtils.loadTexture('blu.png');
var matexth = new THREE.MeshBasicMaterial({map: texturah});

var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {

    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );

}



geometry = new THREE.LatheGeometry( points, 32 );

var material2 = new THREE.MeshBasicMaterial( {color: 0xF90AEE} );
var material = new THREE.MeshBasicMaterial( {color: 0x0E0AF9} );
var Ovo = new THREE.Mesh( geometry,material2);
Ovo.position.set(0, 0, 0);


var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
bottom.translate(0,-10,0)
var mallabot = new THREE.Mesh( bottom, material );

var ojoi=new THREE.SphereGeometry(0.75,32,32);
ojoi.translate(-1.5,7,5);
var mallojoi =new THREE.Mesh( ojoi, material);


var ojod=new THREE.SphereGeometry(0.75,32,32);
ojod.translate(1.5,7,5);
var mallojod =new THREE.Mesh( ojod, material);



var huevo = new THREE.Geometry();

huevo.merge(Ovo.geometry, Ovo.matrix);
huevo.merge(mallojoi.geometry, mallojoi.matrix);
huevo.merge(mallojod.geometry, mallojod.matrix);
huevo.merge(mallabot.geometry, mallabot.matrix);


var material3 = new THREE.MeshNormalMaterial();
var mallahuevo = new THREE.Mesh(huevo, matexth);
mallahuevo.rotateY( Math.PI/8 );
var escena = new THREE.Scene();
mallahuevo.scale.set(0.75,0.75,0.75);
escena.add(mallahuevo);



//var escena = new THREE.Scene();
//escena.add(Ovo,mallojoi,mallojod);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


function loop() 
{
requestAnimationFrame(loop);


mallahuevo.rotation.x += 0.01;

mallahuevo.rotation.y += 0.01;


renderizador.render(escena, camara);

}

loop();
