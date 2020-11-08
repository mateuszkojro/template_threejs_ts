import * as THREE from "three";

// Draws:

// A square with triangles
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

const geometry = new THREE.Geometry();

// 0 1 2
// 3 4 5
// 6 7 8
geometry.vertices = [
    new THREE.Vector3(-1, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(-1, -1, 0), new THREE.Vector3(0, -1, 0), new THREE.Vector3(1, -1, 0),
];

geometry.faces = [
    new THREE.Face3(0, 3, 1), new THREE.Face3(1, 3, 4), new THREE.Face3(1, 4, 2), new THREE.Face3(4, 5, 2),
    new THREE.Face3(3, 6, 4), new THREE.Face3(4, 6, 7), new THREE.Face3(4, 7, 5), new THREE.Face3(5, 7, 8),];

const material = new THREE.PointsMaterial({
    size: 5,
    sizeAttenuation: false,
    color: 0xff0000,
});
const trojkaty = new THREE.Points(geometry, material);

const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true, side: THREE.FrontSide})
);

scene.add(mesh);
scene.add(trojkaty);

// 45 deg up
camera.position.z = 5;
camera.position.y += 5;
camera.rotateX(-Math.PI / 4);

const animate = function () {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.01;
    trojkaty.rotation.y += 0.01;
    renderer.render(scene, camera);
};

animate();
