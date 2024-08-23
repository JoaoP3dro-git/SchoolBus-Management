import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Home() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* Your page content goes here */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
