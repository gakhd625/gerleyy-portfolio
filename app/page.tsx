import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white md:h-screen md:overflow-hidden">
      <div className="flex flex-col md:flex-row pl-8 md:pl-12 md:h-screen md:gap-12">
        <Sidebar />
        <div className="w-full md:w-2/3 md:h-screen md:overflow-y-auto">
          <Content />
        </div>
      </div>
      <Footer />
    </main>
  )
}

