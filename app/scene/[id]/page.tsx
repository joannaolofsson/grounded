
import { notFound } from "next/navigation";
import SceneView from "./SceneView";
import { scenes } from "@/lib/sceneOptions";

type Params = { id: keyof typeof scenes };

export default async function ScenePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params; 


  const scene = scenes[id];
  if (!scene) notFound();

  return (
  <SceneView scene={scene} />
  )
}
