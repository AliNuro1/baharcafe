import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import { site } from "../data/site";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const title = `${site.name} — ${site.tagline} in Manchester`;
const description =
  "Bahar Cafe on Claremont Road, Moss Side, Manchester. Somali cooking with flavours from across East Africa.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#5ce0e4",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  telephone: site.phone.label,
  servesCuisine: ["Somali", "East African"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.location.street,
    addressLocality: site.location.city,
    postalCode: site.location.postcode,
    addressCountry: "GB",
  },
  openingHours: "Mo-Su 09:00-18:00",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" id="top" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
