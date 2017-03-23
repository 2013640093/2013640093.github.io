//function pushar(e){
//	if (e.KeyCode==??)
//	camar.position++;
//	    }
	    
	    

function setup(){
	escena= new THREE.Scene();
	camara= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camara.position.z=5;
renderer= new THREE.WebGLRRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
	cubo=new THREE.BoxGeometry(1,1,1);
	material=new THREE.MeshNormalMaterial();
malla= new.THREE.Mesh(cubo,material);
escena.add(malla);
	var listener=function(){
camara.aspect=window.innerWidth/window.innerHeight;
	camara.uptadeProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
var tipoEvento=´rezize';
	var capturar=false;
	window.addEventListener(tipoEvento,listener,capturar);
}
function loop(){
requestAnimationFrame(loop);
malla.rotation.x += 0.01;
malla.rotation.y += 0.01;
renderer.renderer(escena,camara);
}

function push(e){
	if(e.keyCode===65)
        camara.position.z++;
	if(e.keyCode===90)
        camara.position.z--;
}
var escena, camara, renderer, malla, cubo, material;
setup();
loop();
//listener();
