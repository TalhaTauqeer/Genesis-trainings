import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Pricing />
        <Faqs />
      </main>
    </>
  )
}