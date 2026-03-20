"use client";

import { Header } from "@/components/ui/header-3";

export function Navbar({ ctaUrl }: { ctaUrl?: string }) {
  return <Header ctaUrl={ctaUrl} />;
}
