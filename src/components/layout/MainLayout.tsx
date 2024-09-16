import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function MainLayout() {
  return (
    <div className="grid grid-cols-12">
      <header className="row-start-1 col-span-12">{<Navbar />}</header>

      <main className="row-start-2 col-span-12 min-h-screen">
        <Outlet />
      </main>

      <footer className="row-start-3 col-span-12">{<Footer />}</footer>
    </div>
  );
}

export default MainLayout;
