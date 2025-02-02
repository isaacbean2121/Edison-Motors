"use client";
import React from "react";
import Hero from "../components/Hero";
import five from "../public/assets/LandingPage/LandingPage2.jpg";
import seven from "../public/assets/LandingPage/LandingPage3.jpg";
import front from "../public/assets/LandingPage/front.jpg";
import fivetandem from "../public/assets/500Info/500Info1.jpg";
import Link from "next/link";
import TruckBuild from "@/app/truck-build/page";

export default function Home() {
  return (
    <div>
      <div
        className="snap-y snap-mandatory h-screen overflow-auto"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="snap-start">
          <video
            className="w-full h-screen object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/assets/video/EDISON_CINEMATICS.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <Hero
          title="500 Series"
          subtitle="Explore our range of products"
          image={five.src}
          buttonBuild={
            <Link
              href={{ pathname: "/truck-build/", query: { truckId: 500 } }}
            >
              Build yours
            </Link>
          }
          buttonLearn={
            <Link
              href={{ pathname: "/500info" }}
            >
              Learn More
            </Link>
          }
        />
        <Hero
          title="750 Series"
          subtitle="Explore our range of products"
          image={seven.src}
          buttonBuild={
            <Link
              href={{ pathname: "/truck-build/", query: { truckId: 750 } }}
            >
              Build yours
            </Link>
          }
          buttonLearn={
            <Link
              href={{ pathname: "/750info" }}
            >
              Learn More
            </Link>
          }
        />
      </div>
    </div>
  );
}
