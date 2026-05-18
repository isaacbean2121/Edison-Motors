import { Suspense } from "react";

export default function ReviewOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<div className="pt-24 text-center">Loading…</div>}>{children}</Suspense>;
}
