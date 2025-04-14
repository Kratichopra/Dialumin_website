import React from "react";
import "@google/model-viewer";

// Define the prop types
interface Model3DProps {
  modelPath: string; // The path to the 3D model
}

const Model3D: React.FC<Model3DProps> = ({ modelPath }) => {
  return (
    <div >
      <model-viewer
        src={modelPath}
        alt="3D model"
        auto-rotate
        disable-zoom
        disable-pan
        interaction-prompt="none"
        camera-controls
        style={{  background: "transparent", display:"flex", justifyContent: "center",height:"500px"}}
        shadow-intensity="1"
        exposure="0.75"
      ></model-viewer>
    </div>
  );
};

export default Model3D;


