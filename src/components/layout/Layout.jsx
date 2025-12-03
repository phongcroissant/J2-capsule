import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />

      <main>{children}</main>

      <Footer />
    </>
  );
}
