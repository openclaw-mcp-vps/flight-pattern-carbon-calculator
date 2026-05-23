export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Sustainability Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Know Your Flight&apos;s True{" "}
          <span className="text-[#58a6ff]">Carbon Cost</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your flight data and get precise carbon emissions calculated with ICAO methodology — including routing inefficiencies. Compare airlines, track over time, and offset smarter.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start Calculating — $19/month
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">CSV import · ICAO methodology · Offset integrations</p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          {[
            { icon: "✈", title: "Routing Inefficiency Factor", desc: "Goes beyond great-circle distance — accounts for real-world detours and holding patterns." },
            { icon: "📊", title: "Emissions Dashboard", desc: "Track your carbon footprint over time and benchmark against industry averages." },
            { icon: "🌱", title: "Offset Marketplace", desc: "Connect directly to verified carbon offset providers and neutralize your impact." },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited flight imports (CSV & API)",
              "ICAO carbon calculations with RIF",
              "Airline efficiency comparisons",
              "Emissions history & reporting",
              "Carbon offset provider integrations",
              "Export reports as PDF/CSV",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What flight data formats are supported?",
              a: "You can upload CSV files exported from most booking platforms (Concur, Egencia, Amex GBT) or connect via API. Each row should include origin, destination, date, and cabin class.",
            },
            {
              q: "How is the carbon calculation done?",
              a: "We use the ICAO Carbon Emissions Calculator methodology, enhanced with a Routing Inefficiency Factor (RIF) that accounts for actual flight paths versus great-circle distances, plus radiative forcing multipliers for high-altitude emissions.",
            },
            {
              q: "Which carbon offset providers are integrated?",
              a: "We integrate with Gold Standard and Verra-certified projects via leading offset marketplaces. You can compare projects by type, price, and co-benefits directly in the dashboard.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Flight Pattern Carbon Calculator. All rights reserved.
      </footer>
    </main>
  )
}
