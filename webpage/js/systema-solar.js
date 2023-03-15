// Variables globales
let camera, scene, renderer, container;

// Inicializar Three.js
function init() {
    container = document.getElementById("sistema-solar");

    // Crear la cámara
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 30;

    // Crear la escena
    scene = new THREE.Scene();

    // Crear el sol
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Crear la tierra
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.x = 10;
    scene.add(earth);

    // Crear el renderizador
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    animate();
}

// Bucle de animación
function animate() {
    requestAnimationFrame(animate);

    // Animación aquí (por ejemplo, rotar la cámara alrededor del sol)
    camera.position.x = 30 * Math.sin(Date.now() * 0.001);
    camera.position.z = 30 * Math.cos(Date.now() * 0.001);
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

init();
