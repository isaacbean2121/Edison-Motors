import { Suspense } from "react";
import { Progress } from "@/components/ui/progress";

export default function TruckBuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-black">
          <Progress value={33} className="w-[60%]" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
