import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";
import "../styles/theme.css";

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
