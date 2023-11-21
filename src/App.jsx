import Nav from "./Layout/Nav";
import Body from "./Layout/Body";
import Footer from "./Layout/Footer";


const App = () => (

  <main className="relative flex">
  <div className="max-container w-full">
    <div>
      <Nav/>
    </div>
    <div className="padding max-sm:h-[80vh] sm:h-[80vh] bg-mode">
      <Body/>
    </div>
    <div className=" sm:h-[20vh] max-sm:h-[20vh] bg-black">
      <Footer/>
    </div>
  </div>
  </main>
)

export default App;


        