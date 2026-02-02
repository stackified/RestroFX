"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
// import { KernelSize } from "postprocessing";
// import BlurEffect from "react-progressive-blur";

interface HelixRingsProps {
    levelsUp?: number;
    levelsDown?: number;
    stepY?: number;
    rotationStep?: number;
}

const HelixRings: React.FC<HelixRingsProps> = ({
    levelsUp = 10,
    levelsDown = 10,
    stepY = 0.85,
    rotationStep = Math.PI / 16,
}) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    const ringGeometry = useMemo(() => {
        const shape = new THREE.Shape();
        const radius = 0.35;
        shape.absarc(0, 0, radius, 0, Math.PI * 2, false);

        const depth = 10;
        const extrudeSettings: THREE.ExtrudeGeometryOptions = {
            depth,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 4,
            curveSegments: 64,
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        geometry.translate(0, 0, -depth / 2);

        return geometry;
    }, []);

    const elements = [];
    for (let i = -levelsDown; i <= levelsUp; i++) {
        elements.push({
            id: `helix-ring-${i}`,
            y: i * stepY,
            rotation: i * rotationStep,
        });
    }

    return (
        <group
            scale={1}
            position={[5, 0, 0]}
            ref={groupRef as any}
            rotation={[0, 0, 0]}

        >
            {elements.map((el) => (
                <mesh
                    key={el.id}
                    geometry={ringGeometry as any}
                    position={[0, el.y, 0]}
                    rotation={[0, Math.PI / 2 + el.rotation, 0]}
                    castShadow
                >
                    <meshPhysicalMaterial
                        color="#DC2626"
                        metalness={0.7}
                        roughness={0.5}
                        clearcoat={0}
                        clearcoatRoughness={0.15}
                        reflectivity={0}
                        iridescence={0.96}
                        iridescenceIOR={1.5}
                        iridescenceThicknessRange={[100, 400]}
                    />
                </mesh>
            ))}
        </group>
    );
};

const Scene: React.FC = () => {
    return (
        <Canvas
            className="h-full w-full"
            orthographic
            shadows
            camera={{
                zoom: 70,
                position: [0, 0, 7],
                near: 0.1,
                far: 1000,
            }}
            gl={{ antialias: true }}
            style={{ background: "transparent" }}
        >
            <hemisphereLight
                color={"#cfe8ff"}
                groundColor={"#ffffff"}
                intensity={2}
            />

            <directionalLight
                position={[10, 10, 5]}
                intensity={2}
                castShadow
                color={"#ffeedd"}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            <HelixRings />

            {/* Postprocessing removed for stability 
            <EffectComposer multisampling={8}>
                <Bloom
                    kernelSize={3}
                    luminanceThreshold={0}
                    luminanceSmoothing={0.4}
                    intensity={0.6}
                />
            </EffectComposer> 
            */}
        </Canvas>
    );
};

interface HelixHeroProps {
    children?: React.ReactNode;
}


export const HelixHero: React.FC<HelixHeroProps> = ({ children }) => {
    return (
        <section className="relative h-screen w-full font-sans tracking-tight overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 opacity-80">
                <Scene />
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 h-full w-full pointer-events-none">
                {children}
            </div>

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
};
