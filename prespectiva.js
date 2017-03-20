var campoVision =45; //grados
//var campoVision =90; //grados
//var campoVision =20; //grados

var relacionAspecto =window.innerWidth / window.innerHeight;
var planoCercano =1;
var planoLejano =1000;
var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z= 15;

var material = new THREE.MeshNormalMaterial();
var cubo= new THREE.Mesh(new THREE.BoxGeometry(2,2,2),material);
cubo.rotateY(Math.PI/4);

var esfera1= new THREE.Mesh(new THREE.SphereGeometry(1), material);
esfera1.position.x=5;

var esfera2= new THREE.Mesh(new THREE.SphereGeometry(1), material);
esfera2.position.x=-5;
esfera2.position.y=-10;

var escena= new THREE.Scene();
escena.add(esfera1);
escena.add(esfera2);
escena.add(cubo);

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderizador.domElement );
renderizador.render(escena, camara);
