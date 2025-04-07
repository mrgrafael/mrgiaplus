// useLeadManager.js
import { useEffect, useState } from "react";
import axios from "axios";

export function useLeadManager(user) {
  const [leads, setLeads] = useState({ Novo: [], Atendimento: [], Outros: [] });
  const [animation, setAnimation] = useState(null);
  const [columns] = useState([
    { id: "Atendimento", name: "Atendimento" },
    { id: "Novo", name: "Novo" },
    { id: "Outros", name: "Outros" },
  ]);

  const metas = [50000, 100000, 125000, 200000];
  const animacoes = ["fogos", "champanhe", "brilhos", "explosao"];

  useEffect(() => {
    async function fetchLeads() {
      const res = await axios.get("/api/leads");
      const data = res.data;
      const grouped = { Novo: [], Atendimento: [], Outros: [] };

      data.forEach((lead) => {
        if (lead.status === "Novo") grouped.Novo.push(lead);
        else if (lead.status === "Atendimento") grouped.Atendimento.push(lead);
        else grouped.Outros.push(lead);
      });

      setLeads(grouped);
    }
    fetchLeads();
  }, []);

  const moveLead = async (id, newStatus) => {
    await axios.patch(`/api/leads/${id}`, { status: newStatus });
    setLeads((prev) => {
      const updated = { ...prev };
      for (let col in updated) {
        updated[col] = updated[col].filter((l) => l.id !== id);
      }
      const movedLead = Object.values(prev).flat().find((l) => l.id === id);
      if (movedLead) movedLead.status = newStatus;
      updated[newStatus] = [movedLead, ...updated[newStatus]];
      return updated;
    });
  };

  const getPeriodData = (periodo) => {
    const turno = periodo === "manha" ? [6, 12] : [13, 18];
    const data = Object.values(leads).flat().filter((l) => {
      const h = new Date(l.createdAt).getHours();
      return h >= turno[0] && h <= turno[1] && l.assignedTo === user.name;
    });
    return data.length;
  };

  const total = Object.values(leads)
    .flat()
    .filter((l) => l.assignedTo === user.name && l.status === "Fechado")
    .reduce((acc, l) => acc + (l.valor || 0), 0);

  const progress = [
    { name: "Atual", value: total },
    { name: "Faltando", value: Math.max(1, 200000 - total) },
  ];

  useEffect(() => {
    metas.forEach((meta, index) => {
      if (total >= meta && !localStorage.getItem(`meta-${meta}`)) {
        setAnimation(animacoes[index]);
        localStorage.setItem(`meta-${meta}`, true);
      }
    });
  }, [total]);

  return { columns, leads, moveLead, progress, animation, getPeriodData };
}
