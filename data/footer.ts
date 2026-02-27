// data/footer.ts

/* ================= TYPES ================= */

export type FooterTab = {
  id: string
  title: string
  type: "list" | "text"
  content: string[] | string
}

/* ================= TAB DATA ================= */

export const footerTabs: FooterTab[] = [
  {
    id: "routes",
    title: "Top Bus Routes",
    type: "list",
    content: [
      "Ladakh, India",
      "Srinagar – Jammu & Kashmir, India",
      "Delhi – Delhi, India",
      "Agra – Uttar Pradesh, India",
      "Jaipur – Rajasthan, India",
      "Udaipur – Rajasthan, India",
      "Jaisalmer – Rajasthan, India",
      "Amritsar – Punjab, India",
      "Leh – Ladakh, India",
      "Srinagar – Jammu & Kashmir, India",
      "Varanasi – Uttar Pradesh, India",
      "Shimla – Himachal Pradesh, India",
      "Manali – Himachal Pradesh, India",
      "Coorg – Karnataka, India",
    ],
  },
  {
    id: "cities",
    title: "Buses from Top Cities",
    type: "list",
    content: [
      "Chikmagalur – Karnataka, India",
      "Hampi – Karnataka, India",
      "Gokarna – Karnataka, India",
      "Mysuru – Karnataka, India",
      "Ooty – Tamil Nadu, India",
      "Kodaikanal – Tamil Nadu, India",
      "Rameshwaram – Tamil Nadu, India",
      "Pondicherry – Puducherry, India",
      "Goa – Goa, India",
      "Mumbai – Maharashtra, India",
      "Kolkata – West Bengal, India",
      "Darjeeling – West Bengal, India",
      "Gangtok – Sikkim, India",
      "Shillong – Meghalaya, India",
    ],
  },
  {
    id: "tourist",
    title: "Top Tourist Places",
    type: "list",
    content: [
      "Dubai – United Arab Emirates",
      "Singapore – Singapore",
      "Bali – Indonesia",
      "Phuket – Thailand",
      "Bangkok – Thailand",
      "Maldives – Maldives",
      "Tokyo – Japan",
      "Kyoto – Japan",
      "Great Wall of China – China",
      "Kathmandu – Nepal",
      "Paris – France",
      "Rome – Italy",
      "Venice – Italy",
      "Barcelona – Spain",
    ],
  },
  {
    id: "packages",
    title: "Top Bus Package",
    type: "list",
    content: [
      "Kerala Grand Tour: Munnar to Kovalam",
      "Kerala Short Escape: Munnar & Backwaters",
      "Temple Trail: Kanyakumari to Madurai",
      "Himachal Tribal Adventure Circuit",
      "Royal Himachal Hill Retreat",
      "Spiti Valley Scenic Circuit",
      "Spiti Biking & Backpacking Quest",
      "Hidden Himachal Discovery Tour",
      "Hamta Pass Himalayan Trek",
      "Sangla & Chitkul Mountain Escape",
      "Manali Hill Station Escape",
      "Shimla & Manali Twin Delight",
      "Manali & Tirthan Nature Retreat",
      "Rajasthan Desert Heritage Getaway",
      "Rajasthan Heritage Serenity Tour",
      "Rajasthan Heritage & Charm Holiday",
      "Rajasthan Grand Heritage Journey",
      "Kerala Backwater & Hills Tour",
      "Rajasthan Royal Splendor Tour",
      "Best of Rajasthan Heritage Circuit",
      "Shimla & Manali Scenic Holiday",
      "Dharamshala Spiritual Hills Getaway",
      "Sacred Char Dham Himalaya Tour",
      "Char Dham Spiritual Pilgrimage 10 Days",
      "Helicopter Char Dham Yatra",
      "Kedarnath & Badrinath Pilgrimage Tour",
      "Helicopter Do Dham Yatra Package",
      "Char Dham Kedarnath–Badrinath Tour",
      "Magical Mussoorie Hills Escape",
      "Uttarakhand Scenic Wonders Tour",
      "Serene Uttarakhand Short Trip",
      "Enchanting Kashmir Valley Tour",
      "Kashmir Paradise Holiday 6 Days",
      "Kashmir Paradise Journey 7 Days",
      "Bangaram Island Tropical Escape",
      "Odisha Nature & Heritage Tour",
      "Odisha Culture & Scenery Holiday",
      "Odisha Cultural Textile Tour",
      "Odisha Heritage & Spiritual Trip",
      "Odisha Short Heritage Tour",
      "Odisha Temples & Beaches Tour",
      "Odisha Heritage & Museum Trail",
      "Puri & Bhubaneswar Cultural Tour",
      "Odisha Handloom & Heritage Tour",
      "Bhutan Scenic Aerial Getaway",
      "Short Bhutan Soulful Retreat",
      "Bhutan Tranquil Trails Holiday",
      "Serene Bhutan Scenic Sojourn",
      "Bhutan Scenic Wings Getaway",
      "Bhutan Road & Air Journey",
    ],
  },
  {
    id: "about",
    title: "About YesGoBus",
    type: "text",
    content: `
YesGoBus, over the years, has strived to deliver easy booking solutions to its customers.
Our continued efforts have resulted in YesGoBus becoming one of the leading and top-rated
bus booking platforms in India for various Bus services.

We have a strong presence with a ticket inventory from over 4000 bus partners and more than
350000 route options available on our app and website. Founded in the year 2025, YesGoBus
is a pioneer in providing end-to-end software and other value-added solutions such as
e-ticketing systems, fleet management solutions, vehicle tracking systems, passenger
information systems, and logistics management.

The company also provides technology solutions to more than 300 large private bus partners
in India, 5 state transport corporations, and 2 international bus partners, backed by a
24x7 customer support center.
`,
  },
]

// data/footer.ts

export const footerMeta = {
  about:
    "Your goto for easy and reliable bus bookings, linking travelers with diverse routes seamlessly.",

  policies: [
    "Security Safeguards",
    "Terms of Service",
    "Delete Account Details",
  ],

  help: {
    email: "support@yesgobus.com",
    phone: "+91 98884 17555",
  },

  social: [
    "youtube",
    "pinterest",
    "facebook",
    "instagram",
    "twitter",
    "linkedin",
    "whatsapp",
  ],
}