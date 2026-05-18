"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ReviewOrderPage() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    lights: searchParams.get("lights") ?? "",
    steeringWheel: searchParams.get("steeringWheel") ?? "",
    mirrors: searchParams.get("mirrors") ?? "",
    fifthWheel: searchParams.get("fifthWheel") ?? "",
    pto: searchParams.get("pto") ?? "",
    battery_pack: searchParams.get("battery_pack") ?? "",
    generator_pack: searchParams.get("generator_pack") ?? "",
    frame_rail: searchParams.get("frame_rail") ?? "",
    wheelbase: searchParams.get("wheelbase") ?? "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 pt-24">
      <form
        onSubmit={handleSubmitOrder}
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
        <h1 className="mb-4 text-2xl font-bold">Review Order</h1>
        <div className="mb-4 space-y-1">
          <p>Lights: {formData.lights || "—"}</p>
          <p>Steering Wheel: {formData.steeringWheel || "—"}</p>
          <p>Mirrors: {formData.mirrors || "—"}</p>
          <p>Fifth Wheel: {formData.fifthWheel || "—"}</p>
          <p>PTO: {formData.pto || "—"}</p>
          <p>Battery Pack: {formData.battery_pack || "—"}</p>
          <p>Generator: {formData.generator_pack || "—"}</p>
          <p>Frame Rail: {formData.frame_rail || "—"}</p>
          <p>Wheelbase: {formData.wheelbase || "—"}</p>
        </div>
        {submitted ? (
          <p className="text-center font-medium text-green-700">
            Order placed (demo — not saved to a database).
          </p>
        ) : (
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
