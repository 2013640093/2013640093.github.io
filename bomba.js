var cuerpo = new THREE.SphereBufferGeometry(10,64,64);
var cuerpo = new THREE.SphereGeometry(10,64,64);
var ojoi=new THREE.SphereBufferGeometry(10,32,32);
var ojoi=new THREE.SphereGeometry(10,32,32);
ojoi.translate(-2,2,5);
var ojod=new THREE.SphereBufferGeometry(10,32,32);
var ojod=new THREE.SphereGeometry(10,32,32);
ojod.translate(2,2,5);
var mecha = new THREE.CylinderGeometry( 1, 1, 25, 32 );
mecha.translate(0,14,0);
var base = new THREE.CylinderGeometry( 2, 2, 4, 32 );
base.translate(0,14,0);

var figura = new THREE.Shape();
figura.moveTo(2, -3);
figura.lineTo(5, -3);
figura.lineTo(5, -5);
figura.lineTo(2, -5);
figura.lineTo(2, -3);
var pied = new THREE.ExtrudeGeometry( figura,
                                       {amount: 5} );

var figura2 = new THREE.Shape();
figura2.moveTo(-2, -3);
figura2.lineTo(-5, -3);
figura2.lineTo(-5, -5);
figura2.lineTo(-2, -5);
figura2.lineTo(-2, -3);
var piei = new THREE.ExtrudeGeometry( figura2,
                                       {amount: 5} );
var material = new THREE.MeshNormalMaterial();
//var material = new THREE.MeshBasicMaterial( {color: 0xfff99} );
//var material2 = new THREE.MeshBasicMaterial( {color: 0xfff00} );

var mallacuerpo =new THREE.Mesh( cuerpo, material);
var mallojoi =new THREE.Mesh( ojoi, material);
var mallojod =new THREE.Mesh( ojod, material);
var mallamecha =new THREE.Mesh( mecha, material);
var mallabase =new THREE.Mesh( base, material);
var mallapied =new THREE.Mesh( pied, material);
var mallapiei =new THREE.Mesh( piei, material);

var bomba = new THREE.Geometry();
bomba.merge(mallacuerpo.geometry, mallacuerpo.matrix);
bomba.merge(mallojoi.geometry, mallojoi.matrix);
bomba.merge(mallojod.geometry, mallojod.matrix);
bomba.merge(mallamecha.geometry, mallamecha.matrix);
bomba.merge(mallabase.geometry, mallabase.matrix);
bomba.merge( mallapied.geometry,  mallapied.matrix);
bomba.merge( mallapiei.geometry,  mallapiei.matrix);

var mallabomba = new THREE.Mesh(bomba, material);

var escena = new THREE.Scene();
escena.add(mallabomba);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
