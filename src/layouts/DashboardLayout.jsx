import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarTree from "../features/inventory/SidebarTree";
import RightUtilityDrawer from "../features/navigation/RightUtilityDrawer";
import BottomAlarmDrawer from "../features/alarms/BottomAlarmDrawer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 overflow-hidden">
      {/* 2. SECOND HEADER (Blue) */}
      <div className="h-12 bg-[#0047AB] flex items-center justify-center text-white font-semibold shrink-0 w-full z-40 shadow-sm">
        Second Header
      </div>

      {/* BODY WRAPPER */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* 3. SIDE BAR (Purple Left) */}
        <aside
          className={`bg-purple-100 border-r-2 border-purple-200 transition-all duration-300 flex flex-col z-30 shrink-0 ${
            isCollapsed ? "w-0 overflow-hidden" : "w-64"
          }`}
        >
          <SidebarTree />
        </aside>

        {/* CENTER CONTENT STACK - Important: Added h-full */}
        <div className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden">
          {/* Sidebar Toggle */}
          <div className="absolute top-4 -left-3 z-50">
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full shadow-md bg-white border-purple-200"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <ChevronRight size={14} className="text-purple-600" />
              ) : (
                <ChevronLeft size={14} className="text-purple-600" />
              )}
            </Button>
          </div>

          {/* 4. THIRD TAB LIKE (Orange) */}
          <div className="h-10 bg-[#FFB347] flex items-center justify-center text-slate-800 text-sm font-medium shrink-0 border-b border-orange-300">
            third tab like
          </div>

          {/* 5. MAIN CONTENT (Lime Green) - Added min-h-0 and flex-1 */}
          <main className="flex-1 min-h-0 relative overflow-hidden bg-[#C1FF72]">
            <Outlet context={{ setSelectedNode }} />
          </main>

          {/* 6. ALARMS (Orange Bottom) - Ensure it's inside this stack */}
          <div className="shrink-0 z-40">
            <BottomAlarmDrawer
              isOpen={bottomOpen}
              onToggle={() => setBottomOpen(!bottomOpen)}
            />
          </div>
        </div>

        {/* 7. TOOL BAR (Purple Right) */}
        <div
          id="right-rail-container"
          className="relative h-full shrink-0 z-30"
        >
          <RightUtilityDrawer selectedNode={selectedNode} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
