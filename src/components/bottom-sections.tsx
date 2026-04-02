"use client";

import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion-wrapper";

// ─── Section 1: SEO & Performance ────────────────────────────────────────────

export function SEOPerformance() {
  return (
    <section className="bg-moto-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-moto-red text-sm font-mono tracking-widest uppercase mb-3">
            06 — SEO & PERFORMANCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Να σας βρίσκουν χωρίς διαφήμιση
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Rich Snippets */}
          <StaggerItem>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-moto-red/15 flex items-center justify-center text-xl">
                  ⭐
                </div>
                <h3 className="text-white font-semibold text-lg">
                  Rich Snippets
                </h3>
              </div>

              {/* Mock Google Search Result */}
              <div className="bg-white rounded-xl p-4 mb-5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-[#4285F4]" />
                  <span className="text-[#1a0dab] text-sm font-medium">
                    motomarket.gr › helmets › shark-evo-gt
                  </span>
                </div>
                <p className="text-[#1a0dab] text-base font-medium mb-1">
                  Shark Evo GT — Κράνος Touring Modular | MotoMarket
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[#e7711b] text-sm font-medium">
                    ★★★★☆
                  </span>
                  <span className="text-[#70757a] text-xs">
                    4.2 (47 reviews)
                  </span>
                  <span className="text-[#70757a] text-xs">—</span>
                  <span className="text-[#188038] text-xs font-semibold">
                    €349.00
                  </span>
                  <span className="bg-[#188038] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Σε απόθεμα
                  </span>
                </div>
                <p className="text-[#4d5156] text-xs mt-1 leading-relaxed">
                  Ανακαλύψτε το Shark Evo GT, ιδανικό για touring. Πλήρης
                  προστασία, ελαφρύ σχεδιασμός, άνεση πολλών ωρών…
                </p>
              </div>

              <p className="text-white/60 text-sm">
                <span className="text-[#34d399] font-semibold">
                  30-50% περισσότερα clicks
                </span>{" "}
                χωρίς πληρωμένη διαφήμιση
              </p>
            </div>
          </StaggerItem>

          {/* Card 2: Speed <2.5s */}
          <StaggerItem>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#059669]/15 flex items-center justify-center text-xl">
                  ⚡
                </div>
                <h3 className="text-white font-semibold text-lg">
                  Speed &lt;2.5s
                </h3>
              </div>

              <div className="space-y-4 mb-5">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/60">
                      LCP (Largest Contentful Paint)
                    </span>
                    <span className="text-moto-green font-mono font-bold">
                      &lt;2.5s ✓
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-moto-green rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/60">
                      FID (First Input Delay)
                    </span>
                    <span className="text-moto-green font-mono font-bold">
                      &lt;100ms ✓
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[8%] bg-moto-green rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/60">
                      CLS (Cumulative Layout Shift)
                    </span>
                    <span className="text-moto-green font-mono font-bold">
                      0.05 ✓
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[5%] bg-moto-green rounded-full" />
                  </div>
                </div>
              </div>

              <p className="text-white/50 text-xs mb-3">
                CDN σε 70+ χώρες παγκοσμίως
              </p>
              <p className="text-white/60 text-sm">
                <span className="text-amber-400 font-semibold">
                  1 δευτερόλεπτο καθυστέρηση
                </span>{" "}
                = -7% conversion
              </p>
            </div>
          </StaggerItem>

          {/* Card 3: Google Shopping */}
          <StaggerItem>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#D97706]/15 flex items-center justify-center text-xl">
                  🛍️
                </div>
                <h3 className="text-white font-semibold text-lg">
                  Google Shopping
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {["Κράνος Shark", "Μπότες TCX", "Γάντια Alpinestars"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg p-2 text-center shadow"
                    >
                      <div className="w-full h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-1 flex items-center justify-center text-lg">
                        🏍️
                      </div>
                      <p className="text-[#1a0dab] text-[9px] font-medium leading-tight">
                        {item}
                      </p>
                      <p className="text-[#188038] text-[10px] font-bold mt-0.5">
                        €{[349, 189, 79][i]}
                      </p>
                      <p className="text-[#70757a] text-[8px]">MotoMarket</p>
                    </div>
                  ),
                )}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="bg-moto-red/20 text-moto-red text-xs font-mono px-2 py-1 rounded-lg">
                  10.000+ products
                </span>
                <span className="bg-white/10 text-white/60 text-xs px-2 py-1 rounded-lg">
                  Daily refresh
                </span>
              </div>
              <p className="text-white/60 text-sm">
                <span className="text-moto-green font-semibold">
                  Plug & play
                </span>{" "}
                για Google Shopping campaigns
              </p>
            </div>
          </StaggerItem>

          {/* Card 4: AI Search Ready */}
          <StaggerItem>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 flex items-center justify-center text-xl">
                  🤖
                </div>
                <h3 className="text-white font-semibold text-lg">
                  AI Search Ready
                </h3>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  {
                    icon: "🔍",
                    label: "Google SGE",
                    color: "bg-[#4285F4]/20 text-[#93c5fd]",
                  },
                  {
                    icon: "🔷",
                    label: "Bing AI",
                    color: "bg-[#00a2ed]/20 text-[#7dd3fc]",
                  },
                  {
                    icon: "💬",
                    label: "ChatGPT Search",
                    color: "bg-[#10a37f]/20 text-[#6ee7b7]",
                  },
                  {
                    icon: "🌐",
                    label: "Perplexity AI",
                    color: "bg-[#7C3AED]/20 text-[#c4b5fd]",
                  },
                ].map(({ icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${color}`}
                    >
                      {icon} {label}
                    </span>
                    <span className="text-white/40 text-xs">
                      → structured data ✓
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-white/60 text-sm">
                <span className="text-[#c4b5fd] font-semibold">
                  Μελλοντική προστασία
                </span>{" "}
                — χρησιμοποιεί structured data για AI search engines
              </p>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}

// ─── Section: PWA — Progressive Web App for MotoMarket ───────────────────────

const pwaFeatures = [
  {
    icon: "📲",
    title: "Εγκατάσταση σαν Native App",
    desc: "Ο πελάτης πατάει «Προσθήκη στην αρχική οθόνη» και το MotoMarket ανοίγει σαν κανονική εφαρμογή — χωρίς App Store, χωρίς downloads.",
  },
  {
    icon: "📴",
    title: "Offline Mode",
    desc: "Ακόμα και χωρίς internet ο πελάτης βλέπει τα προϊόντα, το καλάθι του, τα αγαπημένα. Μόλις βρει δίκτυο, συγχρονίζεται αυτόματα.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    desc: "Ειδοποιήσεις για προσφορές, price drops, order updates — απευθείας στο κινητό, χωρίς email. Σαν native app.",
  },
  {
    icon: "⚡",
    title: "Instant Loading",
    desc: "Service workers + caching = η σελίδα φορτώνει σε milliseconds μετά την πρώτη επίσκεψη. Ταχύτερο από οποιοδήποτε native app.",
  },
  {
    icon: "🔄",
    title: "Auto Updates",
    desc: "Κάθε φορά που ανοίγει η εφαρμογή, ενημερώνεται αυτόματα. Χωρίς «Ενημέρωση app», χωρίς εγκρίσεις Apple/Google.",
  },
  {
    icon: "💾",
    title: "Χωρίς Κόστος App Store",
    desc: "Δεν χρειάζεται ξεχωριστό iOS/Android app. Ένα codebase, όλες οι πλατφόρμες. Εξοικονόμηση χιλιάδων ευρώ σε development & maintenance.",
  },
];

export function PWAFeatureSection() {
  return (
    <section className="bg-moto-dark py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-moto-red text-sm font-mono tracking-widest uppercase mb-3">
            07 — PROGRESSIVE WEB APP
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Το MotoMarket σαν <span className="text-moto-red">Native App</span>
          </h2>
          <p className="text-white/50 text-lg max-w-3xl leading-relaxed mb-16">
            Το e-shop θα είναι Progressive Web App — εγκαθίσταται στο κινητό ή
            τον υπολογιστή σαν κανονική εφαρμογή, δουλεύει offline, στέλνει push
            notifications. Χωρίς App Store, χωρίς ξεχωριστό κόστος, χωρίς
            συντήρηση δεύτερου codebase.
          </p>
        </FadeIn>

        {/* What is a PWA explainer */}
        <FadeIn delay={0.05}>
          <div className="bg-gradient-to-br from-moto-red/10 via-moto-red/5 to-transparent border border-moto-red/20 rounded-2xl p-6 md:p-8 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Τι είναι ένα PWA;
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Ένα{" "}
                  <span className="text-white font-semibold">
                    Progressive Web App
                  </span>{" "}
                  είναι ένα website που συμπεριφέρεται ακριβώς σαν native app.
                  Εγκαθίσταται στην αρχική οθόνη, ανοίγει full-screen, δουλεύει
                  offline, στέλνει push notifications — χωρίς App Store, χωρίς
                  εγκρίσεις Apple/Google, χωρίς ξεχωριστό κόστος συντήρησης.
                  Αντί να πληρώσετε €15.000-30.000 για ξεχωριστό mobile app, το
                  παίρνετε ενσωματωμένο στο e-shop.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🚫", label: "Χωρίς App Store", sub: "Άμεση πρόσβαση" },
                { icon: "📴", label: "Offline Mode", sub: "Δουλεύει παντού" },
                {
                  icon: "🔔",
                  label: "Push Notifications",
                  sub: "Σαν native app",
                },
                { icon: "🔄", label: "Auto Updates", sub: "Πάντα up-to-date" },
              ].map(({ icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
                >
                  <span className="text-2xl">{icon}</span>
                  <p className="text-white font-semibold text-xs mt-2">
                    {label}
                  </p>
                  <p className="text-white/40 text-[10px]">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Feature cards grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {pwaFeatures.map(({ icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-moto-red/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-moto-red/15 flex items-center justify-center text-xl">
                    {icon}
                  </div>
                  <h3 className="text-white font-semibold text-base">
                    {title}
                  </h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Bottom callout */}
        <FadeIn delay={0.15}>
          <div className="bg-moto-red/10 border border-moto-red/30 rounded-xl p-5 text-center">
            <p className="text-white font-bold text-base">
              Ένα e-shop + ένα mobile app σε ένα — χωρίς ξεχωριστό κόστος
              development ή συντήρησης
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section: AI SEO Web App (Gift) ──────────────────────────────────────────

const seoAppFeatures = [
  {
    icon: "🤖",
    title: "AI-Powered SEO Content",
    desc: "Περνάτε ένα προϊόν και το AI δημιουργεί αυτόματα: SEO τίτλο, meta description, περιγραφή προϊόντος, alt text εικόνων.",
  },
  {
    icon: "📋",
    title: "Custom SEO Προδιαγραφές",
    desc: "Ορίζετε τους κανόνες μία φορά: μήκος τίτλου, tone of voice, keywords, δομή περιγραφής. Το AI ακολουθεί πιστά τις οδηγίες σας.",
  },
  {
    icon: "🌐",
    title: "Πολυγλωσσικό",
    desc: "Δημιουργεί content σε όλες τις γλώσσες του e-shop με SEO-optimized μεταφράσεις — όχι απλά Google Translate.",
  },
  {
    icon: "📊",
    title: "Bulk Upload",
    desc: "Ανεβάστε δεκάδες προϊόντα μαζί μέσω CSV/Excel. Το AI δημιουργεί SEO content για όλα ταυτόχρονα — ώρες δουλειάς σε λεπτά.",
  },
];

export function AIProductAppSection() {
  return (
    <section className="bg-[#080c10] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <p className="text-amber-400 text-sm font-mono tracking-widest uppercase">
              ΔΩΡΟ
            </p>
            <span className="bg-amber-400/20 text-amber-400 text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider uppercase">
              ΠΕΡΙΛΑΜΒΑΝΕΤΑΙ ΔΩΡΕΑΝ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI SEO Product Upload{" "}
            <span className="text-amber-400">Web App</span>
          </h2>
          <p className="text-white/50 text-lg max-w-3xl leading-relaxed mb-16">
            Ξεχωριστή web εφαρμογή, ανεξάρτητη από το e-shop, για την
            επιχείρηση. Περνάτε τα προϊόντα σας και το AI φτιάχνει perfect SEO
            content αυτόματα — τίτλους, περιγραφές, meta tags, alt text, σύμφωνα
            με τις προδιαγραφές που εσείς ορίζετε. Χωρίς copywriter, χωρίς trial
            & error.
          </p>
        </FadeIn>

        {/* Feature cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {seoAppFeatures.map(({ icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-amber-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center text-xl">
                    {icon}
                  </div>
                  <h3 className="text-white font-semibold text-base">
                    {title}
                  </h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* How it works */}
        <FadeIn delay={0.1}>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
            <h3 className="text-white font-bold text-lg mb-6 text-center">
              Πώς δουλεύει
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {[
                { step: "1", label: "Ορίζετε SEO κανόνες", icon: "📋" },
                { step: "2", label: "Περνάτε τα προϊόντα", icon: "📦" },
                { step: "3", label: "AI δημιουργεί content", icon: "🤖" },
                { step: "4", label: "Perfect SEO σε κάθε προϊόν", icon: "🚀" },
              ].map(({ step, label, icon }, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-xl">
                      {icon}
                    </div>
                    <p className="text-white/70 text-xs text-center font-medium">
                      {label}
                    </p>
                  </div>
                  {i < 3 && (
                    <span className="text-white/20 text-xl hidden sm:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Bottom callout */}
        <FadeIn delay={0.15}>
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-5 text-center">
            <p className="text-amber-400 font-bold text-base">
              Περιλαμβάνεται δωρεάν μέσα στην προσφορά
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 2: Cost Analysis ─────────────────────────────────────────────────

const costRows = [
  { module: "UI/UX Design", hours: "80-100h", market: "€4.000-6.000" },
  { module: "Frontend", hours: "120-160h", market: "€6.000-9.600" },
  { module: "Backend & DB", hours: "60-80h", market: "€3.000-4.800" },
  { module: "ERP Entersoft", hours: "60-80h", market: "€3.000-4.800" },
  { module: "Search", hours: "30-40h", market: "€1.500-2.400" },
  { module: "Payments", hours: "40-50h", market: "€2.000-3.000" },
  { module: "AI Features", hours: "80-100h", market: "€4.000-6.000" },
  { module: "AR & 360° & Video", hours: "30-40h", market: "€1.500-2.400" },
  { module: "Multi-language", hours: "30-40h", market: "€1.500-2.400" },
  { module: "Automations", hours: "40-50h", market: "€2.000-3.000" },
  { module: "SEO & Analytics", hours: "20-30h", market: "€1.000-1.800" },
  { module: "Reviews/Referral", hours: "30-40h", market: "€1.500-2.400" },
  { module: "Testing", hours: "40-50h", market: "€2.000-3.000" },
  { module: "Deployment", hours: "20-25h", market: "€1.000-1.500" },
];

const comparisonBars = [
  {
    label: "Enterprise Agency",
    range: "€60K-120K",
    widthClass: "w-full",
    colorClass: "bg-red-900",
  },
  {
    label: "Mid Agency",
    range: "€30K-60K",
    widthClass: "w-[65%]",
    colorClass: "bg-moto-red",
  },
  {
    label: "Senior Freelancer GR",
    range: "€28K-45K",
    widthClass: "w-[50%]",
    colorClass: "bg-amber-500",
  },
  {
    label: "International EU",
    range: "€56K-90K",
    widthClass: "w-[80%]",
    colorClass: "bg-purple-600",
  },
  {
    label: "Our Proposal",
    range: "€16.000",
    widthClass: "w-[18%]",
    colorClass: "bg-moto-green",
  },
];

const includedItems = [
  "UI/UX Design σε Figma",
  "Next.js 15 + Tailwind v4",
  "ERP Entersoft integration",
  "AI Chatbot & Recommendations",
  "AR Try-On & 360° Viewer",
  "6 γλώσσες (i18n)",
  "20+ Automations (n8n)",
  "Voice Search",
  "Referral Program",
  "SEO & Analytics setup",
  "CI/CD & Deployment",
  "3 μήνες support",
  "Progressive Web App (PWA)",
  "ΔΩΡΟ: AI SEO Product Upload Web App",
];

const roiStats = [
  {
    value: "+€1.500/mo",
    label: "Cart Recovery",
    desc: "Αυτόματο abandoned cart",
  },
  {
    value: "+€2.000/mo",
    label: "AI Upsell",
    desc: "Personalized recommendations",
  },
  { value: "+€1.000/mo", label: "New Markets", desc: "6 γλώσσες, EU reach" },
];

export function CostAnalysis() {
  return (
    <section className="bg-[#080c10] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-moto-red text-sm font-mono tracking-widest uppercase mb-3">
            08 — ΚΟΣΤΟΛΟΓΗΣΗ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Ανάλυση Κόστους
          </h2>
        </FadeIn>

        {/* Cost Breakdown Table */}
        <FadeIn delay={0.1}>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-10">
            <div className="grid grid-cols-3 bg-white/10 px-6 py-3">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                Module
              </span>
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                Hours
              </span>
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                Market Price
              </span>
            </div>
            {costRows.map((row, i) => (
              <div
                key={row.module}
                className={`grid grid-cols-3 px-6 py-3 ${i % 2 === 0 ? "bg-white/[0.02]" : ""} border-t border-white/5`}
              >
                <span className="text-white/80 text-sm">{row.module}</span>
                <span className="text-white/50 text-sm font-mono">
                  {row.hours}
                </span>
                <span className="text-white/60 text-sm font-mono">
                  {row.market}
                </span>
              </div>
            ))}
            <div className="grid grid-cols-3 px-6 py-4 bg-white/10 border-t border-white/20">
              <span className="text-white font-bold text-sm uppercase tracking-wide">
                TOTAL
              </span>
              <span className="text-moto-red font-bold text-sm font-mono">
                680-885h
              </span>
              <span className="text-moto-red font-bold text-sm font-mono">
                €34.000-53.000
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Comparison Bars */}
        <FadeIn delay={0.2}>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
            <h3 className="text-white font-semibold text-lg mb-6">
              Σύγκριση Αγοράς
            </h3>
            <div className="space-y-4">
              {comparisonBars.map(
                ({ label, range, widthClass, colorClass }) => (
                  <div key={label}>
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className={`text-sm font-medium ${label === "Our Proposal" ? "text-moto-green" : "text-white/70"}`}
                      >
                        {label === "Our Proposal" ? "✓ " : ""}
                        {label}
                      </span>
                      <span
                        className={`text-sm font-mono font-bold ${label === "Our Proposal" ? "text-moto-green" : "text-white/50"}`}
                      >
                        {range}
                      </span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${widthClass} ${colorClass} rounded-full transition-all duration-700`}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </FadeIn>

        {/* Buy vs Proposal Cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StaggerItem>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
              <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-2">
                ΚΑΝΟΝΙΚΗ ΤΙΜΗ
              </p>
              <p className="text-white/30 text-xs mb-3">
                Τι θα πληρώνατε αλλού
              </p>
              <p className="text-4xl font-bold line-through text-white/20 mb-1">
                €40.000
              </p>
              <p className="text-white/40 text-sm">
                Μέση τιμή αγοράς για ισοδύναμο project
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-moto-dark border border-moto-red/30 rounded-2xl p-6 h-full relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-moto-red text-white text-xs font-black px-3 py-1.5 rounded-full tracking-wider uppercase animate-pulse">
                -60% ΕΚΠΤΩΣΗ
              </div>
              <p className="text-moto-red text-xs font-mono uppercase tracking-wider mb-2">
                ΑΠΟΚΛΕΙΣΤΙΚΗ ΠΡΟΣΦΟΡΑ
              </p>
              <p className="text-white/50 text-xs mb-1">
                Αρχική τιμή: <span className="line-through">€40.000</span>
              </p>
              <p className="text-5xl font-black text-moto-red mb-4">€16.000</p>
              <ul className="space-y-1.5">
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 text-sm ${item.startsWith("ΔΩΡΟ") ? "text-amber-400 font-semibold" : "text-white/70"}`}
                  >
                    <span
                      className={`text-xs ${item.startsWith("ΔΩΡΟ") ? "text-amber-400" : "text-moto-green"}`}
                    >
                      {item.startsWith("ΔΩΡΟ") ? "🎁" : "✓"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerChildren>

        {/* Savings Banner */}
        <FadeIn delay={0.1}>
          <div className="bg-moto-green/10 border border-moto-green/30 rounded-2xl p-5 text-center mb-12">
            <p className="text-moto-green font-bold text-2xl">
              Εξοικονόμηση: €24.000+ (60% έκπτωση)
            </p>
            <p className="text-white/40 text-sm mt-1">
              + PWA e-shop + δώρο AI SEO Web App
            </p>
          </div>
        </FadeIn>

        {/* ROI Section */}
        <FadeIn delay={0.15}>
          <h3 className="text-white font-semibold text-xl mb-6 text-center">
            ROI — Απόσβεση Επένδυσης
          </h3>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {roiStats.map(({ value, label, desc }) => (
            <StaggerItem key={label}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <p className="text-moto-green font-bold text-2xl mb-1">
                  {value}
                </p>
                <p className="text-white font-semibold text-sm mb-1">{label}</p>
                <p className="text-white/40 text-xs">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2}>
          <div className="bg-moto-green/10 border border-moto-green/40 rounded-2xl p-6 text-center">
            <p className="text-white/60 text-sm mb-2">
              Εκτιμώμενη απόσβεση επένδυσης
            </p>
            <p className="text-moto-green font-bold text-5xl mb-2">3-4 μήνες</p>
            <p className="text-white/40 text-xs">
              Βάσει μέσων αποτελεσμάτων παρόμοιων e-shop implementations
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Section 3: Timeline ──────────────────────────────────────────────────────

const phases = [
  {
    label: "Phase 1",
    weeks: "Weeks 1-4",
    title: "Core E-shop & ERP",
    items: [
      "UI/UX Design σε Figma (all screens)",
      "Database schema & API architecture",
      "ERP Entersoft sync (products, stock, orders)",
      "Product catalog με 10K+ SKUs",
      "Cart, checkout, guest & auth flow",
      "Admin dashboard βασικό",
    ],
  },
  {
    label: "Phase 2",
    weeks: "Weeks 5-8",
    title: "Payments, Garage & i18n",
    items: [
      "Stripe, Viva Wallet, PayPal, αντικαταβολή",
      "Bike Compatibility Garage feature",
      "6 γλώσσες — i18n (GR, EN, DE, IT, FR, ES)",
      "Reviews & ratings system",
      "On-page SEO & sitemap automation",
      "Rich Snippets & Google Shopping feed",
    ],
  },
  {
    label: "Phase 3",
    weeks: "Weeks 9-12",
    title: "AI & Automations",
    items: [
      "AI Chatbot με product knowledge base",
      "Personalized recommendations engine",
      "AI price negotiation module",
      "20+ n8n automations (email, SMS, alerts)",
      "Referral & loyalty program",
      "Analytics dashboard (GA4 + custom)",
    ],
  },
  {
    label: "Phase 4",
    weeks: "Weeks 13-16",
    title: "AR, Video & Launch",
    items: [
      "AR Try-On για κράνη & εξοπλισμό",
      "360° product viewer",
      "Video integration (unboxing, reviews)",
      "Competitor pricing tracker",
      "Voice search optimization",
      "Security audit, load testing & launch",
    ],
  },
];

const paymentTerms = [
  { pct: "30%", amount: "€4.800", label: "Έναρξη", sub: "Signing & kickoff" },
  { pct: "30%", amount: "€4.800", label: "Phase 2", sub: "Παράδοση Phase 2" },
  { pct: "20%", amount: "€3.200", label: "Phase 3", sub: "Παράδοση Phase 3" },
  { pct: "20%", amount: "€3.200", label: "Launch", sub: "Go-live" },
];

export function Timeline() {
  return (
    <section className="bg-moto-dark py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-moto-red text-sm font-mono tracking-widest uppercase mb-3">
            10 — ΧΡΟΝΟΔΙΑΓΡΑΜΜΑ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Πλάνο Υλοποίησης
          </h2>
        </FadeIn>

        {/* Vertical Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

          <StaggerChildren className="space-y-10">
            {phases.map(({ label, weeks, title, items }) => (
              <StaggerItem key={label}>
                <div className="flex gap-8">
                  {/* Dot */}
                  <div className="flex-shrink-0 w-10 flex justify-center pt-1">
                    <div className="w-4 h-4 rounded-full bg-moto-red border-4 border-moto-dark ring-2 ring-moto-red/40" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-moto-red/20 text-moto-red text-xs font-mono font-bold px-3 py-1 rounded-full">
                        {label}
                      </span>
                      <span className="text-white/40 text-xs font-mono">
                        {weeks}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-4">
                      {title}
                    </h3>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-white/60"
                        >
                          <span className="text-moto-red mt-0.5 text-xs flex-shrink-0">
                            ▸
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Payment Terms */}
        <FadeIn delay={0.1}>
          <h3 className="text-white font-semibold text-xl mb-6 text-center">
            Όροι Πληρωμής
          </h3>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paymentTerms.map(({ pct, amount, label, sub }) => (
            <StaggerItem key={label}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <p className="text-moto-red font-bold text-3xl mb-1">{pct}</p>
                <p className="text-white font-semibold text-lg mb-1">
                  {amount}
                </p>
                <p className="text-white/70 text-sm font-medium mb-1">
                  {label}
                </p>
                <p className="text-white/30 text-xs">{sub}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ─── Section 4: Footer ────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="bg-moto-dark border-t border-white/10 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="w-16 h-1 bg-moto-red mx-auto mb-10 rounded-full" />

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Ας χτίσουμε το μέλλον
            <br />
            <span className="text-moto-red">του MotoMarket.</span>
          </h2>

          <p className="text-white/50 text-lg max-w-xl mx-auto mb-16 leading-relaxed">
            Ένα e-shop που πουλάει 24/7, βρίσκεται στο Google χωρίς διαφήμιση,
            εξυπηρετεί σε 6 γλώσσες και μεγαλώνει με την επιχείρησή σας.
          </p>

          <div className="h-px bg-white/10 mb-10" />

          <p className="text-white/30 text-sm font-mono">
            Alexandros Keramopoulos / Gen2 Digital / Απρίλιος 2026
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
