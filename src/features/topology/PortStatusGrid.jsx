// src/features/topology/PortStatusGrid.jsx
import React from "react";

const PortStatusGrid = ({ node }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-8 gap-1.5 p-3 bg-slate-900 rounded-lg shadow-inner">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`h-6 rounded-sm border border-slate-700 flex flex-col items-center justify-center transition-all cursor-help
              ${
                i === 4
                  ? "bg-red-500 border-red-400"
                  : "bg-green-500 border-green-400"
              }`}
          >
            <span className="text-[7px] text-white font-bold">{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-[10px] font-bold text-slate-500">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500" /> ACTIVE
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500" /> ALARM
        </div>
      </div>
    </div>
  );
};

export default PortStatusGrid;
