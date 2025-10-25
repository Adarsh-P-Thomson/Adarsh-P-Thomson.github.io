'use client'

import MainLayout from '../../src/components/layout/MainLayout'
import AboutHero from '../../src/components/about/AboutHero'
import PersonalitySection from '../../src/components/about/PersonalitySection'
import BooksSection from '../../src/components/about/BooksSection'
import GamingSection from '../../src/components/about/GamingSection'
import ConnectSection from '../../src/components/about/ConnectSection'

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="pt-20">
        <AboutHero />
        <PersonalitySection />
        <BooksSection />
        <GamingSection />
        <ConnectSection />
      </div>
    </MainLayout>
  )
}