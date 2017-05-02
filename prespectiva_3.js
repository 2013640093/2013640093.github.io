//var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
//directionalLight.position.y=20;
//directionalLight.position.z=30;

//var iluminacion = new THREE.PointLight(0xF932D2);
//iluminacion.position.y=200;

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.y=200;
var campoVision =50; //grados
//var campoVision =90; //grados
//var campoVision =20; //grados
var relacionAspecto =window.innerWidth / window.innerHeight;
var planoCercano =0.1;
var planoLejano =1000;
var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.x = 100;    
camara.position.y = 40;
camara.position.z = 200;   
camara.lookAt(new THREE.Vector3(0,0,0));
//////////////////
 var escena = new THREE.Scene();
escena.add(spotLight);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;
//escena.add(iluminacion);
//iluminacion.castShadow = true;
///////////////TABLERO////////////////
function Tabla(){
 var color=0;
    for(var i=0;i<8;i++){
      for(var j=0;j<8;j++){
        //var cuboForma=  new THREE.BoxGeometry(10,5,10);
        //cuboForma.translate(-35+i*10,0,35-j*10);
         var cuboForma=  new THREE.BoxGeometry(30,2,30);
        cuboForma.translate(-95+i*30,0,95-j*30);
        if(color%2!==0){
          //var material = new THREE.MeshBasicMaterial({color: 0xcccccc});
         var material = new THREE.MeshPhongMaterial({color: 0xcc0000});
        }else{
          //var material = new THREE.MeshBasicMaterial({color: 0x555555});
         var material = new THREE.MeshPhongMaterial({color: 0x004c99});
        }
        var cuboMalla = new THREE.Mesh(cuboForma,material);
        color=color+1;
          //cuboMalla.rotateY( Math.PI/4 );
          //cuboMalla.rotateZ( Math.PI/8 );
        escena.add(cuboMalla);
       cuboMalla.receiveShadow=true;
       //
      }
      color=color+1;
    }
}
/////////////BOMBA////////////////
//var cuerpo = new THREE.SphereBufferGeometry(10,64,64);
function BOMBA (){
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
//
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
var material1 = new THREE.MeshPhongMaterial();

var mallacuerpo =new THREE.Mesh( cuerpo, material1);
var mallojoi =new THREE.Mesh( ojoi, material1);
var mallojod =new THREE.Mesh( ojod, material1);
var mallamecha =new THREE.Mesh( mecha, material1);
var mallabase =new THREE.Mesh( base, material1);
var mallapied =new THREE.Mesh( pied, material1);
var mallapiei =new THREE.Mesh( piei, material1);

var bomba = new THREE.Geometry();
bomba.merge(mallacuerpo.geometry, mallacuerpo.matrix);
bomba.merge(mallojoi.geometry, mallojoi.matrix);
bomba.merge(mallojod.geometry, mallojod.matrix);
bomba.merge(mallamecha.geometry, mallamecha.matrix);
bomba.merge(mallabase.geometry, mallabase.matrix);
bomba.merge( mallapied.geometry,  mallapied.matrix);
bomba.merge( mallapiei.geometry,  mallapiei.matrix);
bomba.translate(-52,10,70);
var mallabomba = new THREE.Mesh(bomba, material1);
//mallabomba.rotateY( Math.PI/12 );
//mallabomba.rotateZ( Math.PI/4 );
escena.add(mallabomba);
mallabomba.castShadow = true;
}

//////HONGO///////
function HONGO(){
var geometry = new THREE.SphereGeometry( 10, 60, 60, Math.PI, Math.PI*2, 3*Math.PI/2);
geometry.translate(0,5,0)
var material = new THREE.MeshPhongMaterial( { color: 0xddddff } );
var sphere = new THREE.Mesh( geometry, material );
var troncoForma = new THREE.CylinderGeometry(3, 6, 14);
var troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla.position.set(0, 6, 0);
var ojoi=new THREE.SphereGeometry(1,32,32);
ojoi.translate(-2.5,9,9);
var mallojoi =new THREE.Mesh( ojoi, material);
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
hongoForma.translate(90,10,-77);
var material2 = new THREE.MeshPhongMaterial();
var mallahongoForma = new THREE.Mesh(hongoForma, material2);
//mallahongoForma.rotateY( Math.PI/4 );
//mallahongoForma.rotateZ( Math.PI/4 );
escena.add(mallahongoForma);
 mallahongoForma.castShadow = true;
}
////////////////
Tabla();
HONGO();
BOMBA();
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderizador.domElement );
renderizador.shadowMapEnabled = true;
var helper = new THREE.CameraHelper( spotLight.shadow.camera );
scene.add( helper );
renderizador.render(escena, camara);
