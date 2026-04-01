"use client";

import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion-wrapper";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  benefit: string;
  tag?: string;
  highlight?: boolean;
}

interface SyncCardProps {
  direction: string;
  interval: string;
  items: string[];
  benefit: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const features: FeatureCardProps[] = [
  {
    emoji: "🏍️",
    title: "Η Μηχανή μου",
    description:
      'Ο πελάτης προσθέτει τη μηχανή του (π.χ. BMW R 1250 GS 2024). Κάθε προϊόν εμφανίζει αυτόματα "Ταιριάζει στη μηχανή σου" ή "Δεν είναι συμβατό". Τα φίλτρα κρύβουν αυτόματα τα ασύμβατα.',
    benefit: "Λιγότερες επιστροφές, μεγαλύτερη εμπιστοσύνη",
    tag: "Κανένα ελληνικό e-shop δεν το κάνει",
    highlight: true,
  },
  {
    emoji: "📱",
    title: "AR — Augmented Reality",
    description:
      "Ο πελάτης ανοίγει την κάμερα του κινητού και βλέπει τη βαλίτσα ή το top-case πάνω στη μηχανή του σε πραγματικό χώρο. Χωρίς εγκατάσταση app.",
    benefit: "Αφαιρεί το «δεν ξέρω αν ταιριάζει»",
    tag: "First mover advantage",
    highlight: true,
  },
  {
    emoji: "🔍",
    title: "Smart Search",
    description:
      "Γράφει «κρανως shoie» → βρίσκει «Κράνη Shoei». Γράφει «κάτι για βροχή» → βρίσκει αδιάβροχα. Voice search. Αποτελέσματα σε <50ms.",
    benefit: "Ο πελάτης βρίσκει ΠΑΝΤΑ αυτό που ψάχνει",
  },
  {
    emoji: "🎬",
    title: "360° & Video",
    description:
      "Περιστρέφεις το προϊόν 360° με drag. Video demos σε action. Cinematic hero video για τις κατηγορίες.",
    benefit: "Premium αίσθηση",
  },
  {
    emoji: "💳",
    title: "Modern Payments",
    description:
      "Κάρτα, Apple Pay, Google Pay, Revolut, Klarna δόσεις 0%, τραπεζικές δόσεις, SEPA. Όλα σε ένα checkout.",
    benefit: "Klarna: +20% conversion σε ακριβά προϊόντα",
  },
  {
    emoji: "🌍",
    title: "6 Γλώσσες & Νομίσματα",
    description:
      "Ελληνικά, Αγγλικά, Βουλγαρικά, Σερβικά, Ρουμανικά, Αλβανικά. Auto-detection χώρας → σωστή γλώσσα & νόμισμα.",
    benefit: "25+ εκατομμύρια πληθυσμός Βαλκανίων",
  },
  {
    emoji: "⭐",
    title: "Rider Reviews",
    description:
      "Όχι απλά «★★★★★ Great». Κάθε κριτική περιέχει μηχανή, ύψος/βάρος, χρόνια εμπειρίας. Φιλτράρισμα «Riders σαν εσένα».",
    benefit: "Εμπιστοσύνη x10",
  },
  {
    emoji: "🎁",
    title: "Referral & Loyalty",
    description:
      "Κάθε πελάτης παίρνει τον κωδικό «KOSTAS2026». Ο φίλος παίρνει 10% έκπτωση, ο Κώστας κερδίζει πόντους. Κάθε αγορά = πόντοι = εκπτώσεις.",
    benefit: "Πελάτες φέρνουν πελάτες χωρίς paid ads",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BenefitBox({ text }: { text: string }) {
  return (
    <div className="mt-auto pt-3">
      <div className="flex items-start gap-2 rounded-lg bg-moto-green/10 border border-moto-green/20 px-3 py-2">
        <span className="mt-0.5 text-moto-green text-xs">✓</span>
        <span className="text-xs font-semibold text-moto-green leading-snug">
          {text}
        </span>
      </div>
    </div>
  );
}

function TagBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-moto-red/10 border border-moto-red/30 text-moto-red text-[10px] font-bold tracking-wide uppercase">
      <span className="w-1 h-1 rounded-full bg-moto-red inline-block" />
      {text}
    </span>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
  benefit,
  tag,
  highlight = false,
}: FeatureCardProps) {
  return (
    <div
      className={[
        "flex flex-col gap-3 rounded-2xl border p-6 h-full transition-colors duration-300",
        highlight
          ? "border-moto-red/40 bg-moto-red/5 hover:border-moto-red/60"
          : "border-white/8 bg-white/3 hover:border-white/16",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-3xl leading-none">{emoji}</span>
        {tag && <TagBadge text={tag} />}
      </div>
      <h3 className="text-base font-bold text-white leading-snug">{title}</h3>
      <p className="text-sm text-white/55 leading-relaxed flex-1">
        {description}
      </p>
      <BenefitBox text={benefit} />
    </div>
  );
}

function SyncCard({ direction, interval, items, benefit }: SyncCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-white/16 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <span className="text-2xl leading-none">🔄</span>
        <div>
          <p className="text-base font-bold text-white">{direction}</p>
          <p className="text-xs text-moto-gray">{interval}</p>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-white/60"
          >
            <span className="mt-1 text-moto-green text-xs flex-shrink-0">
              →
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <BenefitBox text={benefit} />
    </div>
  );
}

// ─── Exports ──────────────────────────────────────────────────────────────────

export function KeyFeatures() {
  return (
    <section className="bg-moto-dark py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-moto-red mb-3">
            04 — ΒΑΣΙΚΑ FEATURES
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mb-4">
            Τι θα βλέπει ο πελάτης
          </h2>
          <div className="w-12 h-px bg-moto-red/50 mb-14" />
        </FadeIn>

        {/* Grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <FeatureCard {...feature} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export function ERPIntegration() {
  const erpToShop = {
    direction: "ERP → E-shop",
    interval: "Κάθε 5–15 λεπτά",
    items: [
      "Προϊόντα, τιμές, stock συγχρονίζονται αυτόματα",
      "Κατηγορίες & εικόνες ενημερώνονται χωρίς χειροκίνητη δράση",
      "Νέο προϊόν στο Entersoft → 5 λεπτά μετά στο site",
    ],
    benefit: "Νέο προϊόν στο Entersoft → 5 λεπτά μετά στο site",
  };

  const shopToErp = {
    direction: "E-shop → ERP",
    interval: "Άμεσα (real-time)",
    items: [
      "Παραγγελίες ωθούνται αυτόματα στο Entersoft",
      "Πελάτες & στοιχεία τους καταχωρούνται χωρίς χειροκίνητη εισαγωγή",
      "Τιμολόγια δημιουργούνται αυτόματα",
    ],
    benefit: "Checkout → 1 δευτερόλεπτο στο Entersoft",
  };

  return (
    <section className="bg-moto-dark-2 py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-moto-red mb-3">
            05 — ERP ENTERSOFT
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mb-4">
            Πλήρης Διασύνδεση με Entersoft
          </h2>
          <div className="w-12 h-px bg-moto-red/50 mb-14" />
        </FadeIn>

        {/* Two sync cards */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <StaggerItem>
            <SyncCard {...erpToShop} />
          </StaggerItem>
          <StaggerItem>
            <SyncCard {...shopToErp} />
          </StaggerItem>
        </StaggerChildren>

        {/* Failsafe full-width card */}
        <FadeIn delay={0.3}>
          <div className="rounded-2xl border border-moto-green/30 bg-moto-green/8 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl leading-none flex-shrink-0">🛡️</span>
              <div className="flex flex-col gap-3 w-full">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Failsafe — Προστασία από Διακοπές ERP
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Αν το ERP κατεβεί, το e-shop συνεχίζει κανονικά από cache.
                    Οι παραγγελίες μπαίνουν σε ουρά και αποστέλλονται μόλις
                    επιστρέψει το Entersoft. Zero data loss — ο πελάτης δεν
                    βλέπει ποτέ πρόβλημα.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Cache τελευταίας κατάστασης ERP",
                    "Παραγγελίες σε ουρά αναμονής",
                    "Auto-retry μόλις επιστρέψει η σύνδεση",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 rounded-lg bg-moto-green/10 border border-moto-green/20 px-3 py-2.5"
                    >
                      <span className="mt-0.5 text-moto-green text-xs flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-xs text-moto-green font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 rounded-lg bg-moto-green/15 border border-moto-green/30 px-4 py-3 w-full sm:w-fit">
                  <span className="text-moto-green text-xs mt-0.5">✓</span>
                  <span className="text-sm font-bold text-moto-green">
                    Ο πελάτης δεν βλέπει ποτέ πρόβλημα
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
