import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../components/Footer'
import Bio from '../components/Bio'

export default function Home() {
  return (
    <div className="bg-black text-green-400 min-h-screen flex flex-col font-vazir">
      <Head>
        <title>Miss Trader</title>
      </Head>
      <main className="p-10 flex-grow max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Empowering your trade journey
        </motion.h1>
        <p className="mb-10 text-green-300">founded of M&W concept</p>

        <h2 className="text-2xl mb-4">خدمات ما</h2>
        <ul className="space-y-2 text-lg">
          <li><Link href="/free-courses" className="underline">آموزش‌های رایگان</Link></li>
          <li><Link href="/forex-training" className="underline">آموزش ترید در فارکس</Link></li>
          <li><Link href="/blog" className="underline">وبلاگ ما</Link></li>
          <li><Link href="/contact" className="underline">تماس با ما</Link></li>
        </ul>
      </main>
      <Bio />
      <Footer />
    </div>
  )
}
