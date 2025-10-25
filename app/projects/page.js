'use client'

import MainLayout from '../../src/components/layout/MainLayout'
import ProjectsHero from '../../src/components/projects/ProjectsHero'
import ProjectsFilter from '../../src/components/projects/ProjectsFilter'
import FreelanceProjects from '../../src/components/projects/FreelanceProjects'
import PersonalProjects from '../../src/components/projects/PersonalProjects'
import ProjectStats from '../../src/components/projects/ProjectStats'

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="pt-20">
        <ProjectsHero />
        <ProjectStats />
        <ProjectsFilter />
        <FreelanceProjects />
        <PersonalProjects />
      </div>
    </MainLayout>
  )
}