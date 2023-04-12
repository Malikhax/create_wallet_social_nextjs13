import { Nunito } from 'next/font/google'
import Hero from './Hero'

const inter = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <Hero />
    </main>
  )
}
