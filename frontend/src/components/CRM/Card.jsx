// Card.jsx
import React, { useEffect, useState } from "react";
import { Card as UiCard, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { differenceInMinutes } from "date-fns";
import { CircleAlert } from "lucide-react";

export function CardLead({ lead, moveLead, currentUser }) {
  const [statusColor, setStatusColor] = useState("green");
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const minutes = differenceInMinutes(new Date(), new Date(lead.lastResponseAt));
      setElapsed(minutes);
      if (minutes > 30) setStatusColor("red");
      else if (minutes > 20) setStatusColor("orange");
      else setStatusColor("green");
    }, 60000);
    return () => clearInterval(interval);
  }, [lead.lastResponseAt]);

  useEffect(() => {
    if (lead.fromIA && lead.interested && lead.status !== "Novo") {
      moveLead(lead.id, "Novo");
    }
    if (lead.fromIA && lead.conversando && lead.status !== "Atendimento") {
      moveLead(lead.id, "Atendimento");
    }
  }, [lead]);

  if (
    currentUser.role === "Consultora" &&
    lead.assignedTo !== currentUser.name
  ) {
    return null;
  }

  return (
    <UiCard className="mb-2">
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <strong>{lead.name}</strong>
          <span
            className={\`w-3 h-3 rounded-full \${statusColor === "green"
              ? "bg-green-500"
              : statusColor === "orange"
              ? "bg-yellow-400"
              : "bg-red-500"}\`}
          ></span>
        </div>
        <div className="text-sm text-muted-foreground">
          CPF: {lead.cpf} <br /> Telefone: {lead.phone}
        </div>
        {elapsed > 30 && currentUser.role === "Administrador" && (
          <Badge variant="destructive" className="flex gap-1 items-center">
            <CircleAlert size={12} /> +30min sem atendimento
          </Badge>
        )}
      </CardContent>
    </UiCard>
  );
}
