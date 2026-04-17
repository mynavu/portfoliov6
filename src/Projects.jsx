import { useRef, useEffect } from "react";

export const Projects = () => {
  return (
    <div className="small banner flex flex-col items-center justify-center">
      <pre>
        {`╔═══════════════════════════════════════════════════════════════════════╗`}
      </pre>
      <div className="smallest">
        <p>&nbsp;</p>
        <p className="flex justify-center gap-8">
          <span class="green">◆ Completed</span>{" "}
          <span class="yellow">◆ Developing</span>{" "}
          <span class="blue">◆ Paused</span> <span class="red">◆ Archived</span>
        </p>
        <p>&nbsp;</p>
        <a href="https://info-page-eight.vercel.app/" target="_blank">
          <span class="yellow group">
            <span className="group-hover:hidden">⬦</span>
            <span className="hidden group-hover:inline">⬥</span> Yield
            Information Page
          </span>{" "}
          - React, TypeScript, Node.js, Wagmi, Reown AppKit
        </a>
        <p className="font-thin">
          ↳ Informs the aggregated yields (supply and borrow APYs) of USDT,
          USDC, BTC, ETH, and SOL coins from the DeFi sites (AAVE, Kamino,
          Compound, Spark) with the highest yields in the market.
        </p>
        <p>&nbsp;</p>
        <a
          href="https://chromewebstore.google.com/detail/ai-bro-ai-summaries-and-a/nkknmlgpnldkifjejcmhllffgmkjpnbo"
          target="_blank"
        >
          <span class="green group">
            <span className="group-hover:hidden">⬦</span>
            <span className="hidden group-hover:inline">⬥</span> AI Bro
          </span>{" "}
          - Gemini API, Javascript
        </a>
        <p className="font-thin">
          ↳ AI powered web extension that give text explainations and summaries
          using Gen Alpha/Z dialect.
        </p>
        <p>&nbsp;</p>
        <a href="https://gitlab.pavlovia.org/Myna/goldenratio" target="_blank">
          <span class="green group">
            <span className="group-hover:hidden">⬦</span>
            <span className="hidden group-hover:inline">⬥</span> Golden Ratio
            Experiment
          </span>{" "}
          - PsychoPy
        </a>
        <p className="font-thin">
          ↳ Research experiment on human preference for the Golden Ratio.
        </p>
        <p>&nbsp;</p>
        <a href="https://whoizit.netlify.app/" target="_blank">
          <span class="yellow group">
            <span className="group-hover:hidden">⬦</span>
            <span className="hidden group-hover:inline">⬥</span> WhoIzIt?
          </span>{" "}
          - React.js, Supabase, Tailwind CSS
        </a>
        <p className="font-thin">
          ↳ Web version of the board game “Guess Who?” with customizable sets
          and realtime connection.
        </p>
        <p>&nbsp;</p>
        <a href="https://github.com/mynavu/RedTakes" target="_blank">
          <span class="red group">
            <span className="group-hover:hidden">⬦</span>
            <span className="hidden group-hover:inline">⬥</span> RedTakes
          </span>{" "}
          - React.js, Supabase
        </a>
        <p className="font-thin">
          ↳ Tool that takes inputs (keyword, subreddit, flare) and analyzes the
          sentiment of Reddit users, then visualizes it with a pie chart.
        </p>
        <p>&nbsp;</p>
        <a href="https://globit.netlify.app/" target="_blank">
          <span class="green group">
            <span className="group-hover:hidden">⬦</span>
            <span className="hidden group-hover:inline">⬥</span> Globit
          </span>{" "}
          - Javascript, Supabase
        </a>
        <p className="font-thin">
          ↳ Full stack CRUD app for users to geotag images onto a personal globe
          + collectable digital stamps for each post on a siginificant region.
        </p>
        <p>&nbsp;</p>
        <p className="text-center font-thin">
          view more on my{" "}
          <a
            className="green font-bold"
            href="https://github.com/mynavu"
            target="_blank"
          >
            GitHub
          </a>
        </p>
        <p>&nbsp;</p>
      </div>
      <pre>
        {`╚══════════════════════════════════════════════════════════════════════╝`}
      </pre>
    </div>
  );
};
