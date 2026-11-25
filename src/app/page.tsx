
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity, Trophy, CalendarDays, ChartNoAxesCombined,
  Search, Menu, X, ArrowUpRight, Clock3,
  ChevronRight, Shield, Zap, Bell, Home,
  Star, TrendingUp, Globe, CircleUserRound
} from "lucide-react";

const matches = [
  {
    id: 1,
    competition: "LIGUE DES CHAMPIONS",
    home: "Real Madrid",
    away: "Manchester City",
    homeShort: "RMA",
    awayShort: "MCI",
    time: "20:00",
    status: "À VENIR",
    homeColor: "#e9bd55",
    awayColor: "#75a9df"
  },
  {
    id: 2,
    competition: "PREMIER LEAGUE",
    home: "Arsenal",
    away: "Liverpool",
    homeShort: "ARS",
    awayShort: "LIV",
    time: "17:30",
    status: "À VENIR",
    homeColor: "#e45d58",
    awayColor: "#d64d4d"
  },
  {
    id: 3,
    competition: "LA LIGA",
    home: "Barcelona",
    away: "Atlético Madrid",
    homeShort: "BAR",
    awayShort: "ATM",
    time: "21:00",
    status: "À VENIR",
    homeColor: "#5287d9",
    awayColor: "#e75a59"
  }
];

const navigation = [
  { name: "Accueil", icon: Home, href: "#home" },
  { name: "Rencontres", icon: CalendarDays, href: "#matches" },
  { name: "Résultats", icon: Trophy, href: "#results" },
  { name: "Statistiques", icon: ChartNoAxesCombined, href: "#stats" }
];

function TeamBadge({
  name,
  color
}: {
  name: string;
  color: string;
}) {
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black text-white shadow-lg"
      style={{
        background: `linear-gradient(145deg, ${color}, #171717)`,
        border: "1px solid rgba(255,255,255,.12)"
      }}
    >
      {name}
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Tous");

  const filteredMatches = matches.filter(match => {
    const text = `${match.home} ${match.away} ${match.competition}`;
    const searchMatch = text.toLowerCase().includes(search.toLowerCase());

    return searchMatch &&
      (activeTab === "Tous" || match.competition === activeTab);
  });

  return (
    <main id="home" className="min-h-screen bg-[#090a0c] text-white">

      {/* NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#090a0c]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">

          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9bd55] text-black shadow-lg shadow-[#e9bd55]/10">
              <Zap size={24} fill="currentColor" />
            </div>

            <div>
              <div className="font-['Outfit'] text-xl font-extrabold tracking-wider">
                MK45<span className="text-[#e9bd55]">.</span>
              </div>
              <div className="text-[9px] font-bold tracking-[3px] text-zinc-500">
                PRONOSTICS
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-sm text-zinc-400 transition duration-300 hover:text-[#e9bd55]"
              >
                <item.icon size={16} />
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <button
              aria-label="Notifications"
              className="text-zinc-400 transition hover:text-[#e9bd55]"
            >
              <Bell size={19} />
            </button>

            <a
              href="#account"
              className="rounded-lg border border-[#e9bd55]/40 px-5 py-2.5 text-xs font-bold tracking-wide text-[#e9bd55] transition hover:bg-[#e9bd55] hover:text-black"
            >
              MON ESPACE
            </a>
          </div>

          <button
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#111317] md:hidden"
            >
              <div className="p-5">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 border-b border-white/5 py-4 text-sm text-zinc-300"
                  >
                    <item.icon size={18} className="text-[#e9bd55]" />
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10">

        {/* HERO */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative overflow-hidden rounded-3xl border border-[#e9bd55]/20 bg-gradient-to-br from-[#282216] via-[#171719] to-[#101114] p-7 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#e9bd55]/10 blur-[100px]" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e9bd55]/30 bg-[#e9bd55]/10 px-4 py-2 text-[10px] font-bold tracking-[2px] text-[#e9bd55]">
              <Activity size={13} />
              CENTRE D'ANALYSE SPORTIVE
            </div>

            <h1 className="font-['Outfit'] text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              LE SPORT.
              <br />
              <span className="text-[#e9bd55]">ANALYSÉ</span>
              <br />
              AUTREMENT.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 md:text-base">
              Retrouvez les rencontres, les résultats et les analyses
              sportives dans un espace conçu pour les passionnés.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#matches"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e9bd55] px-6 py-3.5 text-xs font-extrabold text-black transition hover:bg-[#f5d47e]"
              >
                EXPLORER LES MATCHS
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#stats"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-xs font-bold text-white transition hover:border-[#e9bd55]/50"
              >
                STATISTIQUES
                <ChartNoAxesCombined size={16} />
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-[-65px] right-[-30px] hidden rotate-[-15deg] opacity-[0.06] md:block">
            <Trophy size={340} strokeWidth={1} />
          </div>
        </motion.section>

        {/* STATISTICS */}

        <section id="stats" className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          {[
            { label: "RENCONTRES", value: "24", icon: CalendarDays },
            { label: "CHAMPIONNATS", value: "08", icon: Trophy },
            { label: "ÉQUIPES", value: "120+", icon: Shield },
            { label: "ANALYSES", value: "36", icon: ChartNoAxesCombined }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              className="rounded-2xl border border-white/[0.07] bg-[#111317] p-5 transition duration-300 hover:border-[#e9bd55]/30"
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold tracking-wider text-zinc-500">
                  {stat.label}
                </div>
                <stat.icon size={19} className="text-[#e9bd55]" />
              </div>

              <div className="mt-4 font-['Outfit'] text-3xl font-extrabold">
                {stat.value}
              </div>
            </motion.div>
          ))}

        </section>

        {/* MATCHES */}

        <section id="matches" className="mt-12">

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-2 text-[10px] font-bold tracking-[3px] text-[#e9bd55]">
                CENTRE DES RENCONTRES
              </div>

              <h2 className="font-['Outfit'] text-2xl font-bold md:text-3xl">
                Matchs à découvrir
              </h2>

              <p className="mt-2 text-xs text-zinc-500">
                Calendrier des rencontres sportives
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher un match..."
                className="w-full rounded-xl border border-white/10 bg-[#111317] py-3 pl-11 pr-4 text-xs text-white outline-none transition focus:border-[#e9bd55]/50"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-3">
            {["Tous", "LIGUE DES CHAMPIONS", "PREMIER LEAGUE", "LA LIGA"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-[10px] font-bold transition ${
                  activeTab === tab
                    ? "bg-[#e9bd55] text-black"
                    : "border border-white/10 bg-[#111317] text-zinc-400 hover:border-[#e9bd55]/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match, index) => (
                <motion.article
                  key={match.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * .1 }}
                  className="group rounded-2xl border border-white/[0.08] bg-[#111317] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#e9bd55]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-extrabold tracking-[2px] text-zinc-500">
                      {match.competition}
                    </span>

                    <span className="rounded-full border border-[#e9bd55]/20 bg-[#e9bd55]/10 px-3 py-1 text-[9px] font-bold text-[#e9bd55]">
                      {match.status}
                    </span>
                  </div>

                  <div className="my-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3">

                    <div className="flex flex-col items-center gap-3 text-center">
                      <TeamBadge
                        name={match.homeShort}
                        color={match.homeColor}
                      />
                      <span className="text-xs font-bold">
                        {match.home}
                      </span>
                    </div>

                    <div className="text-center">
                      <div className="font-['Outfit'] text-xl font-extrabold text-[#e9bd55]">
                        VS
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-500">
                        <Clock3 size={12} />
                        {match.time}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-center">
                      <TeamBadge
                        name={match.awayShort}
                        color={match.awayColor}
                      />
                      <span className="text-xs font-bold">
                        {match.away}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
                    <span className="text-[10px] text-zinc-500">
                      Rencontre programmée
                    </span>

                    <button className="flex items-center gap-1 text-[10px] font-bold text-[#e9bd55] transition group-hover:gap-2">
                      VOIR LE MATCH
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="rounded-xl border border-white/10 p-8 text-center text-sm text-zinc-500 lg:col-span-2">
                Aucun match correspondant.
              </div>
            )}
          </div>
        </section>

        {/* RESULTS */}

        <section id="results" className="mt-12">
          <div className="mb-5">
            <div className="mb-2 text-[10px] font-bold tracking-[3px] text-[#e9bd55]">
              SUIVI SPORTIF
            </div>
            <h2 className="font-['Outfit'] text-2xl font-bold">
              Espace résultats
            </h2>
          </div>

          <div className="panel flex flex-col items-center justify-center p-10 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9bd55]/10 text-[#e9bd55]">
              <Trophy size={26} />
            </div>
            <h3 className="font-bold">Les résultats seront affichés ici</h3>
            <p className="mt-2 max-w-sm text-xs leading-6 text-zinc-500">
              Retrouvez les scores et les résultats des rencontres
              dès que les données sportives seront connectées.
            </p>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="mt-16 border-t border-white/[0.08] py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <div className="font-['Outfit'] text-xl font-extrabold">
                MK45<span className="text-[#e9bd55]">.</span>
              </div>
              <div className="mt-1 text-[9px] tracking-[3px] text-zinc-600">
                PRONOSTICS
              </div>
            </div>

            <p className="text-center text-[10px] text-zinc-600">
              © 2026 MK45 PRONOSTICS. Tous droits réservés.
            </p>

            <div className="flex items-center gap-2 text-[10px] text-zinc-500">
              <Shield size={14} className="text-[#e9bd55]" />
              Informations sportives
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
  }
        
