import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import "animate.css/animate.compat.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ContactPage from "./ContactPage";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Main() {
  useEffect(() => {
    const sections = document.querySelectorAll(".main-container");
    const scrolling = {
      enabled: true,
      events: "scroll,wheel,touchmove,pointermove".split(","),
      prevent: (e) => e.preventDefault(),
      disable() {
        if (scrolling.enabled) {
          scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, {
            passive: true,
          });
          scrolling.events.forEach((e, i) =>
            (i ? document : window).addEventListener(e, scrolling.prevent, {
              passive: false,
            })
          );
        }
      },
      enable() {
        if (!scrolling.enabled) {
          (scrolling.enabled = true),
            window.removeEventListener("scroll", gsap.ticker.tick);
          scrolling.events.forEach((e, i) =>
            (i ? document : window).removeEventListener(e, scrolling.prevent)
          );
        }
      },
    };
    const goToSelction = (section, anim, i) => {
      if (scrolling.enabled) {
        scrolling.disable();
        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          onComplete: scrolling.enable,
          duration: 1,
        });
        anim && anim.restart();
      }
    };

    sections.forEach((section, i) => {
      const intoAnim = gsap.from(section, { duration: 1, paused: true });
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=1",
        end: "bottom top-=1",
        onEnter: () => goToSelction(section, intoAnim),
        onEnterBack: () => goToSelction(section),
      });
    });

    return () => {};
  }, []);
  return (
    <>
      <div className="main-container text-white h-screen w-screen overflow-x-hidden overflow-y-scroll bg-hero bg-no-repeat bg-cover bg-center bg-fixed backdrop-blur-lg ">
        <Navbar />
        <HomePage />
        <AboutPage />
        {/* <ProjectPage />
        <ContactPage /> */}
      </div>
    </>
  );
}

export default Main;
