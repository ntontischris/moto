"use client";

import { FadeIn } from "@/components/motion-wrapper";

const chatMessages = [
  {
    role: "bot" as const,
    text: "Γεια! Πώς μπορώ να βοηθήσω;",
  },
  {
    role: "user" as const,
    text: "Θέλω κράνος touring για τη GS μου, μέχρι €400",
  },
  {
    role: "bot" as const,
    text: "Με βάση τη BMW R 1250 GS σου, προτείνω:",
    products: [
      { name: "AGV K6 S", price: "€349", stars: 4 },
      { name: "HJC RPHA 71", price: "€389", stars: 4 },
      { name: "Shoei GT-Air 3", price: "€549", stars: 5, overBudget: true },
    ],
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-xs">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

function ChatMessage({ role, text, products }: (typeof chatMessages)[number]) {
  const isBot = role === "bot";
  return (
    <div className={`flex gap-2.5 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-moto-purple/20 border border-moto-purple/40 flex items-center justify-center text-sm shrink-0 mt-0.5">
          🤖
        </div>
      )}
      <div
        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm"
            : "bg-moto-purple/30 border border-moto-purple/50 text-white rounded-tr-sm"
        }`}
      >
        <p>{text}</p>
        {products && (
          <ul className="mt-2 space-y-1.5">
            {products.map((p, i) => (
              <li key={p.name} className="flex items-baseline gap-2">
                <span className="text-moto-purple font-semibold text-xs w-3">
                  {i + 1}.
                </span>
                <span>
                  <span className="font-medium text-white">{p.name}</span>
                  {" — "}
                  <span className="text-moto-green font-semibold">
                    {p.price}
                  </span>{" "}
                  <StarRating count={p.stars} />
                  {p.overBudget && (
                    <span className="ml-1 text-[10px] text-yellow-400/80 italic">
                      (πάνω από budget αλλά #1)
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {!isBot && (
        <div className="w-7 h-7 rounded-full bg-gray-600/40 border border-white/10 flex items-center justify-center text-sm shrink-0 mt-0.5">
          👤
        </div>
      )}
    </div>
  );
}

interface SmallCardProps {
  icon: string;
  title: string;
  problem: string;
  mechanic: string[];
  benefit: string;
  delay?: number;
}

function SmallCard({
  icon,
  title,
  problem,
  mechanic,
  benefit,
  delay = 0,
}: SmallCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex flex-col gap-4 hover:border-white/16 transition-colors">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-bold text-white leading-snug">{title}</h3>
        </div>

        <div className="rounded-lg bg-red-950/30 border border-red-900/30 px-3.5 py-2.5">
          <p className="text-xs font-semibold text-moto-red uppercase tracking-wider mb-1">
            Πρόβλημα
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">{problem}</p>
        </div>

        <ul className="space-y-1.5 flex-1">
          {mechanic.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-sm text-gray-300 leading-relaxed"
            >
              <span className="text-moto-purple mt-0.5 shrink-0">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-lg bg-moto-green/10 border border-moto-green/25 px-3.5 py-2.5">
          <p className="text-xs font-semibold text-moto-green uppercase tracking-wider mb-0.5">
            Αποτέλεσμα
          </p>
          <p className="text-sm text-white font-medium">{benefit}</p>
        </div>
      </div>
    </FadeIn>
  );
}

const smallCards: SmallCardProps[] = [
  {
    icon: "🤝",
    title: "AI Price Negotiation",
    problem:
      'Ο πελάτης θέλει το κράνο €349 αλλά κάνει κλικ "Κάνε προσφορά" και προσφέρει €280. Χωρίς σύστημα: χάνεται η πώληση.',
    mechanic: [
      "Ελέγχει κόστος προμήθειας & περιθώριο κέρδους",
      "Ελέγχει απόθεμα & ζήτηση",
      "Ελέγχει ιστορικό πελάτη & loyalty points",
      "Αποδέχεται, αντιπροτείνει ή αρνείται αυτόματα",
      "Δημιουργεί μοναδικό coupon αυτόματα",
    ],
    benefit: "Κλείνει πωλήσεις χωρίς ανθρώπινη παρέμβαση",
  },
  {
    icon: "🎯",
    title: "Smart Recommendations",
    problem:
      "Ο κάθε πελάτης βλέπει τα ίδια προϊόντα. Αποτέλεσμα: χαμηλή μετατροπή, μικρές παραγγελίες.",
    mechanic: [
      "Ανάλυση μοτοσυκλέτας πελάτη",
      "Τύπος αναβάτη (touring, sport, urban)",
      "Ιστορικό αγορών & αναζητήσεων",
      "Σύγκριση με παρόμοιους αναβάτες",
      '"Αγόρασες κράνο — έχεις pinlock;"',
    ],
    benefit: "+15–30% μέση αξία παραγγελίας",
  },
];

export function AIFeatures() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-moto-dark overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-moto-purple/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn delay={0} direction="up">
          <div className="mb-16">
            <p className="text-moto-red text-xs font-bold uppercase tracking-[0.2em] mb-4">
              03 — ΤΕΧΝΗΤΗ ΝΟΗΜΟΣΥΝΗ
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              AI —{" "}
              <span className="text-moto-purple">
                Ο &ldquo;υπάλληλος&rdquo;
              </span>{" "}
              που δεν κοιμάται ποτέ
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Τέσσερα AI features με τεχνολογία OpenAI που δουλεύουν 24/7,
              αυξάνουν τις πωλήσεις και εξοικονομούν εκατοντάδες ώρες εργασίας
              το μήνα — χωρίς να χρειαστείτε να καταλαβαίνετε πώς λειτουργούν.
            </p>
          </div>
        </FadeIn>

        {/* AI Chatbot — full-width highlight card */}
        <FadeIn delay={0.1} direction="up">
          <div className="relative rounded-3xl p-px mb-8 bg-gradient-to-br from-moto-purple/40 via-transparent to-moto-purple/10">
            <div className="rounded-3xl bg-[#0d1117] p-8 md:p-10">
              {/* Card header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-moto-purple/15 border border-moto-purple/30 rounded-full px-3 py-1 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-moto-purple animate-pulse" />
                    <span className="text-moto-purple text-xs font-semibold tracking-wide uppercase">
                      AI-Powered — OpenAI GPT-4o
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    AI Chatbot — Εξυπηρέτηση 24/7
                  </h3>
                </div>
              </div>

              {/* Problem / Solution side by side on desktop */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-2xl bg-red-950/30 border border-red-900/30 p-5">
                  <p className="text-xs font-bold text-moto-red uppercase tracking-wider mb-3">
                    ❌ Χωρίς AI
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Πελάτης έχει ερώτηση στις{" "}
                    <span className="text-white font-semibold">
                      11 το βράδυ
                    </span>
                    . Κανείς δεν απαντάει. Φεύγει στον ανταγωνισμό.{" "}
                    <span className="text-moto-red font-semibold">
                      Πώληση χαμένη.
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl bg-moto-purple/10 border border-moto-purple/25 p-5">
                  <p className="text-xs font-bold text-moto-purple uppercase tracking-wider mb-3">
                    ✅ Με AI
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Το AI γνωρίζει{" "}
                    <span className="text-white font-semibold">
                      10.000+ προϊόντα
                    </span>
                    — specs, τιμές, συμβατότητα, μεγέθη, reviews.{" "}
                    <span className="text-white font-semibold">
                      Γνωρίζει τη μοτοσυκλέτα του πελάτη
                    </span>{" "}
                    και απαντάει άμεσα.
                  </p>
                </div>
              </div>

              {/* Mock chat widget */}
              <div className="rounded-2xl bg-[#0a0d12] border border-white/8 overflow-hidden mb-6">
                {/* Chat header bar */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border-b border-white/8">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <span className="w-2 h-2 rounded-full bg-moto-green animate-pulse" />
                    <span className="text-xs text-gray-400 font-medium">
                      MotoMarket AI — Online τώρα
                    </span>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-4">
                  {chatMessages.map((msg, i) => (
                    <ChatMessage key={i} {...msg} />
                  ))}

                  {/* Typing indicator */}
                  <div className="flex gap-2.5 justify-start">
                    <div className="w-7 h-7 rounded-full bg-moto-purple/20 border border-moto-purple/40 flex items-center justify-center text-sm shrink-0">
                      🤖
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="px-4 py-3 bg-white/[0.02] border-t border-white/8 flex gap-3 items-center">
                  <div className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-gray-500">
                    Γράψτε το μήνυμά σας...
                  </div>
                  <button className="w-9 h-9 rounded-xl bg-moto-purple/80 flex items-center justify-center shrink-0 hover:bg-moto-purple transition-colors">
                    <svg
                      className="w-4 h-4 text-white rotate-90"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Result callout */}
              <div className="inline-flex items-center gap-3 rounded-xl bg-moto-green/10 border border-moto-green/30 px-5 py-3">
                <span className="text-moto-green text-lg">✓</span>
                <p className="text-moto-green font-semibold">
                  Πώληση που αλλιώς θα χανόταν
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Two small cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {smallCards.map((card, i) => (
            <SmallCard key={card.title} {...card} delay={0.1 + i * 0.08} />
          ))}
        </div>

        {/* Auto SEO — full-width */}
        <FadeIn delay={0.25} direction="up">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 hover:border-white/16 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">🌐</span>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    Auto SEO Content Generation
                  </h3>
                </div>

                <div className="rounded-lg bg-red-950/30 border border-red-900/30 px-4 py-3 mb-4">
                  <p className="text-xs font-semibold text-moto-red uppercase tracking-wider mb-1">
                    Πρόβλημα
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    10.000+ προϊόντα χρειάζονται τίτλους, περιγραφές και meta
                    tags σε{" "}
                    <span className="text-white font-medium">6 γλώσσες</span>.
                    Αδύνατο να γίνει χειροκίνητα.
                  </p>
                </div>

                <ul className="space-y-2">
                  {[
                    "Νέο προϊόν μπαίνει στο ERP",
                    "AI παράγει τίτλο, περιγραφή, meta tags, alt text",
                    "Σε 6 γλώσσες αυτόματα (GR, EN, DE, FR, IT, ES)",
                    "SEO-optimized για κάθε αγορά",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-gray-300 leading-relaxed"
                    >
                      <span className="text-moto-purple mt-0.5 shrink-0">
                        ▸
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — stat callout */}
              <div className="lg:w-72 shrink-0">
                <div className="rounded-2xl bg-gradient-to-br from-moto-purple/15 to-transparent border border-moto-purple/25 p-6 text-center">
                  <p className="text-5xl font-black text-white mb-2">
                    10.000
                    <span className="text-moto-purple">+</span>
                  </p>
                  <p className="text-sm text-gray-400 mb-5">
                    σελίδες προϊόντων
                  </p>
                  <div className="w-full h-px bg-white/8 mb-5" />
                  <div className="rounded-xl bg-moto-green/10 border border-moto-green/25 px-4 py-3">
                    <p className="text-xs font-semibold text-moto-green uppercase tracking-wider mb-1">
                      Αποτέλεσμα
                    </p>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      10.000+ σελίδες SEO-optimized χωρίς να γράψετε λέξη
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
