"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// ─── Visual illustrations ─────────────────────────────────────────────────────

function CodeEditorVisual() {
  const lines = [
    [{ t: "const ", c: "#6D3ACF" }, { t: "api", c: "#0084FF" }, { t: " = new ", c: "#64748b" }, { t: "VektroClient()", c: "#38bdf8" }],
    [{ t: "  .auth(", c: "#64748b" }, { t: "token", c: "#6D3ACF" }, { t: ")", c: "#64748b" }],
    [{ t: "  .build()", c: "#38bdf8" }],
    [{ t: "", c: "" }],
    [{ t: "await ", c: "#6D3ACF" }, { t: "api", c: "#0084FF" }, { t: ".deploy(", c: "#64748b" }, { t: "'prod'", c: "#4ade80" }, { t: ")", c: "#64748b" }],
    [{ t: "// ✓ Live", c: "#4ade8055" }],
  ];
  return (
    <div className="w-full h-full bg-[#0D1117] rounded-t-2xl p-5 overflow-hidden flex flex-col">
      <div className="flex gap-1.5 mb-4 flex-shrink-0">
        {["#FF5F57","#FEBC2E","#28C840"].map((c,i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
        ))}
      </div>
      <div className="flex flex-col gap-1.5 font-mono text-[11px]">
        {lines.map((tokens, li) => (
          <motion.div key={li} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + li * 0.18, duration: 0.35 }} className="flex flex-wrap leading-5">
            {tokens.map((tok, ti) => <span key={ti} style={{ color: tok.c }}>{tok.t}</span>)}
          </motion.div>
        ))}
        <motion.span animate={{ opacity: [1,0,1] }} transition={{ duration: 0.85, repeat: Infinity }}
          className="inline-block w-[7px] h-[13px] bg-white/70 align-middle mt-0.5" />
      </div>
    </div>
  );
}

function MobileAppsVisual() {
  const stats = [
    { label: "Revenue", value: "$24.8k", change: "+12%", delay: 0.4 },
    { label: "Users",   value: "8,420",  change: "+5%",  delay: 0.55 },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#E8E4F8] to-[#D8E8F8] rounded-t-2xl flex items-center justify-center overflow-hidden relative">
      <div className="absolute w-48 h-48 rounded-full border border-purple/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.33,1,0.68,1] }}
        className="relative w-[118px] h-[210px] rounded-[26px] overflow-hidden shadow-2xl z-10"
        style={{ border: "2px solid rgba(255,255,255,0.6)" }}>
        <div className="w-full h-full bg-[#12102A] flex flex-col">
          <div className="flex items-center justify-between px-3 pt-2.5 pb-1 flex-shrink-0">
            <span className="text-white/40 text-[7px]">9:41</span>
            <div className="w-8 h-1.5 bg-white/10 rounded-full" />
            <div className="w-2.5 h-1.5 bg-white/40 rounded-sm" />
          </div>
          <div className="flex-1 px-3 pb-2 flex flex-col gap-2 overflow-hidden">
            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <p className="text-white/40 text-[7px]">Good morning</p>
              <p className="text-white text-[10px] font-bold">Dashboard</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }} className="flex items-center justify-center my-0.5">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
                  <motion.circle cx="20" cy="20" r="16" fill="none" stroke="url(#g1)"
                    strokeWidth="3.5" strokeLinecap="round" strokeDasharray="100"
                    initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 28 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }} />
                  <defs>
                    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0084FF" /><stop offset="100%" stopColor="#6D3ACF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white text-[11px] font-bold">72%</span>
                  <span className="text-white/40 text-[6px]">growth</span>
                </div>
              </div>
            </motion.div>
            <div className="flex gap-1.5">
              {stats.map((s,i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: s.delay }} className="flex-1 rounded-xl p-1.5"
                  style={{ background: "rgba(255,255,255,0.06)" }}>
                  <p className="text-white/40 text-[6px]">{s.label}</p>
                  <p className="text-white text-[9px] font-bold">{s.value}</p>
                  <p className="text-[6px] font-semibold text-green-400">{s.change}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex items-center justify-around px-2 py-2 flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {["⊞","◎","♡","◉"].map((icon,i) => (
              <span key={i} className="text-[10px]" style={{ color: i===0 ? "#0084FF" : "rgba(255,255,255,0.3)" }}>{icon}</span>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30, scale: 0.85 }} animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
        className="absolute top-6 right-5 bg-white rounded-xl px-2.5 py-1.5 shadow-lg flex items-center gap-1.5 z-20">
        <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-blue to-purple flex items-center justify-center">
          <span className="text-white text-[7px] font-bold">V</span>
        </div>
        <div>
          <p className="text-[7px] font-bold text-gray-800 leading-none">New order</p>
          <p className="text-[6px] text-gray-400 leading-none mt-0.5">just now</p>
        </div>
      </motion.div>
    </div>
  );
}

function AIAssistantVisual() {
  const msgs = [
    { side: "user", text: "Summarise last week's sales", delay: 0.2 },
    { side: "ai",   text: "Revenue ↑34% vs prior week. Top: Enterprise plan.", delay: 0.9 },
    { side: "user", text: "Draft a follow-up email", delay: 1.7 },
    { side: "ai",   text: "Sure — generating now…", delay: 2.4 },
  ];
  return (
    <div className="w-full h-full bg-[#09101F] rounded-t-2xl p-4 flex flex-col gap-2.5 overflow-hidden">
      <div className="flex items-center gap-2 mb-1 flex-shrink-0">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center">
          <span className="text-white text-[9px] font-bold">V</span>
        </div>
        <span className="text-white/50 text-[10px] font-medium">Vektro AI</span>
        <motion.div animate={{ opacity: [1,0.3,1] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400" />
      </div>
      {msgs.map((m,i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 8, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: m.delay, duration: 0.38, ease: [0.33,1,0.68,1] }}
          className={`flex ${m.side==="user" ? "justify-end" : "justify-start"}`}>
          <div className="max-w-[80%] px-3 py-1.5 rounded-2xl text-[10px] leading-snug"
            style={{ background: m.side==="user" ? "linear-gradient(135deg,#0084FF,#6D3ACF)" : "rgba(255,255,255,0.07)",
              color: m.side==="user" ? "#fff" : "rgba(255,255,255,0.7)" }}>
            {m.text}
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }} className="flex justify-start">
        <div className="px-3 py-1.5 rounded-2xl flex gap-1 items-center" style={{ background: "rgba(255,255,255,0.07)" }}>
          {[0,0.18,0.36].map((d,i) => (
            <motion.div key={i} animate={{ y: [0,-4,0] }} transition={{ delay: d, duration: 0.55, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/50" />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function QAVisual() {
  const tests = [
    { name: "Authentication", ms: "12ms", delay: 0.2 },
    { name: "Checkout flow",  ms: "8ms",  delay: 0.45 },
    { name: "API endpoints",  ms: "5ms",  delay: 0.7 },
    { name: "Edge cases",     ms: "19ms", delay: 0.95 },
    { name: "Load (10k rps)", ms: "ok",   delay: 1.2 },
  ];
  return (
    <div className="w-full h-full bg-[#F4FBF4] rounded-t-2xl p-5 font-mono flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          className="w-3 h-3 border-2 border-green-500 border-t-transparent rounded-full" />
        <span className="text-[10px] text-gray-400">Running test suite…</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {tests.map((t,i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: t.delay, duration: 0.3 }} className="flex items-center gap-2">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: t.delay+0.1, type: "spring", stiffness: 350, damping: 12 }}
              className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[8px] font-bold">✓</span>
            </motion.div>
            <span className="text-[10px] text-gray-600 flex-1">{t.name}</span>
            <span className="text-[10px] text-green-500 font-bold">{t.ms}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
        className="mt-auto pt-3 border-t border-green-200 flex items-center gap-2">
        <span className="text-[10px] text-green-600 font-bold">5 passed · 0 failed</span>
        <motion.span animate={{ scale: [1,1.2,1] }} transition={{ delay: 2, duration: 0.4 }} className="text-base">🎉</motion.span>
      </motion.div>
    </div>
  );
}

function CloudVisual() {
  const lines = [
    { text: "$ vektro deploy --env prod", c: "#e2e8f0", delay: 0.15 },
    { text: "  Bundling assets...", c: "#94a3b8", delay: 0.45 },
    { text: "✓ 142 tests passed (1.1s)", c: "#4ade80", delay: 0.75 },
    { text: "✓ Build complete (2.3s)", c: "#4ade80", delay: 1.05 },
    { text: "↑ Uploading to CDN", c: "#60a5fa", delay: 1.35 },
    { text: "  ██████████░░ 83%", c: "#475569", delay: 1.65 },
    { text: "✓ eu-west · us-east · ap-south", c: "#4ade80", delay: 2.0 },
    { text: "  Live at vektro.app ✦", c: "#818cf8", delay: 2.3 },
  ];
  return (
    <div className="w-full h-full bg-[#0D1117] rounded-t-2xl p-5 font-mono overflow-hidden flex flex-col">
      <div className="flex gap-1.5 mb-4 flex-shrink-0">
        {["#FF5F57","#FEBC2E","#28C840"].map((c,i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {lines.map((l,i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: l.delay, duration: 0.3 }}
            className="text-[10px] leading-[18px]" style={{ color: l.c }}>
            {l.text}
          </motion.div>
        ))}
        <motion.span animate={{ opacity: [1,0,1] }} transition={{ duration: 0.85, repeat: Infinity, delay: 2.8 }}
          className="inline-block w-[7px] h-[13px] bg-green-400/70 align-middle mt-1" />
      </div>
    </div>
  );
}

function CustomSoftVisual() {
  const cols = [
    { label: "Backlog", color: "#94a3b8", tasks: ["User auth", "Settings", "Reports"], delays: [0.2, 0.35, 0.5] },
    { label: "Building", color: "#0084FF", tasks: ["API layer", "Dashboard"], delays: [0.4, 0.55] },
    { label: "Shipped", color: "#22c55e", tasks: ["Design system", "DB schema"], delays: [0.3, 0.45] },
  ];
  return (
    <div className="w-full h-full bg-[#F5F0E8] rounded-t-2xl p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-navy/20" />
        <span className="text-[9px] font-bold tracking-widest text-navy/40">PROJECT BOARD</span>
      </div>
      <div className="flex gap-2 h-[calc(100%-32px)]">
        {cols.map((col, ci) => (
          <motion.div key={ci} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + ci * 0.12, duration: 0.4 }}
            className="flex-1 rounded-xl p-2 flex flex-col gap-2"
            style={{ background: col.color + "14" }}>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: col.color }} />
              <span className="text-[8px] font-bold tracking-wide" style={{ color: col.color }}>{col.label}</span>
              <span className="ml-auto text-[8px] font-bold rounded-full px-1.5 py-0.5"
                style={{ background: col.color + "20", color: col.color }}>{col.tasks.length}</span>
            </div>
            {col.tasks.map((task, ti) => (
              <motion.div key={ti} initial={{ opacity: 0, scale: 0.88, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: col.delays[ti], duration: 0.38, type: "spring", stiffness: 220, damping: 16 }}
                className="bg-white rounded-lg p-2 shadow-sm border border-black/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: col.color + "80" }} />
                  <span className="text-[9px] text-gray-700 font-medium leading-tight">{task}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Card data ────────────────────────────────────────────────────────────────

const cards = [
  { num: "01", title: "Web Development", desc: "Pixel-perfect sites & web apps built to convert — fast, accessible, SEO-ready.", Visual: CodeEditorVisual, accent: "#0084FF" },
  { num: "02", title: "Mobile Apps", desc: "Native iOS & Android experiences users open every day.", Visual: MobileAppsVisual, accent: "#6D3ACF" },
  { num: "03", title: "AI Assistants", desc: "Custom intelligent agents that work inside your existing tools and workflows.", Visual: AIAssistantVisual, accent: "#0084FF" },
  { num: "04", title: "QA & Testing", desc: "Automated pipelines that catch every edge case before your users do.", Visual: QAVisual, accent: "#16a34a" },
  { num: "05", title: "Cloud Infrastructure", desc: "Globally distributed, always-on deployments that scale with your growth.", Visual: CloudVisual, accent: "#0084FF" },
  { num: "06", title: "Custom Software", desc: "Bespoke systems engineered from scratch around your exact requirements.", Visual: CustomSoftVisual, accent: "#1B2A6B" },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function WhatWeDo() {
  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(135deg, #EEF3FF 0%, #F7F2FF 50%, #E8F4FF 100%)" }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
          className="mb-12"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue block mb-3">What We Do</span>
          <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl leading-tight">
            Services we{" "}
            <span style={{ background: "linear-gradient(135deg,#0084FF,#6D3ACF)", WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              deliver
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const { Visual } = card;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.33, 1, 0.68, 1] }}
                className="rounded-2xl overflow-hidden bg-white"
                style={{ boxShadow: "0 4px 24px rgba(27,42,107,0.08), 0 1px 4px rgba(27,42,107,0.04)" }}
              >
                <div className="h-48 overflow-hidden">
                  <Visual />
                </div>
                <div className="px-5 py-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest"
                      style={{ color: card.accent + "90" }}>{card.num}</span>
                    <div className="h-px flex-1" style={{ background: card.accent + "20" }} />
                  </div>
                  <h3 className="font-bold text-navy text-base leading-snug mb-1">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
