

THREE.ImageUtils.crossOrigin = '';
var textura =THREE.ImageUtils.loadTexture('blu.png');
var matext= new THREE.MeshBasicMaterial({map: textura});


var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {

    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );

}




geometry = new THREE.LatheGeometry( points, 32 );

var material = new THREE.MeshBasicMaterial( {color: 0x09F7F3} );

var material2 = new THREE.MeshBasicMaterial( {color: 0xF90AEE} );

var Ovo = new THREE.Mesh( geometry,material);
Ovo.position.set(0, 0, 0);


var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );

bottom.translate(0,-10,0)

var mallabot = new THREE.Mesh( bottom, material );

//escena.add(sphere,troncoMalla,mallojoi,mallojod,mallapied,mallapiei);

//var esfca = new THREE.SphereGeometry(2.5, 32, 32 );
//esfca.translate(0,5,0);
//var cabe = new THREE.Mesh( esfca, material );




var ojoi=new THREE.SphereGeometry(0.75,32,32);
ojoi.translate(-1.5,12,5);
var mallojoi =new THREE.Mesh( ojoi, material2);


var ojod=new THREE.SphereGeometry(0.75,32,32);
ojod.translate(1.5,12,5);
var mallojod =new THREE.Mesh( ojod, material2);


var ojos=new THREE.SphereGeometry(5,32,32);
ojos.translate(0,12,0);
var mallojos =new THREE.Mesh( ojos, material2);


var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 1,  9,  5 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  10.5, 5 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-1,  10.5, 5 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-1,  9,  5 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 0,  9.75,  7.5 ) ); // Vértice 


forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 5

forma.computeBoundingSphere();

forma.computeFaceNormals();

//var material = new THREE.MeshNormalMaterial();

var mallapic = new THREE.Mesh( forma, material2 );

//var geometry = new THREE.ConeGeometry( 1.5, 5, 32 );
//var material3 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
//var cone = new THREE.Mesh( geometry, material3 );
//cone.position.set(0,10,5)


var figura = new THREE.Shape();
figura.moveTo(6, -7);
figura.lineTo(6.1, -7);
figura.lineTo(6.1, -7.05);
figura.lineTo(6, -7.05);
figura.lineTo(6, -7);
var pied = new THREE.ExtrudeGeometry( figura,
                                       {amount: .75} );

var mallapied =new THREE.Mesh( pied, material);


var figura2 = new THREE.Shape();
figura2.moveTo(-6, -7);
figura2.lineTo(-6.1, -7);
figura2.lineTo(-6.1, -7.05);
figura2.lineTo(-6, -7.05);
figura2.lineTo(-6, -7);
var piei = new THREE.ExtrudeGeometry( figura2,
                                       {amount: 0.75} );

var mallapiei =new THREE.Mesh( piei, material);



var pingui = new THREE.Geometry();
pingui.merge(Ovo.geometry, Ovo.matrix);
pingui.merge(mallojos.geometry, mallojos.matrix);
pingui.merge(mallojod.geometry, mallojod.matrix);
pingui.merge(mallojoi.geometry, mallojoi.matrix);
pingui.merge(mallapic.geometry, mallapic.matrix);
pingui.merge(mallapiei.geometry, mallapiei.matrix);
pingui.merge(mallapied.geometry, mallapied.matrix);
pingui.merge(mallabot.geometry, mallabot.matrix);
var material3 = new THREE.MeshNormalMaterial();


var mallapingui = new THREE.Mesh( pingui, matext );
mallapingui.rotateY( Math.PI/8 );
var escena = new THREE.Scene();
escena.add(mallapingui);


//var escena = new THREE.Scene();
//escena.add(mallala,Ovo);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );



function loop() 
{
requestAnimationFrame(loop);


mallapingui.rotation.x += 0.00;

mallapingui.rotation.y += 0.00;


renderizador.render(escena, camara);

}

var camara, escena, renderer, mallapingui;



loop();
