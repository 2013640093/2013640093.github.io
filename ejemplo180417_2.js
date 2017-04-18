var iluminacion=new THREE.AmbientalLight(0xFFFFFF);
var forma= new THREE.SphereGeometry(1);
var material = new THREE.MeshLamberMaterial({color:"#00cc00"});
var malla = new THREE.Mesh(forma,material);
malla.position.y=2;

var base= new THREE.Mesh(new THREE.Box.Geometry(5,.1,5), new THREE.MeshLambertMaterial({color:0xFFFFFF});

var escena = new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);


var camara= new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderizador.domElement );
renderizador.render(escena, camara);
