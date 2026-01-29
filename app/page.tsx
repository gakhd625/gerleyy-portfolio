import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black md:h-screen md:overflow-hidden">
      <div className="flex flex-col md:flex-row md:h-screen md:gap-0">
        <Sidebar />
        <div className="w-full md:w-1/2 md:h-screen md:overflow-y-auto">
          <Content />
        </div>
      </div>
      <Footer />
    </main>
  )
}

