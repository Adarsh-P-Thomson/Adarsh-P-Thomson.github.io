'use client'

import MainLayout from '../../src/components/layout/MainLayout'
import ExperienceHero from '../../src/components/experience/ExperienceHero'
import DetailedExperience from '../../src/components/experience/DetailedExperience'
import SkillsHighlight from '../../src/components/experience/SkillsHighlight'

export default function ExperiencePage() {
  return (
    <MainLayout>
      <div className="pt-20">
        <ExperienceHero />
        <DetailedExperience />
        <SkillsHighlight />
      </div>
    </MainLayout>
  )
}