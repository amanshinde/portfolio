import type { Metadata } from "next";
import Logos from "@/components/Logos";

export const metadata: Metadata = {
  title: "Brand & Logo Design — Aman Shinde",
  description: "Identity design and logo systems for healthcare, commercial, and artisan brands.",
};

export default function DesignPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <Logos />
    </div>
  );
}
