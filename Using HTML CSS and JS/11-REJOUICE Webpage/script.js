var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");



// Locomotive cdn create allow/barrier, in the work function of our other CDNs. For that reason we use Locomotive Scrolltrigger Codepen(https://codepen.io/GreenSock/pen/ExPdqKy)
function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoScroll();



// page1Content.addEventListener("mousemove", function (details) {
//     // console.log("heyy");
//     // console.log(details);
//     // console.log(details.x);
//     // console.log(details.y);
//     cursor.style.left = details.x + "px";
//     cursor.style.top = details.y + "px";
// });

// Here we use gsap for moving animations for #cursor
function cursorEffects() {
  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  // We want the #cursor div to only work on page one content. For that -
  page1Content.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffects();



function page2Animation() {
  gsap.from(".elem h1", {
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 45%",
      // markers:true,
      scrub: 1,
    },
  });
}
page2Animation();


function page4Animation1() {
  gsap.from("#text h4", {
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 47%",
      end: "top 45%",
      // markers:true,
      scrub: 1,
    },
  });
}
page4Animation1();

function page4Animation2() {
  gsap.from(".page4-elements h1", {
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 47%",
      end: "top 45%",
      // markers:true,
      scrub: 1,
    },
  });
}
page4Animation2();



// From swiperJS
function sliderAnimation(){
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1400,
        disableOnInteraction: false,
      },
  });
}
sliderAnimation()



var t1 = gsap.timeline();

t1.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
})

t1.to("#loader h3", {
  x: -10,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
})

t1.to("#loader", {
  opacity: 0,
})

t1.to("#loader", {
  display: "none",
})

t1.from("#page1-content h1 span", {
  y: 100,
  opacity: 100,
  stagger: 0.1,
  duration: 0.5,
})