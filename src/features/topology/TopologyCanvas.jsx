// import React from "react";
// import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react";
// import "@xyflow/react/dist/style.css";
// import DeviceNode from "./ResizableNode";

// const nodeTypes = { device: DeviceNode };

// const TopologyCanvas = ({ nodes, edges, onNodesChange, onEdgesChange }) => {
//   return (
//     <div className="h-full w-full">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         nodeTypes={nodeTypes}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         fitView
//       >
//         <Background variant="dots" gap={20} size={1} color="#cbd5e1" />
//         <Controls position="top-left" />
//         <MiniMap position="bottom-right" />
//       </ReactFlow>
//     </div>
//   );
// };

// export default TopologyCanvas;

// new
import React, { useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ResizableNode from "./ResizableNode";

const TopologyCanvas = () => {
  // Define custom node types outside the component or use useMemo
  const nodeTypes = useMemo(
    () => ({
      deviceNode: ResizableNode,
    }),
    []
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: "1",
      type: "deviceNode", // matches the key in nodeTypes
      data: {
        label: "Core_Router_01",
        view: "simple",
        cpu: "45%",
        temp: "52°C",
        uptime: "124d",
      },
      position: { x: 250, y: 100 },
      style: { width: 200, height: 120 }, // default size
    },
  ]);

  // Function to switch views for all nodes (Global Switch)
  const onSwitchView = (newView) => {
    setNodes((nds) =>
      nds.map((node) => {
        // If switching to simple, remove width/height so CSS 'auto' takes over
        if (newView === "simple") {
          const { width, height, ...remainingStyle } = node.style || {};
          return {
            ...node,
            data: { ...node.data, view: newView },
            style: remainingStyle, // Width/Height are now undefined
          };
        }

        // If switching to Image/Params, give it a default starting size
        return {
          ...node,
          data: { ...node.data, view: newView },
          style: {
            ...node.style,
            width: node.style?.width || 250, // Restore last size or use default
            height: node.style?.height || 300,
          },
        };
      })
    );
  };
  return (
    <div className="w-full h-full relative">
      {/* Small UI Switcher to test the views */}
      <div className="absolute top-4 right-4 z-50 flex gap-2 bg-white p-2 rounded shadow">
        <button
          onClick={() => onSwitchView("simple")}
          className="text-[10px] px-2 py-1 bg-slate-100 hover:bg-slate-200"
        >
          Simple
        </button>
        <button
          onClick={() => onSwitchView("image")}
          className="text-[10px] px-2 py-1 bg-slate-100 hover:bg-slate-200"
        >
          Image
        </button>
        <button
          onClick={() => onSwitchView("params")}
          className="text-[10px] px-2 py-1 bg-slate-100 hover:bg-slate-200"
        >
          Params
        </button>
      </div>

      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
      >
        <Background variant="dots" gap={20} size={1} color="#cbd5e1" />
        <Controls position="top-left" />
        <MiniMap position="bottom-right" />
      </ReactFlow>
    </div>
  );
};
export default TopologyCanvas;
