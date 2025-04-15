import { GUI } from "https://cdn.skypack.dev/dat.gui";
import gsap from "https://cdn.skypack.dev/gsap";

gsap.registerPlugin(ScrollTrigger);

const CONFIG = {
  explode: false
};

const CTRL = new GUI();

const TOGGLE = () => {
  document.body.toggleAttribute("data-exploded");
};

CTRL.add(CONFIG, "explode").name("Explode?").onChange(TOGGLE);

// GSAP Stuff

const POPPERS = document.querySelectorAll(".pop-out-image");

POPPERS.forEach((pop) => {
  const IMG = pop.querySelectorAll("img");
  gsap.to(IMG, {
    scrollTrigger: {
      trigger: pop,
      scrub: 1,
      start: "bottom bottom+=50",
      end: "top top+=50"
    },
    filter: (index) => (index === 0 ? "brightness(1)" : "brightness(2)"),
    yPercent: -30
  });
});
