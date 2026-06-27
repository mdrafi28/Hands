import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function HandLogo() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gold">
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
      >
        <path
          d="M8 20 C8 20 6 18 6 14 L6 10 C6 9 7 8 8 8 C9 8 10 9 10 10 L10 14"
          stroke="#1C3A2F"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 14 L10 9 C10 8 11 7 12 7 C13 7 14 8 14 9 L14 13"
          stroke="#1C3A2F"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 13 L14 9.5 C14 8.5 15 7.5 16 7.5 C17 7.5 18 8.5 18 9.5 L18 13"
          stroke="#1C3A2F"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M18 13 L18 11 C18 10 19 9 20 9 C21 9 22 10 22 11 L22 16 C22 19.5 19 22 14 22 C11 22 8 20 8 20"
          stroke="#1C3A2F"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white text-brand-forest">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <HandLogo />
          <div>
            <p className="font-serif text-2xl font-bold leading-none">Hands</p>
            <p className="text-xs text-brand-forest/60">
              Local Hands. Global Hearts.
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-brand-forest/70 md:flex">
          <a href="#how-it-works" className="hover:text-brand-forest">
            How it works
          </a>
          <a href="#services" className="hover:text-brand-forest">
            Services
          </a>
          <a href="#safety" className="hover:text-brand-forest">
            Trust & Safety
          </a>
        </nav>

        <Button className="rounded-full bg-brand-forest px-6 text-white hover:bg-brand-green">
          Request care
        </Button>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Badge className="mb-6 rounded-full bg-brand-mist px-4 py-2 text-brand-green hover:bg-brand-mist">
            Trusted local care, booked from anywhere
          </Badge>

          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight tracking-tight text-brand-forest md:text-7xl">
            You can&apos;t always be there. But now, someone trusted can be.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-forest/70">
            Hands helps families abroad book verified local Care Partners for
            their loved ones back home — for hospital visits, errands,
            companionship, and everyday support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button className="h-12 rounded-full bg-brand-forest px-8 text-base text-white hover:bg-brand-green">
              Book a Care Partner
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-brand-forest/20 bg-transparent px-8 text-base text-brand-forest hover:bg-brand-mist"
            >
              See how it works
            </Button>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-serif text-3xl font-bold text-brand-forest">
                24/7
              </p>
              <p className="text-brand-forest/60">Care requests</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-brand-forest">
                ID
              </p>
              <p className="text-brand-forest/60">Verified partners</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-brand-forest">
                Live
              </p>
              <p className="text-brand-forest/60">Visit updates</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full border border-brand-gold/40" />
          <div className="absolute -bottom-8 -right-6 h-52 w-52 rounded-full bg-brand-mist" />

          <div className="relative rounded-[2rem] bg-brand-forest p-6 text-white shadow-2xl">
            <div className="rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Live visit
              </p>

              <div className="mt-6 rounded-2xl bg-white p-5 text-brand-forest">
                <p className="text-sm text-brand-forest/60">
                  Care Partner assigned
                </p>
                <p className="mt-1 font-serif text-2xl font-bold">
                  Priya has arrived
                </p>
                <p className="mt-3 text-sm leading-6 text-brand-forest/70">
                  Your visit is live. She is accompanying your father to the
                  hospital appointment and you&apos;ll receive updates along the
                  way.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-white/50">Service</p>
                  <p className="mt-1 font-medium">Hospital visit</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs text-white/50">Duration</p>
                  <p className="mt-1 font-medium">2 hours</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-brand-gold p-4 text-brand-forest">
                <p className="text-sm font-medium">
                  “Your parents are in good hands.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section id="how-it-works" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Badge className="mb-4 rounded-full bg-brand-mist px-4 py-2 text-brand-green hover:bg-brand-mist">
              How it works
            </Badge>

            <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-forest md:text-5xl">
              Care that feels close, even when you are far away.
            </h2>

            <p className="mt-5 text-lg leading-8 text-brand-forest/70">
              Hands makes it simple for families abroad to arrange trusted local
              support for their loved ones back home.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Tell us what they need",
                text: "Share the city, timing, and type of support needed — hospital visit, errands, or companionship.",
              },
              {
                step: "02",
                title: "We match a Care Partner",
                text: "A trusted local Care Partner is assigned based on availability, location, and service need.",
              },
              {
                step: "03",
                title: "Someone is physically there",
                text: "The Care Partner accompanies your loved one, helps with basic tasks, and stays present.",
              },
              {
                step: "04",
                title: "You receive updates",
                text: "Get simple visit updates so you know what is happening, even from another country.",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="border-brand-forest/10 bg-brand-white shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-forest font-serif text-lg font-bold text-brand-gold">
                    {item.step}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-forest">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-brand-forest/65">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
            <section id="services" className="bg-brand-mist px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge className="mb-4 rounded-full bg-white px-4 py-2 text-brand-green hover:bg-white">
                Services
              </Badge>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-forest md:text-5xl">
                Support for the moments when presence matters most.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-brand-forest/70">
              From hospital visits to everyday errands, Hands focuses on care,
              dignity, and real human presence — not just task completion.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "🏥",
                title: "Hospital visit support",
                text: "A Care Partner can accompany your loved one to appointments, help with basic coordination, and stay present during the visit.",
              },
              {
                icon: "💊",
                title: "Pharmacy & medicine pickup",
                text: "Support with picking up medicines, basic supplies, and other essentials when family cannot be there physically.",
              },
              {
                icon: "🛒",
                title: "Errands & appointment help",
                text: "Help with everyday outside tasks such as checkups, bank visits, document work, or local errands.",
              },
              {
                icon: "☕",
                title: "Companionship & check-ins",
                text: "Someone trusted can spend time with your loved one, check on their comfort, and offer warm human company.",
              },
              {
                icon: "🍲",
                title: "Food & comfort support",
                text: "Assistance with meals, water, basic comfort needs, and making sure they are not handling everything alone.",
              },
              {
                icon: "📲",
                title: "Family update coordination",
                text: "Families abroad receive simple updates so they feel informed, reassured, and connected throughout the visit.",
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="border-white/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/40 text-2xl">
                    {service.icon}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-forest">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-brand-forest/65">
                    {service.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
            <section id="safety" className="bg-brand-forest px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <Badge className="mb-4 rounded-full bg-white/10 px-4 py-2 text-brand-gold hover:bg-white/10">
              Trust & Safety
            </Badge>

            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Built for families who need more than a booking.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              When care involves your loved ones, trust is not a feature — it is
              the foundation. Hands is designed around verified people, clear
              communication, and dignity-first support.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6">
              <p className="font-serif text-2xl font-bold text-brand-gold">
                Important boundary
              </p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Hands Care Partners do not replace doctors, nurses, ambulances,
                or emergency medical services. For emergencies, families should
                contact local emergency services immediately.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Verified Care Partners",
                text: "Care Partners are positioned as trusted local people, not gig workers or casual helpers.",
              },
              {
                title: "Visit updates",
                text: "Families can receive clear updates before, during, and after the visit for peace of mind.",
              },
              {
                title: "Dignity-first care",
                text: "The service is built around warmth, respect, and companionship — not domestic labor.",
              },
              {
                title: "Clear service limits",
                text: "Hands focuses on presence and support, while medical decisions remain with professionals.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border-white/10 bg-white/10 text-white shadow-none"
              >
                <CardContent className="p-6">
                  <div className="mb-5 h-2 w-14 rounded-full bg-brand-gold" />

                  <h3 className="font-serif text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}