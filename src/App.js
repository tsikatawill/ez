import "./App.css";
import Navbar from "./components/Navbar";
import Faqs from "./components/Faqs";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero showBtn="true" />
      <GetStarted />
      <Reviews />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
