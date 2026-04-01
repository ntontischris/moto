"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* ====== HERO ====== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0F1419] overflow-hidden">
        {/* Red top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC2626]" />

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(220,38,38,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#DC2626]/40 text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            Technical & Business Proposal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-7xl sm:text-9xl font-black tracking-tighter"
          >
            <span className="text-white">Moto</span>
            <span className="text-[#DC2626]">Market</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-1"
          >
            <p className="text-xl text-white/60 font-medium tracking-wide">
              Custom E-Commerce Platform
            </p>
            <p className="text-sm text-white/30 tracking-[0.2em] uppercase">
              Next-Generation Motorcycle Gear Shop
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 h-px bg-[#DC2626]"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-12 pt-4"
          >
            {[
              ["Alexandros Keramopoulos", "Gen2 Digital"],
              ["Version 2.0", "Απρίλιος 2026"],
              ["Εμπιστευτικό", "Για εσωτερική χρήση"],
            ].map(([line1, line2]) => (
              <div key={line1} className="text-center">
                <p className="text-sm font-semibold text-white/70">{line1}</p>
                <p className="text-xs text-white/30 tracking-widest uppercase">
                  {line2}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/20 tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ====== STATS ====== */}
      <section className="bg-[#1A1F2E] border-t border-white/5 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            ["10K+", "Προϊόντα"],
            ["6", "Γλώσσες"],
            ["20+", "Αυτοματισμοί"],
            ["24/7", "AI Assistant"],
          ].map(([val, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#DC2626]/40 transition-colors"
            >
              <span className="text-3xl font-black text-[#DC2626]">{val}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== AUTOMATIONS ====== */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DC2626] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              02 — Αυτοματισμοί
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F1419] mb-4">
              20+ Αυτοματισμοί που δουλεύουν 24/7
            </h2>
            <p className="text-lg text-gray-500 mb-16 max-w-3xl">
              Κάθε αυτοματισμός αντικαθιστά χειρωνακτική δουλειά και φέρνει
              μετρήσιμα αποτελέσματα. Τρέχουν μόνοι τους, κάθε μέρα, κάθε ώρα.
            </p>
          </motion.div>

          {/* Abandoned Cart Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-200 p-8 mb-8"
          >
            <div className="text-3xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold mb-3">
              Ανάκτηση Εγκαταλελειμμένων Καλαθιών
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>Το πρόβλημα:</strong> 70% των πελατών βάζουν στο καλάθι
              αλλά δεν αγοράζουν. Σήμερα χάνονται για πάντα.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {[
                ["1 ώρα", "Υπενθύμιση", "bg-amber-100 text-amber-700"],
                ["24 ώρες", "Social Proof", "bg-blue-100 text-blue-700"],
                ["72 ώρες", "Κουπόνι", "bg-green-100 text-green-700"],
              ].map(([time, label, cls], i) => (
                <div key={time} className="flex items-center gap-3">
                  <div
                    className={`px-4 py-2 rounded-lg font-medium text-sm ${cls}`}
                  >
                    <span className="font-bold">{time}:</span> {label}
                  </div>
                  {i < 2 && (
                    <span className="text-[#DC2626] font-bold text-lg">
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-5 mb-4">
              <p className="text-sm text-gray-600">
                <strong>Παράδειγμα:</strong> 100 εγκαταλ. καλάθια/μήνα &times;
                €150 μ.ο. &times; 10-15% recovery =
              </p>
              <p className="text-xl font-black text-[#059669] mt-1">
                €1.500–2.250 επιπλέον έσοδα/μήνα
              </p>
            </div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full">
              Αυξάνει πωλήσεις 10-15%
            </span>
          </motion.div>

          {/* Automation cards grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: "👋",
                title: "Welcome Email Sequence",
                problem:
                  "Ο πελάτης γράφεται, δεν παίρνει τίποτα. Χαμένη ευκαιρία.",
                solution:
                  "Αυτόματο welcome email + κουπόνι 10% + rider quiz σε 3 βήματα.",
                benefit: "Μετατρέπει νέους χρήστες σε αγοραστές εντός 7 ημερών",
              },
              {
                icon: "💸",
                title: "Ειδοποίηση Πτώσης Τιμής",
                problem:
                  "Πελάτης βλέπει κράνος €400, δεν μπορεί, φεύγει. Αν πέσει η τιμή, δεν το μαθαίνει.",
                solution:
                  "Αυτόματο email μόλις πέσει η τιμή: 'Το AGV K6 S τώρα €320!'",
                benefit:
                  "Ξαναφέρνει πελάτες που είχαν φύγει — 'ζεστοί' αγοραστές",
              },
              {
                icon: "📦",
                title: "Αυτόματη Ενημέρωση Παραγγελίας",
                problem: "Χειρωνακτικά ενημερώνετε τον πελάτη σε κάθε στάδιο.",
                solution:
                  "Αυτόματα emails: Καταχώρηση → Αποστολή → Παράδοση (με tracking).",
                benefit:
                  "Μηδέν 'πού είναι η παραγγελία μου' — εξοικονόμηση χρόνου",
              },
              {
                icon: "⭐",
                title: "Αυτόματο Αίτημα Κριτικής",
                problem:
                  "Ελάχιστοι πελάτες αφήνουν κριτική. Χαμηλή εμπιστοσύνη.",
                solution:
                  "7 μέρες μετά παραλαβή: 'Πώς σου φάνηκε; Αξιολόγησε σε 1 λεπτό'.",
                benefit: "Περισσότερες κριτικές = εμπιστοσύνη = πωλήσεις + SEO",
              },
              {
                icon: "💔",
                title: "Win-Back Ανενεργών Πελατών",
                problem: "Πελάτης 3+ μήνες χωρίς αγορά — ξεχνιέται.",
                solution:
                  "Αυτόματο email μετά 90 μέρες: '-15% σε ό,τι θες, 48 ώρες'.",
                benefit: "Ξαναενεργοποιεί πελάτες — ευκολότερο από νέο πελάτη",
              },
              {
                icon: "📊",
                title: "Σύγκριση Τιμών Ανταγωνισμού",
                problem: "Χειρωνακτικός έλεγχος τιμών σε Skroutz, FC-Moto κλπ.",
                solution:
                  "Κάθε μέρα 3πμ σαρώνει αυτόματα. AI προσαρμόζει τιμές εντός κανόνων.",
                benefit: "Πάντα ανταγωνιστικοί χωρίς χειρωνακτική δουλειά",
              },
              {
                icon: "🛍️",
                title: "Google Shopping Feed",
                problem:
                  "Χειρωνακτική ενημέρωση feed ή καθόλου Google Shopping.",
                solution:
                  "Αυτόματο daily XML feed με 10K+ κωδικούς, τιμές, stock, εικόνες.",
                benefit:
                  "Προϊόντα στο Google Shopping χωρίς κανένα manual effort",
              },
              {
                icon: "🎂",
                title: "Γενέθλια & Εποχιακές Προσφορές",
                problem: "Δεν αξιοποιείτε ημερομηνίες-κλειδιά.",
                solution:
                  "Αυτόματο κουπόνι γενεθλίων. Μάρτιο: καμπάνια riding season.",
                benefit: "Αύξηση πωλήσεων σε κρίσιμες περιόδους — αυτόματα",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <div className="bg-red-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-red-700">
                    <strong>Σήμερα:</strong> {card.problem}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-blue-700">
                    <strong>Αύριο:</strong> {card.solution}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                  <p className="text-sm text-green-700 font-semibold">
                    {card.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#065F46] to-[#059669] rounded-2xl p-10 text-center text-white mt-12"
          >
            <p className="text-5xl font-black mb-2">+20–35%</p>
            <p className="text-sm opacity-80">
              Εκτιμώμενη αύξηση εσόδων μόνο από τους αυτοματισμούς (industry
              benchmark)
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== AI FEATURES ====== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DC2626] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              03 — Τεχνητή Νοημοσύνη
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              AI — Ο &laquo;υπάλληλος&raquo; που δεν κοιμάται ποτέ
            </h2>
            <p className="text-lg text-gray-500 mb-16 max-w-3xl">
              Τεχνολογία OpenAI (ίδια με ChatGPT) εκπαιδευμένη στα προϊόντα σας.
            </p>
          </motion.div>

          {/* Chatbot showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F1419] rounded-2xl p-1 mb-8"
          >
            <div className="rounded-xl bg-[#1A1F2E] p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/50 text-sm ml-3">
                  MotoMarket AI Assistant
                </span>
                <span className="ml-auto text-xs text-green-400">
                  ● Online 24/7
                </span>
              </div>

              <div className="space-y-4 max-w-2xl">
                {/* Bot */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-white text-sm flex-shrink-0">
                    M
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-white/80 text-sm">
                    Γεια! Πώς μπορώ να βοηθήσω;
                  </div>
                </div>

                {/* User */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#DC2626] rounded-2xl rounded-tr-none px-4 py-3 text-white text-sm max-w-md">
                    Θέλω κράνος touring για τη GS μου, μέχρι €400, ήσυχο
                  </div>
                </div>

                {/* Bot response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-white text-sm flex-shrink-0">
                    M
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-white/80 text-sm max-w-lg">
                    <p className="mb-3">
                      Με βάση τη{" "}
                      <strong className="text-white">BMW R 1250 GS</strong> σου:
                    </p>
                    <div className="space-y-2">
                      {[
                        [
                          "1.",
                          "AGV K6 S",
                          "€349",
                          "★★★★☆",
                          "Πολύ ήσυχο, Pinlock ready",
                        ],
                        [
                          "2.",
                          "HJC RPHA 71",
                          "€389",
                          "★★★★☆",
                          "Smart HJC ready",
                        ],
                        [
                          "3.",
                          "Shoei GT-Air 3",
                          "€549",
                          "★★★★★",
                          "Πάνω από budget, αλλά #1",
                        ],
                      ].map(([num, name, price, stars, note]) => (
                        <div
                          key={name}
                          className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2"
                        >
                          <span className="text-[#DC2626] font-bold">
                            {num}
                          </span>
                          <span className="font-semibold text-white">
                            {name}
                          </span>
                          <span className="text-green-400 font-bold">
                            {price}
                          </span>
                          <span className="text-yellow-400 text-xs">
                            {stars}
                          </span>
                          <span className="text-white/40 text-xs hidden sm:inline">
                            {note}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-white/50">
                      Θες να τα συγκρίνουμε αναλυτικά;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mt-6">
                <p className="text-green-400 font-semibold text-sm text-center">
                  ✓ Πώληση στις 23:00 που αλλιώς θα χανόταν — χωρίς υπάλληλο
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI sub-features */}
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: "🤝",
                title: "AI Διαπραγμάτευση Τιμών",
                desc: "Ο πελάτης πατάει 'Κάνε προσφορά', γράφει €280 (αντί €349). Το AI ελέγχει margin, stock, πιστότητα πελάτη — αποδέχεται, αντιπροτείνει ή απορρίπτει. Αυτόματο κουπόνι 2 ωρών.",
                benefit: "Κλείνει πωλήσεις χωρίς ανθρώπινη παρέμβαση",
              },
              {
                icon: "🎯",
                title: "Έξυπνες Προτάσεις",
                desc: "Κάθε πελάτης βλέπει αυτό που ΤΟΝ ενδιαφέρει: βάσει μηχανής, τύπου rider, ιστορικού. 'Αγόρασες κράνος αλλά όχι pinlock; Δες αυτό.'",
                benefit: "+15-30% μέση αξία παραγγελίας (upsell/cross-sell)",
              },
            ].map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-6"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{f.desc}</p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                  <p className="text-sm text-green-700 font-semibold">
                    {f.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Auto SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mt-5"
          >
            <div className="text-2xl mb-3">✍️</div>
            <h3 className="text-lg font-bold mb-2">
              Αυτόματη Δημιουργία SEO Περιεχομένου
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              10.000+ προϊόντα χρειάζονται τίτλους, περιγραφές, meta tags σε 6
              γλώσσες. Χειρωνακτικά = αδύνατο. Κάθε νέο προϊόν από Entersoft →
              AI γράφει τα πάντα αυτόματα σε Ελληνικά, Αγγλικά, Βουλγάρικα,
              Σέρβικα, Ρουμάνικα, Αλβανικά.
            </p>
            <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
              <p className="text-sm text-green-700 font-semibold">
                10.000+ σελίδες SEO-optimized χωρίς να γράψετε λέξη
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== KEY FEATURES ====== */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DC2626] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              04 — Βασικά Features
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-16">
              Τι θα βλέπει ο πελάτης
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: "🏍️",
                title: '"Η Μηχανή μου" (Garage)',
                desc: 'Ο πελάτης δηλώνει τη μηχανή του. Σε ΚΑΘΕ προϊόν: "Ταιριάζει στη μηχανή σου" ή "Δεν είναι συμβατό". Τα φίλτρα κρύβουν αυτόματα τα ασύμβατα.',
                benefit: "Λιγότερες επιστροφές, μεγαλύτερη εμπιστοσύνη",
                tag: "Κανένα ελληνικό e-shop δεν το κάνει",
                highlight: true,
              },
              {
                icon: "🔮",
                title: "Augmented Reality (AR)",
                desc: "Ο πελάτης ανοίγει κάμερα και βλέπει βαλίτσα/top-case ΠΑΝΩ στη μηχανή του. Χωρίς εγκατάσταση app.",
                benefit: 'Αφαιρεί το "δεν ξέρω αν θα ταιριάζει"',
                tag: "First mover advantage",
                highlight: true,
              },
              {
                icon: "🔍",
                title: "Έξυπνη Αναζήτηση",
                desc: '"κρανως shoie" → "Κράνη Shoei". "κάτι για βροχή" → αδιάβροχα. Φωνητική αναζήτηση. <50ms.',
                benefit: "Ο πελάτης βρίσκει ΠΑΝΤΑ αυτό που ψάχνει",
              },
              {
                icon: "🎬",
                title: "360° Προβολή & Video",
                desc: "Περιστροφή 360° με drag. Video demos. Cinematic hero video στην αρχική.",
                benefit: "Premium αίσθηση — σαν να πιάνεις το προϊόν",
              },
              {
                icon: "💳",
                title: "Σύγχρονες Πληρωμές",
                desc: "Κάρτα, Apple Pay, Google Pay, Revolut, Klarna δόσεις 0%, SEPA, δόσεις τράπεζας.",
                benefit: "Klarna: +20% conversion σε ακριβά προϊόντα (€200+)",
              },
              {
                icon: "🌍",
                title: "6 Γλώσσες & Νομίσματα",
                desc: "EL, EN, BG, SR, RO, SQ. Auto ανίχνευση χώρας → σωστή γλώσσα & νόμισμα.",
                benefit:
                  "25+ εκατ. πληθυσμός Βαλκανίων — χωρίς ξεχωριστά sites",
              },
              {
                icon: "⭐",
                title: "Rider Reviews",
                desc: 'Κάθε review: μηχανή, ύψος/βάρος, εμπειρία. "Riders σαν εσένα" filtering.',
                benefit: "Εμπιστοσύνη x10",
              },
              {
                icon: "🎁",
                title: "Referral & Loyalty Program",
                desc: "Κωδικός KOSTAS2026: φίλος -10%, Κώστας κερδίζει πόντους. Πόντοι = εκπτώσεις.",
                benefit: "Πελάτες φέρνουν πελάτες χωρίς paid ads",
              },
            ].map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 border ${f.highlight ? "bg-gradient-to-br from-red-50 to-white border-red-200" : "bg-white border-gray-200"} hover:shadow-lg transition-shadow`}
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{f.desc}</p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500 mb-3">
                  <p className="text-sm text-green-700 font-semibold">
                    {f.benefit}
                  </p>
                </div>
                {f.tag && (
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    {f.tag}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ERP ====== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DC2626] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              06 — ERP Entersoft
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-16">
              Πλήρης Διασύνδεση με Entersoft
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {[
              {
                dir: "ERP → E-shop",
                interval: "κάθε 5-15 λεπτά",
                items: ["Προϊόντα", "Τιμές", "Stock", "Κατηγορίες", "Εικόνες"],
                benefit: "Νέο προϊόν στο Entersoft → 5 λεπτά μετά στο site",
              },
              {
                dir: "E-shop → ERP",
                interval: "αμέσως",
                items: ["Παραγγελίες", "Πελάτες", "Τιμολόγια"],
                benefit: "Checkout → 1 δευτερόλεπτο στο Entersoft",
              },
            ].map((s) => (
              <motion.div
                key={s.dir}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-bold mb-1">{s.dir}</h3>
                <p className="text-sm text-gray-400 mb-4">{s.interval}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="bg-white px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                  <p className="text-sm text-green-700 font-semibold">
                    {s.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-200 p-6"
          >
            <h3 className="text-lg font-bold mb-2">
              🛡️ Failsafe — Τι γίνεται αν πέσει το ERP;
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Αν το Entersoft δεν είναι διαθέσιμο, το e-shop{" "}
              <strong>συνεχίζει κανονικά</strong> από cache. Οι παραγγελίες
              αποθηκεύονται και στέλνονται αυτόματα μόλις επανέλθει. Κανένα
              χαμένο δεδομένο.
            </p>
            <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
              <p className="text-sm text-green-700 font-semibold">
                Ο πελάτης δεν βλέπει ποτέ πρόβλημα — καμία χαμένη πώληση
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== LANDING PAGES ====== */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DC2626] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              05 — Marketing Machine
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Landing Pages — Κάθε διαφήμιση, τη δική της σελίδα
            </h2>
            <p className="text-lg text-gray-500 mb-16 max-w-3xl">
              Το e-shop δεν είναι μόνο κατάστημα — είναι{" "}
              <strong className="text-[#0F1419]">marketing platform</strong>.
              Δυναμικές landing pages για κάθε καμπάνια, κοινό και στιγμή.
            </p>
          </motion.div>

          {/* Campaign + Bike highlight cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-200 p-6"
            >
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-3">Campaign Landing Pages</h3>
              <p className="text-sm text-gray-600 mb-4">
                Κάθε διαφήμιση στέλνει τον πελάτη σε{" "}
                <strong>εξατομικευμένη σελίδα</strong>, όχι στο generic
                homepage.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  [
                    "Google Ads",
                    '"κράνος touring"',
                    "Σελίδα μόνο touring κράνη + CTA",
                  ],
                  [
                    "Facebook Ad",
                    '"Nordcode -20%"',
                    "Nordcode products + countdown",
                  ],
                  [
                    "Instagram",
                    '"Rider Quiz"',
                    "Quiz → τύπος rider → προτάσεις",
                  ],
                ].map(([platform, query, result]) => (
                  <div
                    key={platform}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="text-[#DC2626] font-bold shrink-0">
                      {platform}
                    </span>
                    <span className="text-gray-400">{query} →</span>
                    <span className="text-gray-600">{result}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                <p className="text-sm text-green-700 font-semibold">
                  Conversion x2-3 vs generic homepage (5-15% αντί 2-4%)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-200 p-6"
            >
              <div className="text-2xl mb-3">🏍️</div>
              <h3 className="text-lg font-bold mb-3">Bike-Specific Pages</h3>
              <p className="text-sm text-gray-600 mb-4">
                Αυτόματα δημιουργημένες σελίδες για κάθε μοντέλο μηχανής.
                Τεράστιο SEO long-tail δυναμικό.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  ["/bikes/bmw-r1250gs", "Τα πάντα για τη GS σου"],
                  ["/bikes/yamaha-tenere-700", "Ξεκίνα το adventure"],
                  ["/bikes/honda-africa-twin", "Africa Twin essentials"],
                ].map(([url, desc]) => (
                  <div key={url} className="flex items-center gap-2 text-sm">
                    <code className="bg-gray-100 px-2 py-0.5 rounded text-xs text-[#DC2626] font-mono">
                      {url}
                    </code>
                    <span className="text-gray-500">→ {desc}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                <p className="text-sm text-green-700 font-semibold">
                  &quot;αξεσουάρ bmw gs&quot; στη Google → πέφτει εδώ → δωρεάν
                  traffic
                </p>
              </div>
            </motion.div>
          </div>

          {/* More landing page types */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {[
              {
                icon: "🏄",
                title: "Rider-Type Pages",
                desc: "Κάθε τύπος αναβάτη βλέπει τον δικό του κόσμο:",
                items: [
                  "/touring — Βαλίτσες, GPS, κράνη comfort",
                  "/adventure — Off-road boots, protection, rally gear",
                  "/city — Urban κράνη, γάντια, αντανακλαστικά",
                  "/sport — Racing suits, sliders, track day gear",
                ],
                benefit:
                  "Κάθε rider νιώθει ότι το site είναι φτιαγμένο για ΑΥΤΟΝ",
              },
              {
                icon: "📅",
                title: "Seasonal & Event Pages",
                desc: "Αυτόματη ενεργοποίηση βάσει ημερομηνίας:",
                items: [
                  "Μάρτιος: 'Ετοιμάσου για τη σεζόν' — bundles, checklist",
                  "Νοέμβριος: Black Friday — countdown, flash deals",
                  "Μετά event: Greek Adv 2026 — highlights, promo",
                  "Χειμώνας: Heated gear, αδιάβροχα, thermal",
                ],
                benefit: "Set & forget — ενεργοποιούνται μόνες τους",
              },
              {
                icon: "📧",
                title: "Lead Magnets — Χτίζουν email list",
                desc: "Μαζεύετε emails χωρίς να ζητήσετε 'εγγραφή':",
                items: [
                  "Free PDF: 'Πώς να διαλέξεις κράνος' → Email",
                  "AI Size Quiz → Email + μετρήσεις σώματος",
                  "'Τι τύπος rider είσαι;' → Email + preferences",
                  "Κλήρωση Shoei → Email + social shares",
                ],
                benefit:
                  "Κάθε visitor γίνεται lead — ακόμα κι αν δεν αγοράσει τώρα",
              },
              {
                icon: "🔗",
                title: "Referral & Brand Pages",
                desc: "Viral growth + brand partnerships:",
                items: [
                  "/invite/KOSTAS2026 → 'Ο Κώστας σου δίνει 10%'",
                  "/brands/nordcode → Brand story + exclusive deals",
                  "/brands/pilot → QR destination από ετικέτες προϊόντων",
                ],
                benefit: "Κάθε πελάτης γίνεται ambassador — viral loop",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{card.desc}</p>
                <div className="space-y-1.5 mb-4">
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-[#DC2626] mt-0.5">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                  <p className="text-sm text-green-700 font-semibold">
                    {card.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Landing Page Builder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-200 p-6 mb-8"
          >
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="text-lg font-bold mb-3">
              Landing Page Builder — Χωρίς κώδικα
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Εσείς ή ο marketing manager φτιάχνετε νέα landing page σε λεπτά
              μέσω admin panel:
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {[
                "Επιλογή template (campaign, quiz, seasonal)",
                "Drag-and-drop blocks (hero, products, countdown, CTA)",
                "A/B testing — δοκιμάστε 2 versions",
                "UTM tracking — ποια διαφήμιση φέρνει πωλήσεις",
                "Schedule publish/unpublish αυτόματα",
                "Auto OG images για social sharing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span className="text-green-500">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
              <p className="text-sm text-green-700 font-semibold">
                Δεν χρειάζεστε developer — μόνοι σας, σε λεπτά
              </p>
            </div>
          </motion.div>

          {/* ROI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#065F46] to-[#059669] rounded-2xl p-10 text-center text-white"
          >
            <p className="text-5xl font-black mb-2">x2-3</p>
            <p className="text-sm opacity-80">
              Conversion rate με targeted landing pages vs generic homepage
              (industry benchmark: 5-15% αντί 2-4%)
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== SEO ====== */}
      <section className="bg-[#0F1419] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DC2626] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              07 — SEO & Performance
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Να σας βρίσκουν χωρίς διαφήμιση
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Rich Snippets mock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-white font-bold mb-4">Rich Snippets</h3>
              <div className="bg-white rounded-lg p-4">
                <p className="text-blue-700 text-sm font-medium">
                  AGV K6 S Full Face Κράνος — MotoMarket
                </p>
                <p className="text-green-700 text-xs">
                  motomarket.gr/helmets/agv-k6-s
                </p>
                <p className="text-yellow-600 text-xs">
                  ★★★★☆ 4.2 (47 reviews) — €349.00 — Σε απόθεμα
                </p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mt-4">
                <p className="text-green-400 text-sm font-semibold">
                  30-50% περισσότερα clicks χωρίς πληρωμένη διαφήμιση
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-white font-bold mb-4">
                Ταχύτητα &lt;2.5 δευτ.
              </h3>
              <p className="text-white/60 text-sm mb-4">
                CDN σε 70+ χώρες. Optimized images (AVIF). Lazy loading.
                Server-side rendering.
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm font-semibold">
                  1 δεύτερο καθυστέρηση = -7% conversion (Amazon data)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== COST ====== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DC2626] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              08 — Κοστολόγηση
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-16">
              Ανάλυση Κόστους
            </h2>
          </motion.div>

          {/* Comparison bars */}
          <div className="space-y-3 mb-12">
            {[
              ["Enterprise Agency", "€60K–120K", "100%", "bg-[#991B1B]"],
              ["Mid-Range Agency", "€30K–60K", "55%", "bg-[#DC2626]"],
              ["Senior Freelancer (GR)", "€28K–45K", "42%", "bg-[#D97706]"],
              ["International (EU)", "€56K–90K", "75%", "bg-[#7C3AED]"],
            ].map(([name, price, width, bg]) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{name}</span>
                  <span className="font-bold">{price}</span>
                </div>
                <div className="h-7 bg-gray-100 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: width as string }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-lg ${bg}`}
                  />
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-[#059669]">
                  ✓ Η Πρόταση Μας
                </span>
                <span className="font-black text-[#059669]">€15.000</span>
              </div>
              <div className="h-7 bg-gray-100 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "16%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-lg bg-[#059669] flex items-center pl-2"
                >
                  <span className="text-white text-xs font-bold">✓</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Price cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-gray-200 p-8"
            >
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                Αγορά
              </span>
              <p className="text-5xl font-black text-gray-300 line-through decoration-[#DC2626] mt-4 mb-2">
                €36.000+
              </p>
              <p className="text-sm text-gray-400">
                Τι θα πληρώνατε αλλού (720-935 ώρες × €50-60/ώρα)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-[#DC2626] bg-[#0F1419] p-8 text-white relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-xs font-bold bg-[#DC2626] text-white px-3 py-1 rounded-full tracking-widest uppercase">
                Πρόταση
              </span>
              <p className="text-5xl font-black text-[#DC2626] mt-4 mb-4">
                €15.000
              </p>
              <div className="space-y-2">
                {[
                  "Custom design & development",
                  "AI chatbot, recs, pricing",
                  "AR & 360° & Video",
                  "Full ERP integration",
                  "6 γλώσσες & multi-currency",
                  "20+ αυτοματισμοί",
                  "Landing page builder & templates",
                  "SEO, Analytics, Merchant Feed",
                  "30 ημέρες post-launch support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Savings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 text-center mb-12"
          >
            <p className="text-3xl font-black text-[#059669]">
              Εξοικονόμηση: €21.000–41.000+
            </p>
            <p className="text-sm text-green-600">
              σε σχέση με τιμές αγοράς για αντίστοιχο scope
            </p>
          </motion.div>

          {/* ROI */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              ["+€1.500", "/μήνα", "Ανάκτηση καλαθιών"],
              ["+€2.000", "/μήνα", "AI upsell & cross-sell"],
              ["+€1.000", "/μήνα", "Νέες αγορές (Βαλκάνια)"],
            ].map(([num, period, label]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200"
              >
                <p className="text-2xl font-black text-[#DC2626]">
                  {num}
                  <span className="text-sm font-medium text-gray-400">
                    {period}
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#065F46] to-[#059669] rounded-2xl p-8 text-center text-white"
          >
            <p className="text-5xl font-black mb-2">3–4 μήνες</p>
            <p className="text-sm opacity-80">
              Η επένδυση &laquo;βγαίνει&raquo; σε λιγότερο από ένα τετράμηνο
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== TIMELINE ====== */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DC2626] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              09 — Χρονοδιάγραμμα
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-16">
              Πλάνο Υλοποίησης
            </h2>
          </motion.div>

          <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
            {[
              {
                phase: "Phase 1",
                weeks: "Εβδομάδες 1-4",
                title: "Core E-shop & ERP",
                items: [
                  "Custom design & UI",
                  "Database & αρχιτεκτονική",
                  "Σύνδεση Entersoft",
                  "Σελίδες προϊόντων & κατηγοριών",
                  "Καλάθι & checkout",
                  "Login (Google, Facebook, Apple)",
                ],
              },
              {
                phase: "Phase 2",
                weeks: "Εβδομάδες 5-8",
                title: "Payments, Garage, i18n",
                items: [
                  "Πληρωμές (Apple Pay, Klarna κλπ)",
                  '"Η Μηχανή μου" & συμβατότητα',
                  "6 γλώσσες & νομίσματα",
                  "Reviews & Wishlist",
                  "SEO, Schema, Merchant Feed",
                ],
              },
              {
                phase: "Phase 3",
                weeks: "Εβδομάδες 9-12",
                title: "AI & Automations",
                items: [
                  "AI Chatbot",
                  "Recommendations engine",
                  "AI price negotiation",
                  "20+ email αυτοματισμοί",
                  "Referral & loyalty",
                  "Analytics (PostHog, GA4)",
                ],
              },
              {
                phase: "Phase 4",
                weeks: "Εβδομάδες 13-16",
                title: "AR, Video & Launch",
                items: [
                  "AR (20-30 premium SKUs)",
                  "360° & video",
                  "Competitor pricing",
                  "Voice search",
                  "Security audit",
                  "Go-live & monitoring",
                ],
              },
            ].map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#DC2626] border-4 border-white shadow" />
                <span className="text-xs font-bold text-[#DC2626] tracking-widest uppercase">
                  {p.phase} — {p.weeks}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-3">{p.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {p.items.map((item) => (
                    <span
                      key={item}
                      className="bg-white px-3 py-1.5 rounded-lg text-sm text-gray-600 border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment terms */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              ["30%", "€4.500", "Προκαταβολή"],
              ["30%", "€4.500", "Phase 2"],
              ["20%", "€3.000", "Phase 3"],
              ["20%", "€3.000", "Go-Live"],
            ].map(([pct, amount, label]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-5 text-center"
              >
                <p className="text-2xl font-black text-[#DC2626]">{pct}</p>
                <p className="text-lg font-bold">{amount}</p>
                <p className="text-xs text-gray-400 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <section className="bg-[#0F1419] py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ας χτίσουμε το μέλλον του MotoMarket.
          </h2>
          <p className="text-gray-400 mb-8">
            Ένα e-shop που δεν απλά πουλάει — αλλά γνωρίζει κάθε rider, δουλεύει
            24/7 χωρίς υπάλληλο, και μεγαλώνει μόνο του.
          </p>
          <div className="w-12 h-px bg-[#DC2626] mx-auto mb-8" />
          <p className="text-[#DC2626] font-bold text-lg">
            Alexandros Keramopoulos
          </p>
          <p className="text-gray-500 text-sm">Gen2 Digital</p>
          <p className="text-gray-600 text-xs mt-4">Απρίλιος 2026</p>
        </motion.div>
      </section>
    </main>
  );
}
