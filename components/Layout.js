import Footer from './Footer';
import Nav from './Nav';

export default function Layout({children}) {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth font-sans text-gray-900 antialiased bg-slate-100">
      <Nav />
      <div id="main">
        <main
          id="content"
          aria-label="main"
          role="main"
          className="mx-auto w-full max-w-7xl flex-1 p-4 md:px-8"
        >
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
