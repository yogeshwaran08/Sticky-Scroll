import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { y: "110%" });

      const animation = gsap.to(".photo:not(:first-child)", {
        y: 0,
        duration: 1,
        stagger: 1,
      });

      const exitAnimation = gsap.from(
        ".photo:not(:first-child)",
        {
          y: "110%",
          duration: 1,
        },
        {
          y: "110%",
          duration: 1,
        }
      );

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        onEnter: () => exitAnimation.play(),
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <React.Fragment>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Hello👋 welcome to Aixplore</h1>
      </div>
      <Box className="gallery" sx={{ display: "flex" }}>
        <Box
          className="left"
          sx={{
            width: "50%",
            marginLeft: "auto",
            "& .details": {
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "40vw",
              marginLeft: "auto",
              color: "#000",
              fontSize: "3rem",
              fontWeight: 900,
            },
          }}
        >
          <Box className="details">
            <h1>BRAND PRODUCT</h1>
          </Box>
          <Box className="details">
            <h1>PRODUCT DETAILS</h1>
          </Box>
          <Box className="details">
            <h1>DESIGN AGENCY</h1>
          </Box>
        </Box>
        <Box
          className="rightblock"
          sx={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "40vw",
              height: "40vw",
              position: "relative",
              overflow: "hidden",
              "& .photo": {
                position: "absolute",
                width: "100%",
                height: "100%",
                "& img": {
                  height: "100%",
                  width: "100%",
                },
              },
            }}
          >
            <Box className="photo">
              <img
                src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
                alt="img-1"
              />
            </Box>
            <Box className="photo">
              <img
                src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
                alt="img-2"
              />
            </Box>
            <Box className="photo">
              <img
                src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
                alt="img-3"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Hello👋 welcome to Aixplore</h1>
      </div>
    </React.Fragment>
  );
}

export default App;
