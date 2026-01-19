export type SceneId = "forest" | "mountain" | "ocean" | "desert";

export interface SceneType {
  id: SceneId;
  name: string;
  color: string;
  description: string;
  looked: boolean;
}

export const scenes: Record<SceneId, SceneType> = {
  forest: {
    id: "forest",
    color: "#A38DF5",
    name: "Forest Realm",
    description: "Learn basics of focus.",
    looked: false,
  },
  mountain: {
    id: "mountain",
    color: "#372324",
     name: "Mountain Realm",
    description: "Handle overwhelm.",
    looked: true,
  },
  ocean: {
    id: "ocean",
    color: "#F4A67A",
    name: "Ocean Realm",
    description: "Master flow & routines.",
    looked: true,
  },
  desert: {
    id: "desert",
    color: "#82B4C1",
    name: "Desert Realm",
    description: "Emotion regulation & clarity.",
    looked: true,
  },
};

