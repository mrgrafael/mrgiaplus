// CRMBoard.jsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useLeadManager } from "./useLeadManager";
import { CardLead } from "./Card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

export default function CRMBoard({ user }) {
  const {
    columns,
    moveLead,
    leads,
    progress,
    animation,
    getPeriodData,
  } = useLeadManager(user);

  const [selectedMeta, setSelectedMeta] = useState(null);

  useEffect(() => {
    if (animation) {
      import("./animations").then((mod) => {
        mod.triggerAnimation(animation);
      });
    }
  }, [animation]);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="flex flex-1 overflow-x-auto space-x-4 max-h-[60vh]">
        {columns.map((column) => (
          <div
            key={column.id}
            className="w-[300px] bg-white shadow rounded-2xl p-2 flex flex-col"
          >
            <h2 className="text-lg font-bold mb-2">{column.name}</h2>
            <ScrollArea className="flex-1 overflow-y-auto">
              {leads[column.id]?.map((lead) => (
                <CardLead
                  key={lead.id}
                  lead={lead}
                  moveLead={moveLead}
                  currentUser={user}
                />
              ))}
            </ScrollArea>
          </div>
        ))}
      </div>

      <div className="flex justify-around items-center mt-6">
        <Card className="w-[250px] h-[250px] flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2">Progresso da Meta</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={progress}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {progress.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Card>

        <Card className="p-4 w-full max-w-[600px]">
          <h3 className="text-lg font-semibold mb-2">Produtividade</h3>
          <div className="flex justify-between">
            <Badge variant="outline">Manhã: {getPeriodData("manha")}</Badge>
            <Badge variant="outline">Tarde: {getPeriodData("tarde")}</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
