"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CommunityCTA from "../../../../public/images/VoicebgImage.png";

export default function CommunityCallToAction() {
  return (
    <section className="w-full py-1 bg-[#8A63F7CC]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
    
          <Image
            src={CommunityCTA}
            alt="Community Voices"
            fill
            priority
            className="object-cover"
          />

          
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B5DD3]/90 via-[#7C6AE6]/85 to-[#6B5DD3]/90" />

          
          <div className="relative z-10 flex flex-col items-center text-center py-16 px-6 text-white">

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Share Your Voice?
            </h2>

            <p className="max-w-2xl text-sm md:text-base text-white/90 mb-8">
              Join a community of thoughtful writers and readers who value
              authentic connection and meaningful conversation.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">

              <button className="px-6 py-3 rounded-lg bg-white text-[#8A63F7] font-medium hover:bg-white/90 transition">
                Create Account
              </button>

              <button className="px-6 py-3 rounded-lg border border-white/70 text-white font-medium hover:bg-white/10 transition">
                Learn more
              </button>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
