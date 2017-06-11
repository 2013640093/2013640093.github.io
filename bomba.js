var campoVision =50; //grados
var relacionAspecto =window.innerWidth / window.innerHeight;
var planoCercano =0.2;
var planoLejano =1000;
var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.x = 500;    
camara.position.y = 90;
camara.position.z = 50;   
camara.lookAt(new THREE.Vector3(0,0,0));



var bottom = new THREE.CylinderGeometry( 14, 14, 5, 32 );

bottom.translate(0,0,0)
//var cuerpo = new THREE.SphereBufferGeometry(10,64,64);
var cuerpo = new THREE.SphereGeometry(10,64,64);
//var ojoi=new THREE.SphereBufferGeometry(10,32,32);
var ojoi=new THREE.SphereGeometry(2,32,32);
ojoi.translate(-2,2,8);
//var ojod=new THREE.SphereBufferGeometry(10,32,32);
var ojod=new THREE.SphereGeometry(2,32,32);
ojod.translate(2,2,8);
var mecha = new THREE.CylinderGeometry( 1, 1, 8, 32 );
mecha.translate(0,10,0);
var base = new THREE.CylinderGeometry( 2, 2, 4, 32 );
base.translate(0,10,0);

var figura = new THREE.Shape();
figura.moveTo(7, -6);
figura.lineTo(7.3, -6);
figura.lineTo(7.3, -6.1);
figura.lineTo(7, -6.1);
figura.lineTo(7, -6);
var pied = new THREE.ExtrudeGeometry( figura,
                                       {amount: 2} );

var figura2 = new THREE.Shape();
figura2.moveTo(-7, -6);
figura2.lineTo(-7.3, -6);
figura2.lineTo(-7.3, -6.1);
figura2.lineTo(-7, -6.1);
figura2.lineTo(-7, -6);
var piei = new THREE.ExtrudeGeometry( figura2,
                                       {amount: 2} );
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
var mallabot = new THREE.Mesh( bottom, material );

var bomba = new THREE.Geometry();
bomba.merge(mallacuerpo.geometry, mallacuerpo.matrix);
bomba.merge(mallojoi.geometry, mallojoi.matrix);
bomba.merge(mallojod.geometry, mallojod.matrix);
bomba.merge(mallamecha.geometry, mallamecha.matrix);
bomba.merge(mallabase.geometry, mallabase.matrix);
bomba.merge( mallapied.geometry,  mallapied.matrix);
bomba.merge( mallapiei.geometry,  mallapiei.matrix);
bomba.merge(mallabot.geometry, mallabot.matrix);

var mallabomba = new THREE.Mesh(bomba, material);
//mallabomba.rotateY( Math.PI/4);
var escena = new THREE.Scene();
escena.add(mallabomba);

/*var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;*/

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
