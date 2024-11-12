import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const body = document.querySelector("body");

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 80;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)


// body.addEventListener("keydown", (event)=>{
//   let key = event.key;
//   if(key === "ArrowUp"){

//   }
//   else if(key === "ArrowDown"){

//   }
//   else if(key === "ArrowLeft"){

//   }
//   else if(key === "ArrowRight"){

//   }
// });


const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry(1,3);
const material = new THREE.MeshStandardMaterial({
  color: "red",
  transparent: true,
  opacity: 0.8,
  // flatShading: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const wireMat = new THREE.MeshBasicMaterial({
  color: "lightpink",
  wireframe: true
});
const wireMesh = new THREE.Mesh(geometry, wireMat);
wireMesh.scale.setScalar(1.01);
cube.add(wireMesh);

body.addEventListener("keydown", (event)=>{
  let key = event.key;
  if(key === "w"){
    cube.position.z -= 0.05;
    camera.position.z = cube.position.z;
  }
  else if(key === "s"){
    cube.position.z += 0.05;
    camera.position.z = cube.position.z;
  }
  else if(key === "a"){
    cube.position.x -= 0.05;
    camera.position.x = cube.position.x;
  }
  else if(key === "d"){
    cube.position.x += 0.05;
    camera.position.x = cube.position.x;
  }
  else if(key === " "){
    cube.position.y = 1;
    camera.position.y = cube.position.y;
  }
});


body.addEventListener("keyup", (event) => {
  let key = event.key;
  if(key === " "){
    cube.position.y = 0;
  }
});

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xddadcd );
scene.add(hemiLight);

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.005;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();