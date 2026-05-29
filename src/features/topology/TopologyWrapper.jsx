import TopologyCanvas from "./TopologyCanvas";
import { ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
const TopologyWrapper = () => {
  return (
    <ReactFlowProvider>
      <TopologyCanvas />
    </ReactFlowProvider>
  );
};

export default TopologyWrapper;
