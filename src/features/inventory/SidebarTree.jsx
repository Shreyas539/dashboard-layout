import React from "react";
import { Tree } from "antd";
import { Network, Server, Router, Radio } from "lucide-react";

const treeData = [
  {
    title: "Central Office (CNMS)",
    key: "0-0",
    icon: <Server size={16} className="text-blue-500" />,
    children: [
      {
        title: "Region North",
        key: "0-0-0",
        icon: <Network size={16} />,
        children: [
          {
            title: "Remote Modem A1",
            key: "node-1",
            icon: <Radio size={14} />,
          },
          {
            title: "Remote Modem A2",
            key: "node-2",
            icon: <Radio size={14} />,
          },
        ],
      },
      {
        title: "Region South",
        key: "0-0-1",
        icon: <Network size={16} />,
        children: [
          {
            title: "Router Gateway X",
            key: "node-3",
            icon: <Router size={14} />,
          },
        ],
      },
    ],
  },
  {
    title: "Central Office (CNMS)",
    key: "0-0",
    icon: <Server size={16} className="text-blue-500" />,
    children: [
      {
        title: "Region North",
        key: "0-0-0",
        icon: <Network size={16} />,
        children: [
          {
            title: "Remote Modem A1",
            key: "node-1",
            icon: <Radio size={14} />,
          },
          {
            title: "Remote Modem A2",
            key: "node-2",
            icon: <Radio size={14} />,
          },
        ],
      },
      {
        title: "Region South",
        key: "0-0-1",
        icon: <Network size={16} />,
        children: [
          {
            title: "Router Gateway X",
            key: "node-3",
            icon: <Router size={14} />,
          },
        ],
      },
    ],
  },
  {
    title: "Central Office (CNMS)",
    key: "0-0",
    icon: <Server size={16} className="text-blue-500" />,
    children: [
      {
        title: "Region North",
        key: "0-0-0",
        icon: <Network size={16} />,
        children: [
          {
            title: "Remote Modem A1",
            key: "node-1",
            icon: <Radio size={14} />,
          },
          {
            title: "Remote Modem A2",
            key: "node-2",
            icon: <Radio size={14} />,
          },
        ],
      },
      {
        title: "Region South",
        key: "0-0-1",
        icon: <Network size={16} />,
        children: [
          {
            title: "Router Gateway X",
            key: "node-3",
            icon: <Router size={14} />,
          },
        ],
      },
    ],
  },
  {
    title: "Central Office (CNMS)",
    key: "0-0",
    icon: <Server size={16} className="text-blue-500" />,
    children: [
      {
        title: "Region North",
        key: "0-0-0",
        icon: <Network size={16} />,
        children: [
          {
            title: "Remote Modem A1",
            key: "node-1",
            icon: <Radio size={14} />,
          },
          {
            title: "Remote Modem A2",
            key: "node-2",
            icon: <Radio size={14} />,
          },
        ],
      },
      {
        title: "Region South",
        key: "0-0-1",
        icon: <Network size={16} />,
        children: [
          {
            title: "Router Gateway X",
            key: "node-3",
            icon: <Router size={14} />,
          },
        ],
      },
    ],
  },
];

const SidebarTree = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("Selected Node ID:", selectedKeys[0]);
    // TODO: Dispatch to Redux to center React Flow on this node
  };

  return (
    <div className="p-2 ant-tree-nms overflow-scroll">
      <h1 className="text-sm font-bold mb-2 text-gray-700">Network Inventory</h1>
      <Tree
        showIcon
        defaultExpandAll
        onSelect={onSelect}
        treeData={treeData}
        className="bg-transparent text-sm"
      />
    </div>
  );
};

export default SidebarTree;
