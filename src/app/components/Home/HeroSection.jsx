"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f7f7f9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center min-h-[400px]">

        {/* LEFT CONTENT (Text) */}
        <div className="px-6 md:px-12 lg:px-16 py-10 md:pt-16 md:pb-10 space-y-5 order-1">
          <h1 className="text-4xl md:text-4xl lg:text-[40px] font-bold leading-tight text-[#333333]">
            Write Under the Moon.
            <br />
            Shine Beyond the Stars.
          </h1>

          <p className="text-[#777777] max-w-md text-sm md:text-base leading-relaxed">
            A living archive of voices where ideas are planted, conversations
            bloom, and communities grow. Join the writers and thinkers who
            value connection over noise.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="/write"
              className="px-5 py-2.5 rounded-md text-white text-sm font-medium"
              style={{ backgroundColor: "#8A63F7" }}
            >
              Start Writing
            </Link>

            <Link
              href="/explore"
              className="px-5 py-2.5 rounded-md text-sm font-medium border"
              style={{
                borderColor: "#8A63F7",
                color: "#8A63F7",
              }}
            >
              Explore Stories
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[320px] md:h-full w-full overflow-hidden order-2 md:order-2 mt-6 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f9] via-[#f7f7f9]/60 to-transparent z-10" />

          <Image
            src="/images/HeroImage.png"
            alt="Writing"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
