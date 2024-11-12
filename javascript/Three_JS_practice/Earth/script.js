import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./getStarfield.js";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 5;
const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new THREE.TextureLoader();

const earthGroup = new THREE.Group();
earthGroup.rotation.z = 23.4 * Math.PI /100;
scene.add(earthGroup);
const geometry = new THREE.IcosahedronGeometry(1,12);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("earthmap1k.jpg")
});
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh); 

const lightsMat = new THREE.MeshBasicMaterial({
  map: loader.load("earthlights1k.jpg"),
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
})
const lightsMesh = new THREE.Mesh(geometry, lightsMat);
earthGroup.add(lightsMesh);

const cloudsMat = new THREE.MeshBasicMaterial({
  map: loader.load("earthcloudmap.jpg"),
  transparent: true,
  opacity: 0.2,
  blending: THREE.AdditiveBlending,
})
const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
cloudsMesh.scale.setScalar(1.01)
earthGroup.add(cloudsMesh);

const stars = getStarfield({numStars: 2000});
scene.add(stars);

// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444 );
// scene.add(hemiLight);
const sunLight = new THREE.DirectionalLight(0xdccdc0);
sunLight.position.set(-2,0.5,2);
scene.add(sunLight);

function animate() {
  requestAnimationFrame(animate);

  earthMesh.rotation.y += 0.02;
  lightsMesh.rotation.y += 0.02;
  cloudsMesh.rotation.y += 0.025;
  renderer.render(scene, camera);
}
animate();