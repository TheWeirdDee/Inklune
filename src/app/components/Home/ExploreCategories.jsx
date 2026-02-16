"use client";

import { motion } from "framer-motion";
import {
  Feather,
  BookOpen,
  Lightbulb,
  Wrench,
  Mic,
  Briefcase,
  Heart,
  Clock,
} from "lucide-react";

export default function ExploreCategories() {
  const categories = [
    {
      title: "Creative Writing",
      desc: "fiction, poetry and narrative explorations",
      icon: Feather,
    },
    {
      title: "Literal Analysis",
      desc: "Deep dives into themes, styles, and meanings",
      icon: BookOpen,
    },
    {
      title: "Personal Growth",
      desc: "Self-discovery through the written word",
      icon: Lightbulb,
    },
    {
      title: "Craft & Techniques",
      desc: "Mastering the tools of effective writing",
      icon: Wrench,
    },
    {
      title: "Cultural Commentary",
      desc: "Perspectives on society and human experience",
      icon: Mic,
    },
    {
      title: "Professional Writing",
      desc: "Career insights for writers and editors",
      icon: Briefcase,
    },
    {
      title: "Wellness & Mindfulness",
      desc: "Writing as a path to mental wellbeing",
      icon: Heart,
    },
    {
      title: "Historical Perspective",
      desc: "Learning from writers across time",
      icon: Clock,
    },
  ];

  return (
    <section className="w-full bg-[#ECEAF3] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-semibold text-[#212126] mb-10 mt-5"
        >
          Explore Categories
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="bg-white rounded-2xl p-8 text-center cursor-pointer transition-shadow hover:shadow-lg"
              >
            
                <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#DCD7EA]">
                  <Icon size={22} className="text-[#4B4B4B]" />
                </div>

                <h3 className="font-semibold text-[#333333] mb-2">
                  {cat.title}
                </h3>

                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {cat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
