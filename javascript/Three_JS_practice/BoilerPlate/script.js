import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

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
camera.position.z = 5;

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  // flatShading: true,
  
});
const earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000 );
scene.add(hemiLight);

function animate() {
  requestAnimationFrame(animate);

  earthMesh.rotation.x += 0.001;
  earthMesh.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();