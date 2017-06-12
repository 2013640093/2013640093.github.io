/////////////////GEOMETRIAS//////////////////////
var PROTOTIPO = new Object();
/*CONSTRUCTOR DE BOMBA*/
PROTOTIPO.Peon = function(){
  THREE.Geometry.call( this ); 
var cuerpo = new THREE.SphereGeometry(10,64,64);
cuerpo.translate(0,2,0);
var ojoi=new THREE.SphereGeometry(2,32,32);
ojoi.translate(-2,4,8);
var ojod=new THREE.SphereGeometry(2,32,32);
ojod.translate(2,4,8);
var mecha = new THREE.CylinderGeometry( 1, 1, 8, 32 );
mecha.translate(0,12,0);
var base = new THREE.CylinderGeometry( 2, 2, 4, 32 );
base.translate(0,12,0);
var figura = new THREE.Shape();
figura.moveTo(7, -6);
figura.lineTo(7.3, -6);
figura.lineTo(7.3, -6.1);
figura.lineTo(7, -6.1);
figura.lineTo(7, -6);
var pied = new THREE.ExtrudeGeometry( figura, {amount: 2} );
var figura2 = new THREE.Shape();
figura2.moveTo(-7, -6);
figura2.lineTo(-7.3, -6);
figura2.lineTo(-7.3, -6.1);
figura2.lineTo(-7, -6.1);
figura2.lineTo(-7, -6);
var piei = new THREE.ExtrudeGeometry( figura2,{amount: 2} );
var mallacuerpo =new THREE.Mesh( cuerpo);
var mallojoi =new THREE.Mesh( ojoi);
var mallojod =new THREE.Mesh( ojod);
var mallamecha =new THREE.Mesh( mecha);
var mallabase =new THREE.Mesh( base);
var mallapied =new THREE.Mesh( pied);
var mallapiei =new THREE.Mesh( piei);
this.merge(mallacuerpo.geometry, mallacuerpo.matrix);
this.merge(mallojoi.geometry, mallojoi.matrix);
this.merge(mallojod.geometry, mallojod.matrix);
this.merge(mallamecha.geometry, mallamecha.matrix);
this.merge(mallabase.geometry, mallabase.matrix);
this.merge( mallapied.geometry,  mallapied.matrix);
this.merge( mallapiei.geometry,  mallapiei.matrix);
var mallabomba = new THREE.Mesh(this);
mallabomba.rotateY( Math.PI/4 );
mallabomba.translate(0,4,0);
 }
/*CONSTRUCTOR DE HONGO*/ 
PROTOTIPO.Hongo = function(){
  THREE.Geometry.call( this );
  var troncoForma = new THREE.CylinderGeometry(3, 6, 14);
var troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla.position.set(0, 6, 0);
var ojoi=new THREE.SphereGeometry(1,32,32);
ojoi.translate(-2.5,9,9);
var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
bottom.translate(0,-10,0)
var ojod=new THREE.SphereGeometry(1,32,32);
ojod.translate(2.5,9,9);
var figura = new THREE.Shape();
figura.moveTo(6, -7);
figura.lineTo(6.2, -7);
figura.lineTo(6.2, -7.05);
figura.lineTo(6, -7.05);
figura.lineTo(6, -7);
var pied = new THREE.ExtrudeGeometry( figura, {amount: .75} );
var figura2 = new THREE.Shape();
figura2.moveTo(-6, -7);
figura2.lineTo(-6.2, -7);
figura2.lineTo(-6.2, -7.05);
figura2.lineTo(-6, -7.05);
figura2.lineTo(-6, -7);
var piei = new THREE.ExtrudeGeometry( figura2, {amount: 0.75} );
var mallapiei =new THREE.Mesh( piei);
var mallapied =new THREE.Mesh( pied);
var mallojoi =new THREE.Mesh( ojoi);
var mallojod =new THREE.Mesh( ojod); 
var mallabot = new THREE.Mesh( bottom);
this.merge(sphere.geometry, sphere.matrix);
this.merge(troncoMalla.geometry, troncoMalla.matrix);
this.merge(mallojoi.geometry, mallojoi.matrix);
this.merge(mallojod.geometry, mallojod.matrix);
this.merge(mallapied.geometry, mallapied.matrix);
this.merge(mallapiei.geometry, mallapiei.matrix);
this.merge(mallabot.geometry, mallabot.matrix);
/*var escena = new THREE.Scene();
mallahongoForma.scale.set(0.75,0.75,0.75);
escena.add(mallahongoForma);*/
}
/*CONSTRUCTOR DE HUEVO*/ 
PROTOTIPO.Huevo= function(){
  THREE.Geometry.call( this );
  var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {
    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    points.push( point );}
geometry = new THREE.LatheGeometry( points, 32 );
var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
bottom.translate(0,-10,0)
var ojoi=new THREE.SphereGeometry(0.75,32,32);
ojoi.translate(-1.5,7,5);
var ojod=new THREE.SphereGeometry(0.75,32,32);
ojod.translate(1.5,7,5);
var mallojod =new THREE.Mesh( ojod);
var mallojoi =new THREE.Mesh( ojoi);  
var mallabot = new THREE.Mesh( bottom);
var Ovo = new THREE.Mesh( geometry);
Ovo.position.set(0, 0, 0);
this.merge(Ovo.geometry, Ovo.matrix);
this.merge(mallojoi.geometry, mallojoi.matrix);
this.merge(mallojod.geometry, mallojod.matrix);
this.merge(mallabot.geometry, mallabot.matrix);
var mallahuevo = new THREE.Mesh(this);
mallahuevo.rotateY( Math.PI/8 );
/*mallahuevo.scale.set(0.75,0.75,0.75);
escena.add(mallahuevo);*/
}
/*CONSTRUCTOR DE HADA*/ 
PROTOTIPO.Hada = function(){  
THREE.Geometry.call( this );
var geometry = new THREE.SphereGeometry( 10, 32, 32 );
var bottom = new THREE.CylinderGeometry( 28, 28, 2.5, 32 );
bottom.translate(0,-10,0);
var figura = new THREE.Shape();
figura.moveTo(8,8);
figura.lineTo(27.5,15);
figura.lineTo(30,25);
figura.lineTo(8.75,11.25);
figura.lineTo(8,8);
var forma = new THREE.ExtrudeGeometry( figura,{amount: 1} );
var figurai = new THREE.Shape();
figurai.moveTo(-8,8);
figurai.lineTo(-25,10);
figurai.lineTo(-30,25);
figurai.lineTo(-8.75,11.25);
figurai.lineTo(-8,8);
var formai = new THREE.ExtrudeGeometry( figurai, {amount: 1} );
var malla = new THREE.Mesh( forma, material );
var mallai = new THREE.Mesh( formai, material );
var sphere = new THREE.Mesh( geometry, material );
var mallabot = new THREE.Mesh( bottom, material );
mallai.scale.set(0.5,0.5,0.5)
malla.scale.set(0.5,0.5,0.5)
this.merge(sphere.geometry, sphere.matrix);
this.merge(malla.geometry, malla.matrix);
this.merge(mallai.geometry, mallai.matrix);
this.merge(mallabot.geometry, mallabot.matrix);
var material3 = new THREE.MeshNormalMaterial();
var mallahada = new THREE.Mesh(this);
//mallahada.rotateY( Math.PI/8 );
/*var escena = new THREE.Scene();
mallahada.scale.set(0.5,0.5,0.5)*/

}
/*CONSTRUCTOR DE PINGUIN*/ 
PROTOTIPO.Pinguin = function(){
  THREE.Geometry.call( this ); 
var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {
    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    points.push( point );}
  geometry = new THREE.LatheGeometry( points, 32 ); 
var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
bottom.translate(0,-10,0) 
var ojoi=new THREE.SphereGeometry(0.75,32,32);
ojoi.translate(-1.5,12,5);
var ojod=new THREE.SphereGeometry(0.75,32,32);
ojod.translate(1.5,12,5);
var ojos=new THREE.SphereGeometry(5,32,32);
ojos.translate(0,12,0);
var forma = new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 1,  9,  5 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  10.5, 5 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-1,  10.5, 5 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-1,  9,  5 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 0,  9.75,  7.5 ) ); // Vértice 4
forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 5
forma.computeBoundingSphere();
forma.computeFaceNormals();
var figura = new THREE.Shape();
figura.moveTo(6, -7);
figura.lineTo(6.1, -7);
figura.lineTo(6.1, -7.05);
figura.lineTo(6, -7.05);
figura.lineTo(6, -7);
var pied = new THREE.ExtrudeGeometry( figura, {amount: .75} );
var figura2 = new THREE.Shape();
figura2.moveTo(-6, -7);
figura2.lineTo(-6.1, -7);
figura2.lineTo(-6.1, -7.05);
figura2.lineTo(-6, -7.05);
figura2.lineTo(-6, -7);
var piei = new THREE.ExtrudeGeometry( figura2, {amount: 0.75} );

var mallojos =new THREE.Mesh( ojos);
var mallojoi =new THREE.Mesh( ojoi);
var mallojod =new THREE.Mesh( ojod);
var mallapiei =new THREE.Mesh( piei);
var mallapied =new THREE.Mesh( pied);
var mallapic = new THREE.Mesh( forma);
var mallabot = new THREE.Mesh( bottom);
var Ovo = new THREE.Mesh( geometry);
Ovo.position.set(0, 0, 0); 
  
this.merge(Ovo.geometry, Ovo.matrix);
this.merge(mallojos.geometry, mallojos.matrix);
this.merge(mallojod.geometry, mallojod.matrix);
this.merge(mallojoi.geometry, mallojoi.matrix);
this.merge(mallapic.geometry, mallapic.matrix);
this.merge(mallapiei.geometry, mallapiei.matrix);
this.merge(mallapied.geometry, mallapied.matrix);
this.merge(mallabot.geometry, mallabot.matrix);
var mallapingui = new THREE.Mesh( this);
mallapingui.rotateY( Math.PI/8 );
/*mallapingui.scale.set(0.75,0.75,0.75);
escena.add(mallapingui);*/ 
}

/*CONSTRUCTOR DE ZORRO*/ 
PROTOTIPO.Zorro = function(){
  THREE.Geometry.call( this ); 
  
  
  
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
PROTOTIPO.Peon.prototype = new THREE.Geometry();
/*CONSTRUCCIÓN DEL AGENTE*/
function Agent( x=0, y=0 ){
  THREE.Object3
  
  D.call( this );
  this.position.x = x;
  this.position.y = y;
  }

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

function Environment(){
  THREE.Scene.call( this );
  }

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function() {
  for ( var i = 0; i < this.children.length; i++ ){
    if ( this.children[i].sense !== undefined )
      this.children[i].sense( this );
   }
}

Environment.prototype.plan = function(){
  for ( var i = 0; i < this.children.length; i++ ){
    if ( this.children[i].plan !== undefined )
      this.children[i].plan( this );
   }
}

Environment.prototype.act = function(){
  for ( var i = 0; i < this.children.length; i++ ){
    if ( this.children[i].act !== undefined )
      this.children[i].act( this );
   }
}
/*TABLERO*/
function CasillaB( size, x, y ){
  var cargador = new THREE.TextureLoader();
  textura = cargador.load( 'marmol_blanco.jpg' );
  THREE.Mesh.call( this, new THREE.BoxGeometry( size, size, .1 ), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.size = size;
  this.position.x = x;
  this.position.y = y;
  this.receiveShadow=true;
}
CasillaB.prototype = new THREE.Mesh();
function CasillaN( size, x, y ){
  var cargador = new THREE.TextureLoader();
  textura = cargador.load( 'marmol_negro.jpg' );
  THREE.Mesh.call( this, new THREE.BoxGeometry( size, size, .1), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.size = size;
  this.position.x = x;
  this.position.y = y;
  this.receiveShadow=true;
}
CasillaN.prototype = new THREE.Mesh();
function Contorno( size, x, y ){
  var cargador = new THREE.TextureLoader();
  textura = cargador.load( 'marmol_gris.jpg' );
  THREE.Mesh.call( this, new THREE.BoxGeometry( size, size, .2), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.size = size;
  this.position.x = x;
  this.position.y = y;
  this.receiveShadow=true;
}
Contorno.prototype = new THREE.Mesh();

Environment.prototype.setMap = function( map ){
  for ( var i = 0; i < map.length; i++ ){
    for ( var j = 0; j < map.length; j++ ){
      if ( map[i][j] === "B" )
        this.add( new CasillaB( 30, -95+30*i, -95+30*j ) );
      else if ( map[i][j] === "N" )
        this.add( new CasillaN( 30, -95+30*i, -95+30*j ) );
      else if ( map[i][j] === "C" )
        this.add( new Contorno( 30, -95+30*i, -95+30*j ) );
      }
   }
 }

Environment.prototype.setMapPiece = function( map ){
  for( var i = 0; i < map.length; i++){
    for(var j = 0; j < map.length; j++){
      if( map[i][j] === "p")
        this.add( new Pieza( -95+30*i, -95+30*j ) );
    }
  }
}

function Pieza( x, y ){
  Agent.call( this, x, y );
  var cargador = new THREE.TextureLoader();
  this.castShadow = true;
  this.position.x = x;
  this.position.y = y;
  this.position.z = 5;
  textura = cargador.load( 'marmol_blanco.jpg' );
  this.actuator = new THREE.Mesh( new PROTOTIPO.Peon(), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.actuator.scale.set( 1, 1, 1 );
  this.actuator.rotateX( Math.PI/2 );
   this.actuator.castShadow = true;
  this.add( this.actuator );
  document.addEventListener("keydown", movement, false);
  }
  
Pieza.prototype = new Agent();

function movement(event) { 
  var keyboard = event.which;  
  var avance = 30;
  switch ( keyboard ){
    case 37:
      environment.children[100].position.x+=-avance;
    break;
    case 38:
      environment.children[100].position.y+=avance;
    break;
    case 39:
      environment.children[100].position.x+=avance;
    break;
    case 40:
      environment.children[100].position.y+=-avance;
    break;
    }
}

function setup(){
  var mapa = new Array();
  mapa[0] = "CCCCCCCCCC";
  mapa[1] = "CBNBNBNBNC";
  mapa[2] = "CNBNBNBNBC";
  mapa[3] = "CBNBNBNBNC";
  mapa[4] = "CNBNBNBNBC";
  mapa[5] = "CBNBNBNBNC";
  mapa[6] = "CNBNBNBNBC";
  mapa[7] = "CBNBNBNBNC";
  mapa[8] = "CNBNBNBNBC";
  mapa[9] = "CCCCCCCCCC";
  var pieza = new Array();
  pieza[0] = "          ";
  pieza[1] = " p p p p p";
  pieza[2] = "  p p p p ";
  pieza[3] = "          ";
  pieza[4] = "          ";
  pieza[5] = "          ";
  pieza[6] = "          ";
  pieza[7] = "  p p p p ";
  pieza[8] = " p p p p p";
  pieza[9] = "          ";
  
  environment = new Environment();
  environment.setMap( mapa );
  environment.setMapPiece( pieza );
  camara = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, .7, 1000 );
  camara.position.z =150;
  camara.position.y =-500;
  camara.lookAt( new THREE.Vector3( 0, 0, 0 ) );
  renderer = new THREE.WebGLRenderer();
  //renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  renderer.setSize( window.innerHeight, window.innerHeight);
  renderer.shadowMap.enabled=true;
  document.body.appendChild( renderer.domElement );
  luzPuntual=new THREE.PointLight(0xFFFFFF);
  luzPuntual.position.x = 350;
  luzPuntual.position.y = -350;
  luzPuntual.position.z = 150;
  luzPuntual.castShadow=true;
  environment.add( camara );
  environment.add( luzPuntual );
}

function SeleccionD(event){
  event.preventDefault();
  var mouse3D=new THREE.Vector3((event.clientX/window.innerWidth)*2-1,-(event.clientY/window.innerHeight)*2+1,0);     
  var raycaster=new THREE.Raycaster();                                        
  raycaster.setFromCamera(mouse3D,camara);
  seleccion=raycaster.intersectObjects(environment.children,true);
  seleccion[0].object.material.color.setHex(0xff00ff);  
  if(seleccion.length>0)
    id=seleccion[0].object.id;
  console.log(id);
}

function SeleccionU(event) {
  event.preventDefault();
  seleccion[0].object.material.color.setHex(0xffffff);  
}

function loop(){
  requestAnimationFrame( loop );
  environment.sense();
  environment.plan();
  environment.act();
  renderer.render( environment, camara );
  }
  
var environment, camara, renderer, luzpuntual;

setup();
loop();
