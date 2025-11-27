// export default function BlobBackground() {
//   return (
//     <div className="blob-bg">
//       <svg className="blob blob1" viewBox="0 0 600 600">
//         <path fill="#ffd6e0">
//           <animate attributeName="d" dur="10s" repeatCount="indefinite"
//             values="
//               M421,325Q401,400,325,436Q249,472,190,426Q131,380,115,300Q99,220,164,172Q229,124,308,132Q387,140,417,220Q447,300,421,325Z;
//               M439,339Q424,428,338,453Q252,478,189,429Q126,380,122,300Q118,220,187,180Q256,140,330,151Q404,162,433,231Q462,300,439,339Z;
//               M421,325Q401,400,325,436Q249,472,190,426Q131,380,115,300Q99,220,164,172Q229,124,308,132Q387,140,417,220Q447,300,421,325Z
//             ">
//           </animate>
//         </path>
//       </svg>

//       <svg className="blob blob2" viewBox="0 0 600 600">
//         <path fill="#d6eaff">
//           <animate attributeName="d" dur="12s" repeatCount="indefinite"
//             values="
//               M400,300Q380,380,300,420Q220,460,160,410Q100,360,110,290Q120,220,170,160Q220,100,300,130Q380,160,400,230Q420,300,400,300Z;
//               M390,310Q360,380,300,420Q240,460,180,420Q120,380,120,300Q120,220,180,170Q240,120,300,150Q360,180,390,240Q420,300,390,310Z;
//               M400,300Q380,380,300,420Q220,460,160,410Q100,360,110,290Q120,220,170,160Q220,100,300,130Q380,160,400,230Q420,300,400,300Z
//             ">
//           </animate>
//         </path>
//       </svg>
//     </div>
//   );
// }

import React from "react";
import "./background.css";

// Iridescent SVG background component
// Usage: import IridescentWavesBackground from './IridescentWavesBackground'
// <IridescentWavesBackground className="absolute inset-0 -z-10" />

export default function IridescentWavesBackground({ className = "", style = {}, ariaLabel = "Iridescent wavy background" }) {
    return (
        <div className="bg-wrapper">
        <svg
            className={`bg-waves ${className}`}
            style={style}
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label={ariaLabel}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* Soft iridescent gradients */}
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#b3f0ff" stopOpacity="1" />
                    <stop offset="35%" stopColor="#d6b3ff" stopOpacity="1" />
                    <stop offset="65%" stopColor="#ffe7b3" stopOpacity="1" />
                    <stop offset="100%" stopColor="#b3ffd9" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="grad2" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffd6f0" stopOpacity="1" />
                    <stop offset="30%" stopColor="#cfe9ff" stopOpacity="1" />
                    <stop offset="70%" stopColor="#c7ffd6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffd9b3" stopOpacity="1" />
                </linearGradient>

                {/* subtle blur for smoothing transitions */}
                <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="18" result="b" />
                    <feBlend in="SourceGraphic" in2="b" mode="normal" />
                </filter>

                {/* thin highlight gradient to simulate sheen */}
                <radialGradient id="sheen" cx="30%" cy="20%" r="70%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                    <stop offset="40%" stopColor="#ffffff" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>

                {/* soft shadow to ground the shapes */}
                <linearGradient id="shadow" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#000" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* background base */}
            <rect width="100%" height="100%" fill="#f6f7fb" />

            {/* large wavy shapes (multiple layers create depth) */}
            <g filter="url(#softBlur)">
                <path
                    d="M0 580 C160 460 240 460 420 540 C600 620 760 420 940 500 C1120 580 1280 360 1600 420 L1600 900 L0 900 Z"
                    fill="url(#grad1)"
                    opacity="0.96"
                />

                <path
                    d="M0 660 C160 540 320 520 520 620 C720 720 880 480 1060 560 C1240 640 1380 420 1600 500 L1600 900 L0 900 Z"
                    fill="url(#grad2)"
                    opacity="0.9"
                />

                <path
                    d="M0 500 C180 380 340 360 540 460 C740 560 920 340 1120 420 C1320 500 1440 300 1600 380 L1600 900 L0 900 Z"
                    fill="url(#grad1)"
                    opacity="0.65"
                />

                {/* foreground smaller smoother wave */}
                <path
                    d="M0 720 C220 620 420 580 620 680 C820 780 980 520 1180 620 C1380 720 1500 540 1600 620 L1600 900 L0 900 Z"
                    fill="url(#grad2)"
                    opacity="0.98"
                />
            </g>

            {/* sheen overlay to simulate iridescence */}
            <rect width="100%" height="100%" fill="url(#sheen)" opacity="0.6" />

            {/* faint shadow to add depth near bottom */}
        
        </svg>
        </div>
    );
}
