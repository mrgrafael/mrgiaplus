# 🧠 MRG IA PLUS - Sistema CRM com Inteligência Artificial

> Sistema completo de gestão de leads, automação de vendas, Kanban inteligente e integração com WhatsApp, PDF, calendário, animações de metas e muito mais.

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: React + Vite  
- **Backend**: Node.js + Express  
- **Estilo**: Tailwind CSS + shadcn/ui  
- **Banco de Dados**: JSON Local (versão inicial)  
- **Gerenciador de Processos**: PM2  
- **Hospedagem**: VPS Ubuntu (Hostinger)  
- **Build Tool**: Vite  
- **Deploy**: GitHub + VPS (SSH)

---



## 🧩 Funcionalidades

- ✅ Login com níveis de acesso
- ✅ Dashboard Kanban com drag-and-drop
- ✅ Indicador de tempo nos cards (verde, amarelo, vermelho)
- ✅ Bot IA integrado para primeiro contato com o lead
- ✅ Geração de PDF com checklist
- ✅ Consulta por CPF (margem consignável)
- ✅ Chat interno geral
- ✅ Calendário integrado
- ✅ Upload de planilhas `.csv` com novos contatos
- ✅ Disparo em massa com mensagens automáticas
- ✅ Relatórios e metas com gráfico de pizza
- ✅ Animações de incentivo (foguetinho, champanhe, brilhos)
- ✅ Integração com WhatsApp (bot e extensão preparados)
- ✅ Notificações automáticas por evento
- ✅ Layout branco e verde com mascote (moeda)
- ✅ Responsividade para desktop

---

## ⚙️ Como rodar localmente

```bash
# Clonar o repositório
git clone git@github.com:mrgrafael/mrgiaplus.git
cd mrgiaplus

# Instalar backend
cd backend
npm install
pm2 start index.js --name mrgiaplus-backend

# Instalar frontend
cd ../frontend
npm install
npm run build
```

---

## 🌐 Acesso à Produção (VPS)

https://mrgiaplus.com.br

---

## 📦 Deploy Automático na VPS (Hostinger Ubuntu)

```bash
# Conecte via SSH:
ssh root@82.25.79.226

# Rode o script:
cd /var/www
rm -rf mrgiaplus
git clone git@github.com:mrgrafael/mrgiaplus.git
cd mrgiaplus
git config --global --add safe.directory /var/www/mrgiaplus

cd backend
npm install
pm2 start index.js --name mrgiaplus-backend

cd ../frontend
npm install
npm run build
```

---

## 👨‍💼 Contato

Rafael Dietrich - mrg.rafaeldietrich@gmail.com  
Projeto exclusivo MRG IA PLUS – Todos os direitos reservados.
