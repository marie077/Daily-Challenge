import * as THREE from 'three';

//Canvas
const canvas = document.querySelector('canvas.webgl');

//Sizes = objects are great ways to organize instead of variables
const size = {
    width: 800,
    height: 600
};

//Scene
const scene = new THREE.Scene();

//Objects
const geo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geo, material);
scene.add(mesh);

//Camera
const camera = new THREE.PerspectiveCamera(75, size.width/size.height);
camera.position.z = 3;
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);


