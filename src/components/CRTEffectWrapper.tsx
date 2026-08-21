"use client";

import dynamic from "next/dynamic";

const CRTEffect = dynamic(() => import("./CRTEffect"), {
  ssr: false,
});

export default function CRTEffectWrapper() {
  return <CRTEffect />;
}
