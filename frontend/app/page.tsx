"use client";

import { useState } from "react";

import ChatWindow from "../src/components/ChatWindow";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        
        <div className="w-36 h-36 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-5xl font-bold mb-8">
          G
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Golden Keshri
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-10 mb-10">
          Data Analyst • Power BI Developer • Business Intelligence
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
            Download Resume
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="border-t border-zinc-800 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-4xl font-bold mb-8">
            About Me
          </h2>

          <p className="text-zinc-400 text-lg leading-9">
            Data Analyst and Power BI Developer with 4+ years of experience in fintech and startup environments. Skilled in SQL, Power BI, Python, Excel, and dashboard automation. Passionate about building AI-powered applications and transforming complex data into business insights.
          </p>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="border-t border-zinc-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "Power BI",
              "SQL",
              "Python",
              "Excel",
              "Data Visualization",
              "Dashboard Automation",
              "Pandas",
              "NumPy",
              "DAX",
              "Power Query",
              "Financial Analytics",
              "Business Intelligence",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center hover:border-zinc-600 transition"
              >
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="border-t border-zinc-800 py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Experience
          </h2>

          <div className="space-y-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">
                  Data Analyst II — Invoyz
                </h3>

                <span className="text-zinc-400">
                  Oct 2024 – Present
                </span>
              </div>

              <p className="text-zinc-400 leading-8">
                Automated finance and operations reporting using Power BI dashboards, SQL, and Python. Worked on repayment analytics, KPI reporting, and operational efficiency improvements.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">
                  Data Analyst I — SiliconIndia
                </h3>

                <span className="text-zinc-400">
                  Jul 2022 – Sep 2024
                </span>
              </div>

              <p className="text-zinc-400 leading-8">
                Researched startup investment trends, built market intelligence dashboards, and automated reporting workflows using Python, Excel, and Power Query.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="border-t border-zinc-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Featured Project
          </h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <h3 className="text-3xl font-semibold mb-6">
              Distributor Financing Analytics Dashboard
            </h3>

            <p className="text-zinc-400 leading-9 text-lg mb-8">
              Built an end-to-end Power BI dashboard for repayment tracking, credit utilization monitoring, and portfolio risk analysis using SQL, DAX, and Power Query.
            </p>

            <div className="flex gap-3 flex-wrap">
              {[
                "Power BI",
                "SQL",
                "DAX",
                "Power Query",
                "Python",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="border-t border-zinc-800 py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Contact
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Email
              </h3>

              <p className="text-zinc-400">
                goldenkeshri021@gmail.com
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                LinkedIn
              </h3>

              <p className="text-zinc-400">
                linkedin.com/in/golden-keshri
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Location
              </h3>

              <p className="text-zinc-400">
                Bengaluru, India
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FLOATING CHAT BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-white text-black text-2xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </button>

      {/* CHATBOT WINDOW */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <ChatWindow />
        </div>
      )}

    </main>
  );
}