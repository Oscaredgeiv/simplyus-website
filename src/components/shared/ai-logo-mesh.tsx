"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  AI Logo Mesh — exact brand logos in an orbital constellation       */
/*  with glowing connections, animated pulses, and depth layers.       */
/* ------------------------------------------------------------------ */

/* Exact SVG paths from Simple Icons (simpleicons.org) */

function OpenAILogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.042 6.042 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071.005l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071-.006l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.66zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

function ClaudeLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
    </svg>
  );
}

function GeminiLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
    </svg>
  );
}

function MetaLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
    </svg>
  );
}

function PerplexityLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
    </svg>
  );
}

function CopilotLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z" />
    </svg>
  );
}

/* Logo positions — hexagonal ring centered at (50, 50)
   Radius ~35 units, 6 points evenly spaced at 60 degree intervals */
const logos = [
  { Logo: OpenAILogo, label: "OpenAI", cx: 50, cy: 15 },             // top
  { Logo: ClaudeLogo, label: "Claude", cx: 80.3, cy: 32.5 },         // top-right
  { Logo: GeminiLogo, label: "Gemini", cx: 80.3, cy: 67.5 },         // bottom-right
  { Logo: MetaLogo, label: "Meta AI", cx: 50, cy: 85 },               // bottom
  { Logo: PerplexityLogo, label: "Perplexity", cx: 19.7, cy: 67.5 }, // bottom-left
  { Logo: CopilotLogo, label: "Copilot", cx: 19.7, cy: 32.5 },       // top-left
];

/* Connection pairs — full mesh */
const connections: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 2], [0, 3], [0, 4],
  [1, 3], [1, 4], [1, 5],
  [2, 4], [2, 5],
  [3, 5],
];

export function AILogoMesh({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#080810] ${className}`}
      style={{ minHeight: "100%" }}
    >
      {/* Deep background gradient layers */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.10) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 80% at 20% 20%, rgba(249,115,22,0.04) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 80% at 80% 80%, rgba(249,115,22,0.04) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 35%)",
          ].join(", "),
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* SVG connection layer */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          {/* Gradient for connection lines */}
          <linearGradient id="mesh-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#F97316" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
          </linearGradient>

          {/* Glow filter for pulses */}
          <filter id="pulse-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Node outer glow */}
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
            </feMerge>
          </filter>

          {/* Center radial glow */}
          <radialGradient id="center-glow" cx="50%" cy="50%" r="20%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Center ambient glow */}
        <circle cx="50" cy="50" r="25" fill="url(#center-glow)" />

        {/* Connection lines */}
        {connections.map(([a, b], i) => {
          const from = logos[a];
          const to = logos[b];
          const isOuter = i < 6;
          return (
            <motion.line
              key={`conn-${i}`}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke="#F97316"
              strokeOpacity={isOuter ? 0.15 : 0.06}
              strokeWidth={isOuter ? 0.35 : 0.2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.4 + i * 0.08,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Traveling energy pulses along outer ring */}
        {connections.slice(0, 6).map(([a, b], i) => {
          const from = logos[a];
          const to = logos[b];
          return (
            <motion.circle
              key={`energy-${i}`}
              r="0.8"
              fill="#F97316"
              filter="url(#pulse-glow)"
              initial={{
                cx: from.cx,
                cy: from.cy,
                opacity: 0,
              }}
              animate={{
                cx: [from.cx, to.cx],
                cy: [from.cy, to.cy],
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                duration: 2.5 + i * 0.3,
                repeat: Infinity,
                repeatDelay: 1 + i * 0.8,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          );
        })}

        {/* Inner cross-connections — slower, dimmer pulses */}
        {connections.slice(6).map(([a, b], i) => {
          const from = logos[a];
          const to = logos[b];
          return (
            <motion.circle
              key={`inner-pulse-${i}`}
              r="0.5"
              fill="#F97316"
              filter="url(#pulse-glow)"
              initial={{
                cx: from.cx,
                cy: from.cy,
                opacity: 0,
              }}
              animate={{
                cx: [from.cx, to.cx],
                cy: [from.cy, to.cy],
                opacity: [0, 0.4, 0.4, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                repeatDelay: 2 + i * 1.2,
                ease: "easeInOut",
                delay: 2 + i * 0.9,
              }}
            />
          );
        })}

        {/* Orbital glow rings around each node */}
        {logos.map((l, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={l.cx}
            cy={l.cy}
            r="9"
            fill="none"
            stroke="#F97316"
            strokeWidth="0.3"
            filter="url(#node-glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.2, 0.05] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Logo nodes — positioned as absolute elements for crisp rendering */}
      {logos.map((l, i) => (
        <motion.div
          key={l.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${l.cx}%`,
            top: `${l.cy}%`,
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.6 + i * 0.12,
            ease: [0.25, 0.4, 0, 1],
          }}
        >
          {/* Ambient glow behind card */}
          <div
            className="pointer-events-none absolute inset-0 -m-3 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Logo card */}
          <div className="group relative flex flex-col items-center gap-1.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0f0f18]/90 p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-300 hover:border-[#F97316]/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.2),0_4px_20px_rgba(0,0,0,0.5)] sm:h-14 sm:w-14 sm:rounded-2xl sm:p-3">
              <l.Logo className="h-full w-full text-white/90 transition-colors duration-300 group-hover:text-white" />
            </div>
            <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/30 transition-colors duration-300 group-hover:text-white/60 sm:text-[10px]">
              {l.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Center hub — "AI" text */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.4, 0, 1] }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F97316]/20 bg-[#F97316]/5 shadow-[0_0_40px_rgba(249,115,22,0.1)] sm:h-12 sm:w-12">
          <span className="text-sm font-bold tracking-wider text-[#F97316] sm:text-base">
            AI
          </span>
        </div>
      </motion.div>

      {/* Bottom fade to blend with card content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#111111] to-transparent" />
    </div>
  );
}