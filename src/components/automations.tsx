"use client";

import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion-wrapper";

interface AutomationCard {
  icon: string;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
}

const automationCards: AutomationCard[] = [
  {
    icon: "👋",
    title: "Welcome Email Sequence",
    problem: "Ο νέος πελάτης εγγράφεται και... τίποτα.",
    solution:
      "Αυτόματη ακολουθία 3 βημάτων: Καλωσόρισμα → Κουπόνι 10% → Quiz για τον τύπο αναβάτη.",
    benefit: "Μετατρέπει νέους χρήστες σε αγοραστές",
  },
  {
    icon: "💸",
    title: "Price Drop Alert",
    problem: "Ο πελάτης φεύγει γιατί το προϊόν είναι ακριβό αυτή τη στιγμή.",
    solution: "Αυτόματο email μόλις η τιμή του προϊόντος που είδε πέσει.",
    benefit: "Επαναφέρει χαμένους πελάτες",
  },
  {
    icon: "📦",
    title: "Order Status Updates",
    problem: "Χειροκίνητες ενημερώσεις για κάθε παραγγελία — χρόνος και λάθη.",
    solution:
      "Αυτόματα emails σε κάθε στάδιο: Παραγγελθέν → Αποστολή → Παραδόθηκε.",
    benefit: "Μηδέν κλήσεις «πού είναι η παραγγελία μου;»",
  },
  {
    icon: "⭐",
    title: "Review Request",
    problem: "Ελάχιστες αξιολογήσεις — οι νέοι πελάτες δεν εμπιστεύονται.",
    solution:
      "Αυτόματο email 7 μέρες μετά την παράδοση με σύνδεσμο αξιολόγησης.",
    benefit: "Περισσότερα reviews = εμπιστοσύνη = πωλήσεις",
  },
  {
    icon: "🔄",
    title: "Win-Back Campaign",
    problem: "Ανενεργοί πελάτες ξεχνιούνται — χαμένα έσοδα.",
    solution:
      "Αυτόματο email μετά από 90 μέρες αδράνειας με έκπτωση που κλιμακώνεται.",
    benefit: "Επαναενεργοποιεί υπάρχουσα πελατεία",
  },
  {
    icon: "🤖",
    title: "Competitor Pricing",
    problem: "Χειροκίνητος έλεγχος ανταγωνιστικών τιμών κάθε μέρα.",
    solution: "Αυτόματο daily scan + AI προσαρμογή τιμών βάσει ανταγωνισμού.",
    benefit: "Πάντα ανταγωνιστικός χωρίς χειροκίνητη εργασία",
  },
  {
    icon: "🛍️",
    title: "Google Shopping Feed",
    problem: "Χειροκίνητη ενημέρωση XML feed για χιλιάδες προϊόντα.",
    solution: "Αυτόματη ημερήσια δημιουργία XML για 10.000+ προϊόντα.",
    benefit: "Τα προϊόντα εμφανίζονται αυτόματα στο Google Shopping",
  },
  {
    icon: "🎂",
    title: "Birthday Offers",
    problem: "Καμία εξατομικευμένη επικοινωνία στις σημαντικές μέρες.",
    solution: "Αυτόματο προσωπικό κουπόνι στα γενέθλια κάθε πελάτη.",
    benefit: "Boost πωλήσεων σε key dates",
  },
];

function BenefitBadge({ text }: { text: string }) {
  return (
    <div className="mt-auto pt-3">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-moto-green/10 px-3 py-1.5 text-xs font-semibold text-moto-green">
        <span className="h-1.5 w-1.5 rounded-full bg-moto-green" />
        {text}
      </span>
    </div>
  );
}

function AutomationCardItem({ card }: { card: AutomationCard }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">{card.icon}</span>
        <h3 className="text-base font-bold text-moto-dark">{card.title}</h3>
      </div>

      <div className="mb-3 rounded-xl bg-red-50 p-3">
        <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-moto-red">
          Τι γίνεται σήμερα
        </p>
        <p className="text-sm text-gray-600">{card.problem}</p>
      </div>

      <div className="mb-3 rounded-xl bg-blue-50 p-3">
        <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-moto-blue">
          Τι θα γίνεται
        </p>
        <p className="text-sm text-gray-700">{card.solution}</p>
      </div>

      <BenefitBadge text={card.benefit} />
    </div>
  );
}

function AbandonedCartHighlight() {
  return (
    <div className="mb-10 rounded-3xl border border-red-200 bg-red-50/60 p-8 md:p-10">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-3xl">🛒</span>
        <span className="rounded-full bg-moto-red px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
          Μεγαλύτερη Ευκαιρία
        </span>
      </div>

      <h3 className="mb-1 text-2xl font-extrabold text-moto-dark md:text-3xl">
        Ανάκτηση Εγκαταλελειμμένων Καλαθιών
      </h3>

      <p className="mb-6 text-base text-gray-600">
        <span className="font-semibold text-moto-red">70% των πελατών</span>{" "}
        βάζουν προϊόντα στο καλάθι αλλά δεν ολοκληρώνουν την αγορά. Αυτός ο
        αυτοματισμός τους φέρνει πίσω.
      </p>

      {/* 3-step flow */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        {[
          {
            step: "1 ώρα",
            label: "Υπενθύμιση",
            color: "bg-moto-amber/10 border-moto-amber text-moto-amber",
          },
          {
            step: "24 ώρες",
            label: "Social Proof",
            color: "bg-moto-blue/10 border-moto-blue text-moto-blue",
          },
          {
            step: "72 ώρες",
            label: "Κουπόνι",
            color: "bg-moto-green/10 border-moto-green text-moto-green",
          },
        ].map(({ step, label, color }, index) => (
          <div key={step} className="flex items-center gap-3">
            <div
              className={`flex min-w-[120px] flex-col items-center rounded-xl border px-4 py-3 text-center ${color}`}
            >
              <span className="text-xs font-bold uppercase tracking-wider">
                {step}
              </span>
              <span className="text-sm font-semibold">{label}</span>
            </div>
            {index < 2 && (
              <span className="hidden text-xl text-gray-400 sm:block">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Example calculation */}
      <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-5">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-400">
          Παράδειγμα Υπολογισμού
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-moto-dark">
            100 εγκαταλελειμμένα καλάθια
          </span>
          {" × "}
          <span className="font-semibold text-moto-dark">€150 μ.ο.</span>
          {" × "}
          <span className="font-semibold text-moto-dark">
            10–15% recovery rate
          </span>
          {" = "}
          <span className="text-lg font-extrabold text-moto-green">
            €1.500–2.250 / μήνα
          </span>
        </p>
      </div>

      {/* Green benefit */}
      <div className="inline-flex items-center gap-2 rounded-full bg-moto-green px-4 py-2">
        <span className="text-sm font-bold text-white">
          ✓ Αυξάνει πωλήσεις 10–15%
        </span>
      </div>
    </div>
  );
}

function RoiBanner() {
  return (
    <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-moto-green to-emerald-500 p-8 text-center md:p-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-100">
        Εκτιμώμενο αποτέλεσμα
      </p>
      <p className="mb-2 text-6xl font-black text-white md:text-7xl">+20–35%</p>
      <p className="text-lg font-medium text-green-100">
        Εκτιμώμενη αύξηση εσόδων μόνο από αυτοματισμούς
      </p>
    </div>
  );
}

export function Automations() {
  return (
    <section className="bg-moto-gray-light py-24 md:py-32" id="automations">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-moto-red">
              02 — ΑΥΤΟΜΑΤΙΣΜΟΙ
            </p>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-moto-dark md:text-5xl">
              20+ Αυτοματισμοί που δουλεύουν{" "}
              <span className="text-moto-red">24/7</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-500">
              Κάθε αυτοματισμός αντικαθιστά χειροκίνητη εργασία και λειτουργεί
              αυτόνομα — ακόμα και όταν κοιμάσαι.
            </p>
          </div>
        </FadeIn>

        {/* Main highlight card */}
        <FadeIn>
          <AbandonedCartHighlight />
        </FadeIn>

        {/* Grid of automation cards */}
        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {automationCards.map((card) => (
            <StaggerItem key={card.title}>
              <AutomationCardItem card={card} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* ROI banner */}
        <FadeIn>
          <RoiBanner />
        </FadeIn>
      </div>
    </section>
  );
}
