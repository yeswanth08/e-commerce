import { productImage } from "../seeder/data"
import { Toaster } from 'sonner'
import { Header, Productcard } from "../components"

export default function App(){
    return(
        <div className="bg-[#f1f3f6] w-full min-h-screen">
        <Header/>
        <div className="container mx-auto px-4 pt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
            {productImage.map((product, index) => (
              <Productcard key={index} {...product} />
            ))}
          </div>
          <Toaster />
        </div>
      </div>
    )
}