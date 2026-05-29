import React from "react";
import { Handle, Position, NodeResizer } from "@xyflow/react";
import { Monitor, Activity } from "lucide-react";
const ResizableNode = ({ data, selected }) => {
  const isSimple = data.view === "simple";

  return (
    <div
      style={{
        // Critical: force auto dimensions when simple view is active
        width: isSimple ? "auto" : "100%",
        height: isSimple ? "auto" : "100%",
      }}
      className={`bg-white border rounded-lg shadow-md flex flex-col ${
        isSimple ? "min-w-[120px]" : ""
      }`}
    >
      {/* Hide Resizer in simple view so it doesn't try to measure dimensions */}
      {!isSimple && (
        <NodeResizer minWidth={150} minHeight={100} isVisible={selected} />
      )}

      <div className="p-4 flex flex-col items-center justify-center">
        {/* Simple view content */}
        {isSimple && <span className="font-bold">{data.label}</span>}

        {/* Image view content */}
        {data.view === "image" && (
          <>
            <div className="p-4 bg-blue-50 rounded-full mb-4">
              <Monitor size={48} className="text-blue-600" />
            </div>
            <span className="font-bold text-slate-500">{data.label}</span>
          </>
        )}
      </div>

      {/* Handles */}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default ResizableNode;
