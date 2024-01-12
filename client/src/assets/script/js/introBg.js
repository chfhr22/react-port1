import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const IntroBg = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Three.js 관련 변수 선언
        let scene, camera, renderer, cloudParticles = [], rain, rainGeo, rainCount = 15000;
        let flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
        let ambient = new THREE.AmbientLight(0x555555);
        let directionalLight = new THREE.DirectionalLight(0xffeedd);

        // 초기화 함수
        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 1;
            camera.rotation.x = 1.16;
            camera.rotation.y = -0.12;
            camera.rotation.z = 0.27;

            scene.add(ambient);
            directionalLight.position.set(0, 0, 1);
            scene.add(directionalLight);

            flash.position.set(200, 300, 100);
            scene.add(flash);

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            mountRef.current.appendChild(renderer.domElement);

            scene.fog = new THREE.FogExp2(0x11111f, 0.002);
            renderer.setClearColor(scene.fog.color);

            let positions = new Float32Array(rainCount * 3);
            let sizes = new Float32Array(rainCount);
            rainGeo = new THREE.BufferGeometry();

            for (let i = 0; i < rainCount; i++) {
                positions[i * 3] = Math.random() * 400 - 200;
                positions[i * 3 + 1] = Math.random() * 500 - 250;
                positions[i * 3 + 2] = Math.random() * 400 - 200;
                sizes[i] = 0.1;
            }

            rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            rainGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

            let rainMaterial = new THREE.PointsMaterial({
                color: 0xaaaaaa,
                size: 0.1,
                transparent: true
            });

            rain = new THREE.Points(rainGeo, rainMaterial);
            scene.add(rain);

            let loader = new THREE.TextureLoader();
            loader.load(
                // 텍스처 URL
                "https://static.vecteezy.com/system/resources/previews/010/884/548/original/dense-fluffy-puffs-of-white-smoke-and-fog-on-transparent-background-abstract-smoke-clouds-movement-blurred-out-of-focus-smoking-blows-from-machine-dry-ice-fly-fluttering-in-air-effect-texture-png.png",
                function (texture) {
                    let cloudGeo = new THREE.BufferGeometry(500, 500);
                    let cloudMaterial = new THREE.MeshLambertMaterial({
                        map: texture,
                        transparent: true
                    });

                    for (let p = 0; p < 25; p++) {
                        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                        cloud.position.set(
                            Math.random() * 800 - 400,
                            500,
                            Math.random() * 500 - 450
                        );
                        cloud.rotation.x = 1.16;
                        cloud.rotation.y = -0.12;
                        cloud.rotation.z = Math.random() * 360;
                        cloud.material.opacity = 0.6;
                        console.log(`Cloud ${p}: Position - `, cloud.position, `Scale - `, cloud.scale);
                        cloudParticles.push(cloud);
                        scene.add(cloud);
                    }
                    animate();
                }
            );
        }

        // 애니메이션 함수
        function animate() {
            cloudParticles.forEach(p => {
                p.rotation.z -= 0.002;
            });

            if (Math.random() > 0.93 || flash.power > 100) {
                if (flash.power < 100) {
                    flash.position.set(
                        Math.random() * 400,
                        300 + Math.random() * 200,
                        100
                    );
                }
                flash.power = 50 + Math.random() * 500;
            }

            rain.geometry.verticesNeedUpdate = true;
            rain.position.z -= 0.222;
            if (rain.position.z < -200) rain.position.z = 0;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        // 창 크기 조정 함수
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // 초기화 및 이벤트 리스너 설정
        init();
        window.addEventListener('resize', onWindowResize);

        // 컴포넌트 언마운트 시 클린업
        return () => {
            window.removeEventListener('resize', onWindowResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default IntroBg;
