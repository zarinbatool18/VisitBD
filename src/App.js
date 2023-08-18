import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Review from "./components/Review";
import scrollreveal from "scrollreveal";
import './styles.css';

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #home,
        #about,
        #recommend,
        #review,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <About />
      <Recommend />
      <Review />
      <Footer />
    </div>
  );
}
