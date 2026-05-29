import React, { useState } from "react";
import { Drawer, Box, Tooltip } from "@mui/material";
import { LayoutDashboard, Cable, Bell, Settings, Info, X } from "lucide-react";

const RightUtilityDrawer = ({ selectedNode }) => {
  const [activeTab, setActiveTab] = useState(null);

  // Toggle logic: clicking the same tab closes it
  const toggleTab = (tabId) => {
    if (activeTab === tabId) {
      setActiveTab(null);
    } else {
      setActiveTab(tabId);
    }
  };

  const menuItems = [
    { id: "info", icon: <Info size={20} />, label: "Device Info" },
    { id: "ports", icon: <Cable size={20} />, label: "Port Status" },
    { id: "alarms", icon: <Bell size={20} />, label: "Active Alarms" },
    { id: "config", icon: <Settings size={20} />, label: "Configuration" },
  ];

  return (
    <div className="flex h-full relative">
      {/* --- Action Rail --- */}
      <div className="w-14 bg-purple-100 flex flex-col items-center py-6 gap-6 border-l-2 border-purple-200 h-full">
        {menuItems.map((item) => (
          <Tooltip title={item.label} placement="left" key={item.id} arrow>
            <button
              onClick={() => toggleTab(item.id)}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                  : "text-purple-400 hover:bg-purple-200 hover:text-purple-700"
              }`}
            >
              {item.icon}
            </button>
          </Tooltip>
        ))}
      </div>

      {/* --- Slide-Out Drawer --- */}
      <Drawer
        anchor="right"
        open={!!activeTab}
        onClose={() => setActiveTab(null)}
        variant="temporary"
        hideBackdrop
        PaperProps={{
          sx: {
            width: 380,
            height: "100%",
            borderLeft: "1px solid #e2e8f0",
            backgroundColor: "#ffffff",
            boxShadow: "-5px 0 15px rgba(0,0,0,0.05)",
          },
        }}
      >
        <Box className="flex flex-col h-full p-4">
          {/* Close button inside Drawer */}
          <button
            onClick={() => setActiveTab(null)}
            className="self-end mb-4 text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1"
          >
            <X size={16} /> Close
          </button>

          {/* Conditional content */}
          {activeTab === "info" && (
            <div>
              Device Info for {selectedNode?.name || "No node selected"}
            </div>
          )}
          {activeTab === "ports" && <div>Port Status</div>}
          {activeTab === "alarms" && <div>Active Alarms</div>}
          {activeTab === "config" && <div>Configuration</div>}

          {!activeTab && (
            <div className="flex-1 flex items-center justify-center opacity-40">
              <LayoutDashboard size={40} />
              <p className="ml-2 text-xs">Select a tab</p>
            </div>
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default RightUtilityDrawer;
