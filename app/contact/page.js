'use client'

import MainLayout from '../../src/components/layout/MainLayout'
import FreelanceSection from '../../src/components/contact/FreelanceSection'
import FunCollabSection from '../../src/components/contact/FunCollabSection'

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're looking to hire a skilled developer or want to collaborate on something fun, 
              I'm always excited to connect with like-minded people!
            </p>
          </div>
        </section>

        <FreelanceSection />
        <FunCollabSection />
      </div>
    </MainLayout>
  )
}