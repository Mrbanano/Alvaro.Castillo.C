import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
