"use client"

import { useState } from "react"
import { footerTabs, footerMeta } from "@/data/footer"

/* Social icon paths (PNG from public folder) */
const socialIcons: Record<string, string> = {
    youtube: "/social/youtube-logo.png",
    facebook: "/social/facebook-logo.png",
    instagram: "/social/instagram-icon.png",
    twitter: "/social/twitter-logo.png",
    linkedin: "/social/linkedin-logo.png",
    whatsapp: "/social/whatsapp-logo.png",
    pintrest: "/social/pintrest-logo.png",
}

export default function Footer() {
    const [activeTab, setActiveTab] = useState(footerTabs[0].id)
    const active = footerTabs.find(t => t.id === activeTab)!

    return (
        <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">

            {/* ================= TABS HEADER ================= */}
            <div className="max-w-7xl mx-auto px-6 pt-10">
                <div className="flex flex-wrap justify-between gap-6 border-b border-white/30">
                    {footerTabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-3 text-sm font-semibold transition
                ${activeTab === tab.id
                                    ? "text-yellow-400 border-b-2 border-yellow-400"
                                    : "text-white/80 hover:text-white"
                                }
              `}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* ================= TAB CONTENT ================= */}
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* LIST TYPE (routes, cities, tourist, packages) */}
                {active.type === "list" && (
                    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-3 text-sm text-gray-200">
                        {(active.content as string[]).map((item, i) => (
                            <li
                                key={i}
                                className="hover:text-white cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                {/* TEXT TYPE (About YesGoBus) */}
                {active.type === "text" && (
                    <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line">
                        {active.content as string}
                    </p>
                )}

            </div>

            {/* ================= BOTTOM BAR ================= */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-sm">

                    {/* Logo + About */}
                    <div>
                        <div className="text-xl font-bold mb-3">YesGoBus</div>
                        <p className="text-gray-300">
                            {footerMeta.about}
                        </p>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="font-semibold mb-3">Policies</h4>
                        <ul className="space-y-2 text-gray-300">
                            {footerMeta.policies.map((p, i) => (
                                <li
                                    key={i}
                                    className="hover:text-white cursor-pointer"
                                >
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Icons (PNG from Figma) */}
                    <div>
                        <h4 className="font-semibold mb-3">
                            Connect with us on Social
                        </h4>
                        <div className="flex gap-4 items-center">
                            {footerMeta.social.map((s) => (
                                <img
                                    key={s}
                                    src={socialIcons[s]}
                                    alt={s}
                                    className="w-6 h-6 cursor-pointer hover:scale-110 transition"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Help */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-white">
                                For Help
                            </span>

                            <img
                                src="/ask-help-icon.png"
                                alt="Help"
                                className="w-8 h-8"
                            />
                        </div>

                        <p className="text-gray-300 mt-3">
                            {footerMeta.help.email}<br />
                            {footerMeta.help.phone}
                        </p>
                    </div>
                    {/* ================= COPYRIGHT ================= */}


                </div>
                <div className="bg-black py-4">
                    <p className="text-center text-sm text-gray-300">
                        © 2025 YesGoBus India Private Limited
                    </p>
                </div>
            </div>

        </footer>
    )
}