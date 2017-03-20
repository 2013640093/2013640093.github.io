 var escena = new THREE.Scene();
///////////////TABLERO////////////////
function Tabla(){
 var color=0;
    for(var i=0;i<8;i++){
      for(var j=0;j<8;j++){
        //var cuboForma=  new THREE.BoxGeometry(10,5,10);
        //cuboForma.translate(-35+i*10,0,35-j*10);
         var cuboForma=  new THREE.BoxGeometry(20,5,20);
        cuboForma.translate(-70+i*20,0,70-j*20);
        if(color%2!==0){
          //var material = new THREE.MeshBasicMaterial({color: 0xcccccc});
         var material = new THREE.MeshBasicMaterial({color: 0xcc0000});
        }else{
          //var material = new THREE.MeshBasicMaterial({color: 0x555555});
         var material = new THREE.MeshBasicMaterial({color: 0x004c99});
        }
        var cuboMalla = new THREE.Mesh(cuboForma,material);
        color=color+1;
          cuboMalla.receiveShadow=true;
          cuboMalla.rotateY( Math.PI/4 );
          cuboMalla.rotateZ( Math.PI/8 );
        escena.add(cuboMalla);
      }
      color=color+1;
    }
}
/////////////BOMBA////////////////
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
var material1 = new THREE.MeshNormalMaterial();

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
bomba.translate(40,0,40);
var mallabomba = new THREE.Mesh(bomba, material1);
mallabomba.rotateY( Math.PI/4 );
mallabomba.rotateZ( Math.PI/4 );
escena.add(mallabomba);

////////////////
var camara = new THREE.PerspectiveCamera();
camara.position.z = 550;
Tabla();
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
