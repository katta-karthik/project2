import React from 'react';
import { Hero } from './components/Hero';
import { PrayerCategories } from './components/PrayerCategories';
import { MiracleStories } from './components/MiracleStories';
import { HealingProcess } from './components/HealingProcess';
import { PastorMessage } from './components/PastorMessage';
import { Testimonials } from './components/Testimonials';
import { PrayerRequestForm } from './components/PrayerRequestForm';
import { CallToAction } from './components/CallToAction';
import { ScriptureQuote } from './components/ScriptureQuote';
import { PrayerStats } from './components/PrayerStats';

function App() {
  const whatsappLink = "https://chat.whatsapp.com/GGWKj3OLH7BLBTFZpc7h2i";

  return (
    <div className="bg-black text-white">
      <Hero whatsappLink={whatsappLink} />
      <PrayerCategories />
      <ScriptureQuote />
      <MiracleStories />
      <PrayerStats />
      <HealingProcess />
      <PastorMessage whatsappLink={whatsappLink} />
      <Testimonials />
      <PrayerRequestForm />
      <CallToAction whatsappLink={whatsappLink} />
    </div>
  );
}

export default App;