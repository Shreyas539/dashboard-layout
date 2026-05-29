import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNodeType } from "@/store/slices/nodeSlice";
import { Card, CardHeader, CardTitle, CardContent } from "@components/ui/card";
import { Button } from "@components/ui/button";

const EntryScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState(null);

  useEffect(() => {
    // Simulate API Call: fetch('/api/node-type')
    setTimeout(() => {
      const detectedType = 2; // Change to 2 to test CNMS flow
      setType(detectedType);
      dispatch(setNodeType(detectedType));
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-white bg-slate-950">
        Detecting Node Configuration...
      </div>
    );

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-950 px-4">
      <Card className="w-full max-w-[400px] border-slate-800 bg-slate-900 text-white shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-5xl font-black tracking-tighter text-blue-500">
            {type === 1 ? "RNMS" : "CNMS"}
          </CardTitle>
          <p className="text-slate-400 text-sm mt-4 uppercase tracking-widest">
            {type === 1 ? "Regional" : "Central"} Node Management
          </p>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg font-bold transition-all"
            onClick={() => navigate("/signin")}
          >
            LOGIN TO SYSTEM
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EntryScreen;
