import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 scroll-smooth">
      <Nav />
      <div id="main">
        <main
          id="content"
          aria-label="main"
          role="main"
          className="flex-1 p-4 mx-auto w-full max-w-7xl md:px-8"
        >
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
