//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';


let scene, camera, renderer, city;
let sceneContainer = document.querySelector("#scene-container");

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000 );

    const lightRight = new THREE.DirectionalLight(0xD39FD3, 3);
    lightRight.position.set(2, 2, 5);
    scene.add(lightRight);

    const lightLeft = new THREE.DirectionalLight(0xD39FD3, 3);
    lightLeft.position.set(-5, 20, -6);
    scene.add(lightLeft);

    camera = new THREE.PerspectiveCamera(
        95, //setting of FOV
        sceneContainer.clientWidth / sceneContainer.clientHeight, //setting of aspect ratio
        0.06,  //setting camera 
        2000, //seting camera 
    );
}

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
sceneContainer.appendChild(renderer.domElement);

      //const controls = new OrbitControls(camera, renderer.domElement);
      const loader = new GLTFLoader();
      loader.load('/assets/city_scene.gltf', function (gltf) {
          city = gltf.scene;
          console.log(city);
          scene.add(city);


    const controls = new OrbitControls(camera, renderer.domElement);
    

    camera.position.z = 20;
    camera.position.x = 2;

})

function animate() {
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);

} 

window.addEventListener('resize', onWindowResize, false);
init();
animate();