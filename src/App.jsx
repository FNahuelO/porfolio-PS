import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { AlignJustify } from "lucide-react";
import Home from "./pages/mobile/Home";
import Nav from "./components/mobile/Nav";
import Skills from "./pages/mobile/Skills";
import About from "./pages/mobile/About";
import Contact from "./pages/mobile/Contact";
import Projects from "./pages/mobile/Projects";
import { Bounce, Slide, ToastContainer } from "react-toastify";

function InterfaceUser({ children }) {
  const [view, setView] = useState(false);
  useEffect(() => {
    const body = document.getElementById("scroll");
    if (view) {
      body.style.overflow = "hidden";
      body.style.background = "rgb(0, 0, 0, 0.5)";
    } else {
      body.style.overflow = "auto";
      body.style.background = "none";
    }

    return () => {
      body.style.overflow = "auto";
      body.style.background = "none";
    };
  }, [view]);

  const handlers = useSwipeable({
    onSwipedRight: (event) => {
      const target = event.event?.target;
      if (
        target &&
        !target.closest(".slider") &&
        !target.closest(".mySwiper")
      ) {
        setTimeout(() => {
          setView(true);
        }, 500);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });
  return (
    <div
      className="h-lvh w-svw flex flex-col overflow-y-hidden relative"
      id="scroll"
      {...handlers}
    >
      {view ? (
        <Nav setView={setView} />
      ) : (
        <button
          className="bg-transparent text-orange focus:outline-0 border-none py-8 px-6 absolute top-0 z-[999]"
          id="buttonMenu"
          onClick={() => setView(true)}
        >
          <AlignJustify />
        </button>
      )}

      <div className="flex flex-1 flex-col relative w-full h-full overflow-hidden">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="dark"
          transition={Slide}
        />

        {children}
      </div>
    </div>
  );
}

export default function App() {
  const routes = [
    { path: "/", component: <Home /> },
    { path: "/about", component: <About /> },
    { path: "/skills", component: <Skills /> },
    { path: "/contact", component: <Contact /> },
    { path: "/projects", component: <Projects /> },
  ];

  return (
    <Router>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<InterfaceUser>{component}</InterfaceUser>}
          />
        ))}
      </Routes>
    </Router>
  );
}
