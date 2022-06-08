import Head from "next/head";
import * as THREE from "three";

export default function Home() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const objects = {};

  function start() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.z = 5;
  }

  function addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    objects.cube = new THREE.Mesh(geometry, material);
    scene.add(objects.cube);
  }

  function animateCube() {
    requestAnimationFrame(animateCube);
  
    objects.cube.rotation.x += 0.01;
    objects.cube.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  }

  start();
  addCube();
  animateCube();

  return (
    <div>
      <Head>
        <title>Learning ThreeJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  );
}
