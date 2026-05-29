import React from "react";
import { ChevronUp, ChevronDown, AlertTriangle, List } from "lucide-react";

const BottomAlarmDrawer = ({ isOpen, onToggle }) => {
  return (
    <div
      className={`bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 flex flex-col transition-all duration-500 ease-in-out shrink-0 ${
        isOpen ? "h-72" : "h-10"
      }`}
    >
      {/* TRIGGER BAR (Always Visible) */}
      <div
        onClick={onToggle}
        className="h-10 bg-slate-900 flex items-center justify-between px-4 cursor-pointer hover:bg-slate-800 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {isOpen ? (
              <ChevronDown size={16} className="text-slate-400" />
            ) : (
              <ChevronUp size={16} className="text-slate-400" />
            )}
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">
              Alarm Console
            </span>
          </div>

          {/* Summary Stats (Visible even when closed) */}
          {!isOpen && (
            <div className="flex items-center gap-3 border-l border-slate-700 ml-2 pl-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] text-red-400 font-bold">
                  3 Critical
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-[10px] text-orange-400 font-bold">
                  8 Major
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <List size={14} className="text-slate-500" />
          <span className="text-[10px] text-slate-500 font-mono">
            LIVE FEED
          </span>
        </div>
      </div>

      {/* DRAWER CONTENT (Hidden when closed) */}
      <div
        className={`flex-1 overflow-y-auto ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 sticky top-0 border-b text-[10px] uppercase text-slate-500 font-bold">
            <tr>
              <th className="p-3">Severity</th>
              <th className="p-3">Source Node</th>
              <th className="p-3">Alarm Description</th>
              <th className="p-3">Time Stamp</th>
            </tr>
          </thead>
          <tbody className="text-xs font-mono">
            <AlarmRow
              severity="Critical"
              node="MODEM-A1"
              msg="Fiber link loss detected"
              time="10:20:05"
            />
            <AlarmRow
              severity="Major"
              node="HUB-04"
              msg="Power supply B failure"
              time="10:18:22"
            />
            <AlarmRow
              severity="Minor"
              node="RNMS-01"
              msg="High temperature warning"
              time="09:55:10"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AlarmRow = ({ severity, node, msg, time }) => {
  const color = severity === "Critical" ? "text-red-600" : "text-orange-600";
  return (
    <tr className="border-b hover:bg-slate-50 transition-colors">
      <td className={`p-3 font-bold flex items-center gap-2 ${color}`}>
        <AlertTriangle size={14} /> {severity}
      </td>
      <td className="p-3 text-slate-700">{node}</td>
      <td className="p-3 text-slate-600">{msg}</td>
      <td className="p-3 text-slate-400">{time}</td>
    </tr>
  );
};

export default BottomAlarmDrawer;
