//CUADRO 1
var A = new THREE.Geometry();
A.vertices.push( new THREE.Vector3( -10,  0,  10 ) ); // Vértice 0
A.vertices.push( new THREE.Vector3( 0,  0, 10) ); // Vértice 1
A.vertices.push( new THREE.Vector3(-10,  0,  0 ) ); // Vértice 3
A.vertices.push( new THREE.Vector3( 0,  0,  0 ) ); // Vértice 4
A.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 0
A.faces.push( new THREE.Face3( 4, 3, 1 ) ); // Cara 1
A.computeBoundingSphere();
A.computeFaceNormals();

//CUADRO 2
var B = new THREE.Geometry();
B.vertices.push( new THREE.Vector3( 0,  0, 10) ); // Vértice 1 0
B.vertices.push( new THREE.Vector3(10,  0, 10 ) ); // Vértice 2 1
B.vertices.push( new THREE.Vector3( 0,  0,  0 ) ); // Vértice 4 2
B.vertices.push( new THREE.Vector3( 10,  0, 0 ) ); // Vértice 5 3
B.faces.push( new THREE.Face3( 2, 0, 1 ) ); // Cara 0
B.faces.push( new THREE.Face3( 1, 3, 2 ) );// Cara 1
B.computeBoundingSphere();
B.computeFaceNormals();

//CUADRO 3
var C = new THREE.Geometry();
C.vertices.push( new THREE.Vector3(-10,  0,  0 ) ); // Vértice 3 0
C.vertices.push( new THREE.Vector3( 0,  0,  0 ) ); // Vértice 4 1
C.vertices.push( new THREE.Vector3(-10,  0, -10 ) ); // Vértice 6 2
C.vertices.push( new THREE.Vector3(0,  0, -10 ) ); // Vértice 7 3
C.faces.push( new THREE.Face3( 0, 1, 2 ) ); //346 Cara 0
C.faces.push( new THREE.Face3( 1, 3, 2 ) ); //476 Cara 1
C.computeBoundingSphere();
C.computeFaceNormals();

//CUADRO 4
var D = new THREE.Geometry();
D.vertices.push( new THREE.Vector3( 0,  0,  0 ) ); // Vértice 4 0  
D.vertices.push( new THREE.Vector3( 10,  0, 0 ) ); // Vértice 5 1  
D.vertices.push( new THREE.Vector3(0,  0, -10 ) ); // Vértice 7 2
D.vertices.push( new THREE.Vector3( 10,  0,  -10 ) ); // Vértice 8 3
D.faces.push( new THREE.Face3( 0, 1, 3 ) ); //458 Cara 0
D.faces.push( new THREE.Face3( 3, 2, 0 ) ); // 874 Cara 1
D.computeBoundingSphere();
D.computeFaceNormals();

//malla.rotateX(Math.PI/4);
//DECKARACION DE MATERIAL
var material = new THREE.MeshNormalMaterial();
//GENERACION DE MALLAS
var mallacuadroA = new THREE.Mesh( A, material );
var mallacuadroB =new THREE.Mesh( B, material);
var mallacuadroC =new THREE.Mesh( C, material);
var mallacuadroD =new THREE.Mesh( D, material);

var escena = new THREE.Scene();
escena.add( mallacuadroA );
escena.add( mallacuadroB );
escena.add( mallacuadroC );
escena.add( mallacuadroD );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
