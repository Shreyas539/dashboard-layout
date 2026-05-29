import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "@components/ui/badge";

const TopHeader = () => {
  const { nodeType, systemName } = useSelector((state) => state.node);

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 shadow-sm z-20">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          {systemName} Dashboard
        </h2>
        <Badge
          variant="outline"
          className="text-[10px] uppercase font-bold text-slate-400"
        >
          v1.0.4 - Node {nodeType}
        </Badge>
      </div>

      <div className="flex items-center gap-8">
        {/* Fault Summary from your Image */}
        <div className="flex items-center gap-4 border-r pr-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-xs font-bold text-slate-600">OFC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600">E1</span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Operator
          </p>
          <p className="text-sm font-semibold text-slate-700 underline underline-offset-4 decoration-blue-500">
            Admin_User
          </p>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
