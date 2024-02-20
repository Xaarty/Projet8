import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../pages/home";
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Home />
      </main>
      <Footer />
    </>
  );
}
