import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Stats } from '@/components/site/stats'
import { Categories } from '@/components/site/categories'
import { Roadmap } from '@/components/site/roadmap'
import { FeaturedNotes } from '@/components/site/featured-notes'
import { SearchSection } from '@/components/site/search-section'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <Roadmap />
        <FeaturedNotes />
        <SearchSection />
      </main>
      <Footer />
    </div>
  )
}
