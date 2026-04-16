import { useEffect, useRef, useState } from "react";
import { About } from "./About";
import { Links } from "./Links";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Other } from "./Other";
import { frames } from "./ascii/withoutBlossoms";
import { topBorderFrames } from "./ascii/topBorder";
import { botBorderFrames } from "./ascii/botBorder";
import {
  Dither,
  Vignette,
  Shader,
  RadialGradient,
  Aurora,
  Bulge,
  CRTScreen,
  ChromaticAberration,
  Ascii,
  CursorTrail,
} from "shaders/react";

import { frames1 } from "./ascii/version1";

function App() {
  const stateRef = useRef("state1");
  const bannerRef = useRef(null);
  const topBorderRef = useRef(null);
  const botBorderRef = useRef(null);
  const navRef = useRef(null);
  const initRef = useRef(null);
  const [pageState, setPageState] = useState(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    // Set first frame immediately
    bannerRef.current.innerHTML = frames[0];

    // Typewriter
    let i = 0;
    const text = "init portfolio";
    function typeNextChar() {
      if (i < text.length && initRef.current) {
        initRef.current.textContent = text.slice(0, i + 1);
        i++;
        setTimeout(typeNextChar, 100);
      } else if (initRef.current) {
        initRef.current.classList.remove("typewriter");
      }
    }
    typeNextChar();

    // Frame animation
    let frameIndex = 0;
    bannerRef.current.innerHTML = frames[0].trim();
    topBorderRef.current.innerHTML = topBorderFrames[0].trim();
    botBorderRef.current.innerHTML = botBorderFrames[0].trim();

    const interval = setInterval(() => {
      frameIndex = (frameIndex + 1) % frames.length;
      if (bannerRef.current)
        bannerRef.current.innerHTML = frames[frameIndex].trim();
      if (topBorderRef.current)
        topBorderRef.current.innerHTML = topBorderFrames[frameIndex].trim();
      if (botBorderRef.current)
        botBorderRef.current.innerHTML = botBorderFrames[frameIndex].trim();
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        {/* Scanlines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
            pointerEvents: "none",
          }}
        />

        {/* Screen glow / vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.8) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Screen glass frame */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "2rem",
            border: "1rem solid",
            borderTopColor: "#020202",
            borderBottomColor: "#121212",
            borderLeftColor: "#080808",
            borderRightColor: "#080808",
            boxShadow:
              "inset 0 0 18rem black, inset 0 0 3rem black, 0 0 10rem black",
            pointerEvents: "none",
          }}
        />
      </div>

      <div className="main relative flex flex-col items-center min-h-screen">
        <div className="fixed inset-0 -z-10 ">
          <Shader className="w-full h-full">
            <Aurora
              intensity={100}
              colorA="#2c2563"
              colorB="#31236e"
              colorC="#8844b3"
            />
            <Ascii characters="*" cellSize={22} fontFamily="Nova Mono">
              <CursorTrail radius={0.2} id="myMask" />
            </Ascii>
            <Dither blendMode="overlay" pixelSize={3} />
          </Shader>
        </div>
        <div className="fixed inset-0 pointer-events-none" />

        <p className="mt-10 l-black self-start">Terminal &gt;_</p>
        <p className="text-center l-black">
          ═══════════════════════════════════════════════════════════════════════════════════════════════════
        </p>
        <p className="mt-10 self-start">
          <span className="pink">visitor</span>@
          <span className="blue">portfolio</span>:~${" "}
          <span className="typewriter" ref={initRef}></span>
        </p>
        <p className="mb-3 fade1 self-start">
          Launching portfolio v0.6 in terminal.. <br />
        </p>
        <div className="fade2" style={{ textAlign: "center", width: "100%" }}>
          <div ref={topBorderRef} className="box"></div>
          <div ref={bannerRef}></div>
          <div ref={botBorderRef} className="box"></div>
        </div>

        <div
          className="small fade3 flex flex-col justify-center items-center"
          ref={navRef}
        >
          <pre>
            <span className={pageState === "about" ? "yellow" : ""}>
              ╔═══════════════╗&nbsp;
            </span>
            <span className={pageState === "links" ? "yellow" : ""}>
              ╔═══════════════╗&nbsp;
            </span>
            <span className={pageState === "skills" ? "yellow" : ""}>
              ╔═══════════════╗&nbsp;
            </span>
            <span className={pageState === "projects" ? "yellow" : ""}>
              ╔══════════════╗&nbsp;
            </span>
            <span className={pageState === "other" ? "yellow" : ""}>
              ╔══════════════╗
            </span>
          </pre>
          <div>
            <span
              onClick={() => {
                setPageState("about");
              }}
              className={`pointer ${pageState === "about" ? "yellow" : ""}`}
            >
              ║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║
            </span>
            &nbsp;
            <span
              onClick={() => {
                setPageState("links");
              }}
              className={`pointer ${pageState === "links" ? "yellow" : ""}`}
            >
              ║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║
            </span>
            &nbsp;
            <span
              onClick={() => {
                setPageState("skills");
              }}
              className={`pointer ${pageState === "skills" ? "yellow" : ""}`}
            >
              ║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skills&nbsp;&nbsp;&nbsp;&nbsp;║
            </span>
            &nbsp;
            <span
              onClick={() => {
                setPageState("projects");
              }}
              className={`pointer ${pageState === "projects" ? "yellow" : ""}`}
            >
              ║&nbsp;&nbsp;&nbsp;Projects&nbsp;&nbsp;&nbsp;║
            </span>
            &nbsp;
            <span
              onClick={() => {
                setPageState("other");
              }}
              className={`pointer ${pageState === "other" ? "yellow" : ""}`}
            >
              ║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MaaS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║
            </span>
          </div>
          <pre>
            <span className={pageState === "about" ? "yellow" : ""}>
              ╚═══════════════╝&nbsp;
            </span>
            <span className={pageState === "links" ? "yellow" : ""}>
              ╚═══════════════╝&nbsp;
            </span>
            <span className={pageState === "skills" ? "yellow" : ""}>
              ╚═══════════════╝&nbsp;
            </span>
            <span className={pageState === "projects" ? "yellow" : ""}>
              ╚══════════════╝&nbsp;
            </span>
            <span className={pageState === "other" ? "yellow" : ""}>
              ╚══════════════╝
            </span>
          </pre>
        </div>
        {pageState === "about" && <About />}
        {pageState === "links" && <Links />}
        {pageState === "projects" && <Projects />}
        {pageState === "skills" && <Skills />}
        {pageState === "other" && <Other />}
        {pageState === null && (
          <div className="small flex flex-col items-center fade4">
            <pre className="whitespace-pre-wrap break-all font-mono">
              {`╔══════════════════════════════════════════════════════════════════════╗`}
            </pre>

            <p className="my-1">&nbsp;</p>

            <p className="text-center blue break-words">
              Welcome to my portfolio.
            </p>
            <p className="text-center break-words">
              Click on a section above to get started.
            </p>

            <p className="my-1">&nbsp;</p>

            <pre className="whitespace-pre-wrap break-all font-mono">
              {`╚══════════════════════════════════════════════════════════════════════╝`}
            </pre>
          </div>
        )}
        <p className="text-center mt-10 l-black">
          ═══════════════════════════════════════════════════════════════════════════════════════════════════
        </p>
        <p className="l-black self-start mb-10">2026 © MYNA VU</p>
      </div>
    </>
  );
}

export default App;
