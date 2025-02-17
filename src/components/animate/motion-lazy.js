"use client";

import dynamic from "next/dynamic";
import { LazyMotion, m } from "framer-motion";

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () => import("./features.js").then((res) => res.default);

function MotionLazy({ children }) {
  return (
    <LazyMotion strict features={loadFeatures}>
      <m.div style={{ height: "100%" }}> {children} </m.div>
    </LazyMotion>
  );
}

export default dynamic(() => Promise.resolve(MotionLazy), { ssr: false });
