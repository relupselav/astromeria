import React from "react";
import "./background.css";

// export default function IridescentBackground({ bubbles = 10 }) {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
//       {Array.from({ length: bubbles }).map((_, i) => {
//         const size = Math.random() * 180 + 160;

//         return (
//           <div
//             key={i}
//             className="absolute rounded-full bubble"
//             style={{
//               width: size,
//               height: size,
//               top: `${Math.random() * 90}%`,
//               left: `${Math.random() * 90}%`,
//               opacity: 0.55,

//               /* --- CAPA DE BORDE IRIDISCENTE --- */
//               background: `
//                 radial-gradient(circle at 70% 30%,
//                   rgba(255,255,255,0.9) 0%,          /* highlight */
//                   rgba(255,255,255,0.2) 20%,         /* brillo interno */
//                   rgba(255,255,255,0) 30%            /* centro transparente */
//                 ),
//                 conic-gradient(
//                   from 0deg,
//                   #ff9ce6,
//                   #c3e4ff,
//                   #fff1a8,
//                   #dab6ff,
//                   #ff9ce6
//                 )
//               `,

//               backgroundBlendMode: "screen",

//               /* Suave transparencia del centro */
//               mixBlendMode: "soft-light",

//               /* Reflejo suave */
//               boxShadow: "0 0 35px rgba(255,255,255,0.4) inset",

//               borderRadius: "50%",
//               animationDelay: `${Math.random() * 6}s`,
//               animationDuration: `${10 + Math.random() * 12}s`,
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }

export default function IridescentBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
    <div className="bg-bubble bubble1"></div>
<div className="bg-bubble bubble2"></div>
<div className="bg-bubble bubble3"></div>
<div className="bg-bubble bubble4"></div>

{/* nuevas burbujas centrales */}
<div className="bg-bubble bubble5"></div>
<div className="bg-bubble bubble6"></div>
<div className="bg-bubble bubble7"></div>
    </div>
  );
}

