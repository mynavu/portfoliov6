import { useRef, useEffect, useState } from "react";

export const About = () => {
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const [hat, setHat] = useState(0);
  const hats = ["🧢", "👒", "🎩", "🎓", "👑"];
  const roles = [
    "full-stack eng",
    "front-end eng",
    "web dev",
    "student",
    "designer",
  ];

  useEffect(() => {
    if (contentRef1.current) {
      contentRef1.current.innerHTML = `
<pre>
   ◯ 
  /|&#92; 
  / &#92; 
</pre>
          `;

      contentRef2.current.innerHTML = `
          <pre>
  
GPA: <span class="green">░░░▒▒▒▓▓▓█████████████████ 90%</span>
  
Realness: <span class="pink">░░░▒▒▒▓▓▓█████████████████████████ 120%</span>

Humor: <span class="blue">░░▒▒▓▓ 10% <span class="red"> ⚠︎ Low </span></span>
  

          </pre>

          `;
    }
  }, []);

  return (
    <div className="small banner flex flex-col items-center">
      <pre>
        {`╔═══════════════════════════════════════════════════════════════════════╗`}
      </pre>
      <p>&nbsp;</p>
      <br />
      <p className="font-thin">Hello! I'm a software developer</p>
      <p className="font-thin">
        who wears many hats. Click on each hat to see.
      </p>
      <p className="font-thin">\</p>
      <p>
        &nbsp;
        <span
          onClick={() => {
            setHat((prev) => prev + 1);
          }}
          className="pointer text-sm"
        >
          {hats[hat % hats.length]}
        </span>
      </p>
      <div ref={contentRef1} className="banner"></div>
      <br />
      <p className="text-center font-thin">&nbsp;{roles[hat % hats.length]}</p>
      <div ref={contentRef2} className="banner"></div>
      <pre>
        {`╚══════════════════════════════════════════════════════════════════════╝`}
      </pre>
    </div>
  );
};
