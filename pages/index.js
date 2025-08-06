import React from 'react';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";

// Components
import Navbar from '../components/shared/navbar';
import Hero from '../components/hero';
import AgendaSection from '../components/AgendaSection';
import FeaturesSection from '../components/FeaturesSection';
import SpeakersSection from '../components/SpeakersSection';
import PartnersSection from '../components/PartnersSection';
import RegistrationSection from '../components/RegistrationSection';
import Footer from '../components/shared/footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Head>
        <title>GitFest 2025 - Product Building Workshop</title>
        <meta
          name="description"
          content="Join GitFest 2025, a four-day product-building workshop designed to introduce students to real-world development through hands-on learning. August 25-28, 2025."
        />
        <meta name="keywords" content="GitFest, workshop, product development, coding, students, technology, programming" />
        <meta name="author" content="GitFest 2025" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gitfest2025.com/" />
        <meta property="og:title" content="GitFest 2025 - Product Building Workshop" />
        <meta property="og:description" content="Join GitFest 2025, a four-day product-building workshop designed to introduce students to real-world development through hands-on learning." />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gitfest2025.com/" />
        <meta property="twitter:title" content="GitFest 2025 - Product Building Workshop" />
        <meta property="twitter:description" content="Join GitFest 2025, a four-day product-building workshop designed to introduce students to real-world development through hands-on learning." />
        <meta property="twitter:image" content="/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">

        <section id="home">
          <Hero />
        </section>

        <section id="agenda">
          <AgendaSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="speakers">
          <SpeakersSection />
        </section>

        {/* <section id="partners">
          <PartnersSection />
        </section> */}

        <RegistrationSection />
      </main>
    </div>
  );
}
