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
var geometry = new THREE.SphereGeometry( 10, 60, 60, Math.PI, Math.PI*2, 3*Math.PI/2);
geometry.translate(0,5,0);
var troncoForma = new THREE.CylinderGeometry(3, 6, 14);
var troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla.position.set(0, 6, 0);
var ojoi=new THREE.SphereGeometry(1,32,32);
ojoi.translate(-2.5,9,9);
//var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
//bottom.translate(0,-10,0)
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
var sphere = new THREE.Mesh( geometry);
var mallapiei =new THREE.Mesh( piei);
var mallapied =new THREE.Mesh( pied);
var mallojoi =new THREE.Mesh( ojoi);
var mallojod =new THREE.Mesh( ojod); 
//var mallabot = new THREE.Mesh( bottom);
this.merge(sphere.geometry, sphere.matrix);
this.merge(troncoMalla.geometry, troncoMalla.matrix);
this.merge(mallojoi.geometry, mallojoi.matrix);
this.merge(mallojod.geometry, mallojod.matrix);
this.merge(mallapied.geometry, mallapied.matrix);
this.merge(mallapiei.geometry, mallapiei.matrix);
//this.merge(mallabot.geometry, mallabot.matrix);
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
//var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
//bottom.translate(0,-10,0)
var ojoi=new THREE.SphereGeometry(0.75,32,32);
ojoi.translate(-1.5,7,5);
var ojod=new THREE.SphereGeometry(0.75,32,32);
ojod.translate(1.5,7,5);
var mallojod =new THREE.Mesh( ojod);
var mallojoi =new THREE.Mesh( ojoi);  
//var mallabot = new THREE.Mesh( bottom);
var Ovo = new THREE.Mesh( geometry);
Ovo.position.set(0, 0, 0);
this.merge(Ovo.geometry, Ovo.matrix);
this.merge(mallojoi.geometry, mallojoi.matrix);
this.merge(mallojod.geometry, mallojod.matrix);
//this.merge(mallabot.geometry, mallabot.matrix);
var mallahuevo = new THREE.Mesh(this);
mallahuevo.rotateY( Math.PI/8 );
/*mallahuevo.scale.set(0.75,0.75,0.75);
escena.add(mallahuevo);*/
}
/*CONSTRUCTOR DE HADA*/ 
PROTOTIPO.Hada = function(){  
THREE.Geometry.call( this );
var geometry = new THREE.SphereGeometry( 10, 32, 32 );
//var bottom = new THREE.CylinderGeometry( 28, 28, 2.5, 32 );
//bottom.translate(0,-10,0);
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
var malla = new THREE.Mesh( forma);
var mallai = new THREE.Mesh( formai);
var sphere = new THREE.Mesh( geometry);
//var mallabot = new THREE.Mesh( bottom);
mallai.scale.set(0.5,0.5,0.5)
malla.scale.set(0.5,0.5,0.5)
this.merge(sphere.geometry, sphere.matrix);
this.merge(malla.geometry, malla.matrix);
this.merge(mallai.geometry, mallai.matrix);
//this.merge(mallabot.geometry, mallabot.matrix);
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
//var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
//bottom.translate(0,-10,0) 
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
//var mallabot = new THREE.Mesh( bottom);
var Ovo = new THREE.Mesh( geometry);
Ovo.position.set(0, 0, 0); 
  
this.merge(Ovo.geometry, Ovo.matrix);
this.merge(mallojos.geometry, mallojos.matrix);
this.merge(mallojod.geometry, mallojod.matrix);
this.merge(mallojoi.geometry, mallojoi.matrix);
this.merge(mallapic.geometry, mallapic.matrix);
this.merge(mallapiei.geometry, mallapiei.matrix);
this.merge(mallapied.geometry, mallapied.matrix);
//this.merge(mallabot.geometry, mallabot.matrix);
var mallapingui = new THREE.Mesh( this);
mallapingui.rotateY( Math.PI/8 );
/*mallapingui.scale.set(0.75,0.75,0.75);
escena.add(mallapingui);*/ 
}

/*CONSTRUCTOR DE ZORRO*/ 
PROTOTIPO.Zorro = function(){
  THREE.Geometry.call( this ); 
var geometry = new THREE.BoxGeometry( 8, 7, 10 );
geometry.translate(0,0,0);
var geometry2 = new THREE.BoxGeometry(10,3,4);
geometry2.translate(0,2,7);
var geometry3 = new THREE.BoxGeometry(4,2,3);
geometry3.translate(0,3,10.5);
var geometry4 = new THREE.BoxGeometry(8,5,4);
geometry4.translate(0,5.5,7);
var geometry5 = new THREE.BoxGeometry(3,5,1.5);
geometry5.translate(2.5,10.5,6.75);
var geometry6 = new THREE.BoxGeometry(3,5,1.5);
geometry6.translate(-2.5,10.5,6.75);
var geometry7 = new THREE.BoxGeometry(3,3,8);
geometry7.translate(0,-2,-9);
var geometry8 = new THREE.BoxGeometry(2,9,2);
geometry8.translate(2,-7,2.5);
var geometry9 = new THREE.BoxGeometry(2,9,2);
geometry9.translate(-2,-7,2.5);
var geometry10 = new THREE.BoxGeometry(2,9,2);
geometry10.translate(2,-7,-2.5);
var geometry11 = new THREE.BoxGeometry(2,9,2);
geometry11.translate(-2,-7,-2.5);
var geometry12 = new THREE.BoxGeometry(2,2,1);
geometry12.translate(2,-10.5,4);
var geometry13 = new THREE.BoxGeometry(2,2,1);
geometry13.translate(-2,-10.5,4);
var geometry14 = new THREE.BoxGeometry(2,2,1);
geometry14.translate(2,-10.5,-1);
var geometry15 = new THREE.BoxGeometry(2,2,1);
geometry15.translate(-2,-10.5,-1);
var ojoi=new THREE.SphereGeometry(0.5,32,32);
ojoi.translate(2.5,6,9);
var ojod=new THREE.SphereGeometry(0.5,32,32);
ojod.translate(-2.5,6,9);
//var bottom = new THREE.CylinderGeometry( 14, 14, 2.5, 32 );
//bottom.translate(0,-13.25,0)
//var mallabot = new THREE.Mesh( bottom);
var mallojod =new THREE.Mesh( ojod);
var mallojoi =new THREE.Mesh( ojoi,);
var cube15 = new THREE.Mesh( geometry15);
var cube14 = new THREE.Mesh( geometry14);
var cube13 = new THREE.Mesh( geometry13);
var cube12 = new THREE.Mesh( geometry12);
var cube11 = new THREE.Mesh( geometry11);
var cube10 = new THREE.Mesh( geometry10);
var cube9 = new THREE.Mesh( geometry9);
var cube8 = new THREE.Mesh( geometry8);
var cube7 = new THREE.Mesh( geometry7);
var cube3 = new THREE.Mesh( geometry3);
var cube6 = new THREE.Mesh( geometry6);
var cube4 = new THREE.Mesh( geometry4);
var cube5 = new THREE.Mesh( geometry5);
var cube = new THREE.Mesh( geometry);
var cube2 = new THREE.Mesh( geometry2);
this .merge(cube.geometry, cube.matrix);
this .merge(cube2.geometry, cube2.matrix);
this .merge(cube3.geometry, cube3.matrix);
this .merge(cube4.geometry, cube4.matrix);
this .merge(cube5.geometry, cube5.matrix);
this .merge(cube6.geometry, cube6.matrix);
this .merge(cube7.geometry, cube7.matrix);
this .merge(cube8.geometry, cube8.matrix);
this .merge(cube9.geometry, cube9.matrix);
this .merge(cube10.geometry, cube10.matrix);
this .merge(cube11.geometry, cube11.matrix);
this .merge(cube12.geometry, cube12.matrix);
this .merge(cube13.geometry, cube12.matrix);
this .merge(cube14.geometry, cube12.matrix);
this .merge(cube15.geometry, cube12.matrix);
this .merge(mallojoi.geometry, mallojoi.matrix);
this .merge(mallojod.geometry, mallojod.matrix);
//this .merge(mallabot.geometry, mallabot.matrix);  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
PROTOTIPO.Peon.prototype = new THREE.Geometry();
PROTOTIPO.Hada.prototype = new THREE.Geometry();
PROTOTIPO.Huevo.prototype = new THREE.Geometry();
PROTOTIPO.Hongo.prototype = new THREE.Geometry();
PROTOTIPO.Pinguin.prototype = new THREE.Geometry();
PROTOTIPO.Zorro.prototype = new THREE.Geometry();
///////////////////////////////////////////////////////////////////////////////////
/*CONSTRUCCIÓN DEL AGENTE*/
function Agent( x=0, y=0 ){
  THREE.Object3
  THREE.Object3D.call( this );
  this.position.x = x;
  this.position.y = y;
  }
Agent.prototype = new THREE.Object3D();

Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};
/////////////////////////////////////////////Ambiente///////////// ///////////////
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
/*PIEZAS*/
Environment.prototype.setMapPiece = function( map ){
  for( var i = 0; i < map.length; i++){
    for(var j = 0; j < map.length; j++){
      if( map[i][j] === "a"){
        this.add( new BOMBA( true,-95+30*i, -95+30*j ) );
    }
       if( map[i][j] === "A"){
        this.add( new BOMBA( false,-95+30*i, -95+30*j ) );
    }
        if( map[i][j] === "h"){
        this.add( new HONGO( true,-95+30*i, -95+30*j ) );
    }
       if( map[i][j] === "H"){
        this.add( new HONGO( false,-95+30*i, -95+30*j ) );
    }
          if( map[i][j] === "f"){
        this.add( new HADA( true,-95+30*i, -95+30*j ) );
    }
       if( map[i][j] === "F"){
        this.add( new HADA( false,-95+30*i, -95+30*j ) );
    }
        if( map[i][j] === "e"){
        this.add( new HUEVO( true,-95+30*i, -95+30*j ) );
    }
       if( map[i][j] === "E"){
        this.add( new HUEVO( false,-95+30*i, -95+30*j ) );
    }
        if( map[i][j] === "p"){
        this.add( new PINGUIN( true,-95+30*i, -95+30*j ) );
    }
       if( map[i][j] === "P"){
        this.add( new PINGUIN( false,-95+30*i, -95+30*j ) );
    }
       if( map[i][j] === "z"){
        this.add( new ZORRO( true,-95+30*i, -95+30*j ) );
    }
       if( map[i][j] === "Z"){
        this.add( new ZORRO( false,-95+30*i, -95+30*j ) );
    }
   }
  }
}
/*FUNCIONES DE PIEZAS*/
function BOMBA(T, x, y ){
  Agent.call( this, x, y );
  var cargador = new THREE.TextureLoader();
  this.T=T;
  if(this.T===true)
    textura = cargador.load( 'blu.png' );
  else
    textura=cargador.load('t3.jpg');
  this.castShadow = true;
  this.position.x = x;
  this.position.y = y;
  this.position.z = 5;
  this.actuator = new THREE.Mesh( new PROTOTIPO.Peon(), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.actuator.scale.set( 0.75, 0.75, 0.75 );
  this.actuator.rotateX( Math.PI/2 );
   this.actuator.castShadow = true;
  this.add( this.actuator );
  document.addEventListener("keydown", movement, false);
  }
  BOMBA.prototype = new Agent();
////////
function HONGO(T, x, y ){
  Agent.call( this, x, y );
  var cargador = new THREE.TextureLoader();
  this.T=T;
  if(this.T===true)
    textura = cargador.load( 'blu.png' );
  else
    textura=cargador.load('t3.jpg');
  this.castShadow = true;
  this.position.x = x;
  this.position.y = y;
  this.position.z = 10;
  this.actuator = new THREE.Mesh( new PROTOTIPO.Hongo(), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.actuator.scale.set( 0.75, 0.75,0.75 );
  this.actuator.rotateX( Math.PI/2 );
  this.actuator.castShadow = true;
  this.add( this.actuator );
  document.addEventListener("keydown", movement, false);
  }
  HONGO.prototype = new Agent();
////////
function HADA(T, x, y ){
  Agent.call( this, x, y );
  var cargador = new THREE.TextureLoader();
  this.T=T;
  if(this.T===true)
    textura = cargador.load( 'blu.png' );
  else
    textura=cargador.load('t3.jpg');
  this.castShadow = true;
  this.position.x = x;
  this.position.y = y;
  this.position.z =5;
  this.actuator = new THREE.Mesh( new PROTOTIPO.Hada(), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.actuator.scale.set(0.5, 0.5, 0.5 );
  //this.actuator.rotateX( Math.PI/2 );
   this.actuator.castShadow = true;
  this.add( this.actuator );
  document.addEventListener("keydown", movement, false);
  }
  HADA.prototype = new Agent();
///////
function PINGUIN(T, x, y ){
  Agent.call( this, x, y );
  var cargador = new THREE.TextureLoader();
  this.T=T;
  if(this.T===true)
    textura = cargador.load( 'blu.png' );
  else
    textura=cargador.load('t3.jpg');
  this.castShadow = true;
  this.position.x = x;
  this.position.y = y;
  this.position.z = 10;
  this.actuator = new THREE.Mesh( new PROTOTIPO.Pinguin(), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.actuator.scale.set(0.75, 0.75, 0.75 );
  this.actuator.rotateX( Math.PI/2 );
   this.actuator.castShadow = true;
  this.add( this.actuator );
  document.addEventListener("keydown", movement, false);
  }
  PINGUIN.prototype = new Agent();
///////
function HUEVO(T, x, y ){
  Agent.call( this, x, y );
  var cargador = new THREE.TextureLoader();
  this.T=T;
  if(this.T===true)
    textura = cargador.load( 'blu.png' );
  else
    textura=cargador.load('t3.jpg');
  this.castShadow = true;
  this.position.x = x;
  this.position.y = y;
  this.position.z = 10;
  this.actuator = new THREE.Mesh( new PROTOTIPO.Huevo(), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.actuator.scale.set( 0.75, 0.75, 0.75 );
  this.actuator.rotateX( Math.PI/2 );
  this.actuator.castShadow = true;
  this.add( this.actuator );
  document.addEventListener("keydown", movement, false);
  }
  HUEVO.prototype = new Agent();
///////
function ZORRO(T, x, y ){
  Agent.call( this, x, y );
  var cargador = new THREE.TextureLoader();
  this.T=T;
  if(this.T===true)
    textura = cargador.load( 'blu.png' );
  else
    textura=cargador.load('t3.jpg');
  this.castShadow = true;
  this.position.x = x;
  this.position.y = y;
  this.position.z = 10;
  this.actuator = new THREE.Mesh( new PROTOTIPO.Zorro(), new THREE.MeshLambertMaterial( {map: textura} ) );
  this.actuator.scale.set( 1, 1, 1 );
  this.actuator.rotateX( Math.PI/2 );
   this.actuator.castShadow = true;
  this.add( this.actuator );
  document.addEventListener("keydown", movement, false);
  }
  ZORRO.prototype = new Agent();

/*EVENTOS*/
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
  pieza[1] = " fahafeee ";
  pieza[2] = " ahzhaepe ";
  pieza[3] = " h   heee ";
  pieza[4] = "          ";
  pieza[5] = "          ";
  pieza[6] = " EEEH   H ";
  pieza[7] = " EPEAHZHA ";
  pieza[8] = " EEEFAHAF ";
  pieza[9] = "          ";
  
  environment = new Environment();
  environment.setMap( mapa );
  environment.setMapPiece( pieza );
  
  
  
/*var relacionAspecto =window.innerWidth / window.innerHeight;
var planoCercano =0.5;
var planoLejano =1000;
 var campoVision =40; //grados
var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
//camara.position.x = 100;    
camara.position.y = 200;
camara.position.z = -300;   
camara.lookAt(new THREE.Vector3(0,0,0));*/
  
  
  camara = new THREE.PerspectiveCamera(45, (window.innerWidth/window.innerHeight),0.5, 1000 );
  //camara.position.x=100;
 camara.position.z =-270;
 camara.position.y =-270;
 
  /////////////////CAMARA/////////////////
/* var campoVision=30;
var relacionAspecto =window.innerWidth / window.innerHeight;
var planoCercano =0.2;
var planoLejano =1000;
var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);*/
//camara.position.x = 300;    
////camara.position.y = -500;
//camara.position.z = 100;   
camara.lookAt(new THREE.Vector3(0,0,0));
///////////////////render///////////////////////
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
//  renderer.setSize( window.innerHeight, window.innerHeight);
  renderer.shadowMap.enabled=true;
  document.body.appendChild( renderer.domElement );
///////////////////////LUZ
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
