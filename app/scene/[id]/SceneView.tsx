"use client";

import { SceneType } from "@/lib/sceneOptions";

export default function SceneView({ scene }: { scene: SceneType }) {
  return (
    <section style={{ backgroundColor: scene.color, padding: "2rem" }}>
      <h1>{scene.name}</h1>
      <p>{scene.description}</p>
    </section>
  );
}
