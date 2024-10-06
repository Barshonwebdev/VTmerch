import Banner from "./components/Banner"
import Books from "./components/Books"
import Footer from "./components/Footer"
import Products from "./components/products"
import Quote from "./components/Quote"

function App() {
  
  return (
    <div className="bg-gray-100">
     <Banner></Banner>
     <Products></Products>
     <Books></Books>
     <Quote></Quote>
     <Footer></Footer>
    </div>
  )
}

export default App
