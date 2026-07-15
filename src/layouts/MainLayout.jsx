import Navbar from "../components/layout/Navbar/Navbar";
import { Footer } from "../components/layout/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { TopBar } from "../components/layout/TopBar/TopBar";

function MainLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === "/" || pathname === '/noticias';
  return (
    <>
      <TopBar />
      <Navbar />
      <main className={isHome ? '' : ''}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;