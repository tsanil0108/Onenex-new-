import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import "@/index.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/services" element={<Page><Services /></Page>} />
        <Route path="/services/:slug" element={<Page><ServiceDetail /></Page>} />
        <Route path="/pages" element={<Page><About /></Page>} />
        <Route path="/team" element={<Page><Team /></Page>} />
        <Route path="/portfolio" element={<Page><Portfolio /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App grain min-h-screen bg-[#0A0A0A]">
      <BrowserRouter>
        <SmoothScroll>
          <ScrollToTop />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppWidget />
        </SmoothScroll>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: { background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 0 },
        }}
      />
    </div>
  );
}

export default App;
