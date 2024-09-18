import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen grid grid-cols-12 grid-rows-[min-content_1fr_min-content]">
      <Header />

      <main className="row-start-2 col-span-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
