"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Bibian from "../../../../public/images/blogImages/Bibian.png";
import Maryann from "../../../../public/images/blogImages/Maryann.png";
import Albert from "../../../../public/images/blogImages/Albert.png";
import Korede from "../../../../public/images/blogImages/Korede.png";

export default function CommunityVoices() {
  const discussions = [
    {
      name: "Bibian",
      image: Bibian,
      time: "2 hours ago",
      tag: "Craft & Technique",
      title:
        "How do you overcome writer’s block when on a deadline?",
      desc:
        "I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community?",
    },
    {
      name: "Bibian",
      image: Bibian,
      time: "2 hours ago",
      tag: "Craft & Technique",
      title:
        "How do you overcome writer’s block when on a deadline?",
      desc:
        "I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community?",
    },
  ];

  const writers = [
    {
      name: "Maryann",
      role: "Poetry & Memoir",
      image: Maryann,
    },
    {
      name: "Albert",
      role: "Literary Fiction",
      image: Albert,
    },
    {
      name: "Korede",
      role: "Cultural Essay",
      image: Korede,
    },
  ];

  const tags = [
    "#WritingLife",
    "#CreativeProcess",
    "#Poetry",
    "#Love",
    "#VentureCapital",
    "#WritingCommunity",
    "#Inspiration",
    "#LiteraryLife",
    "#TraumaHealing",
    "#Gaming",
    "#WritingTips",
    "#Fiction",
  ];

  return (
    <section className="w-full bg-[#f5f5f7] md:py-20 py-8">
      <div className="max-w-7xl mx-auto px-0 lg:px-16">

     
        <h2 className="text-center text-2xl font-semibold text-[#333] mb-6 md:mb-12">
          Community Voices
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-[#ECEAF3] rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-6 text-[#333]">
              Trending Discussions
            </h3>

            <div className="space-y-6">
              {discussions.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-xl p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm text-[#333]">
                          {post.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {post.time}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs bg-[#ECEAF3] px-3 py-1 rounded-full text-[#555]">
                      {post.tag}
                    </span>
                  </div>
 
                  <h4 className="font-semibold text-[#333] mb-2">
                    {post.title}
                  </h4>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {post.desc}
                  </p>

                  <div className="flex justify-end mt-4">
                    <button className="text-sm text-[#6B5DD3] font-medium hover:underline">
                      Join Discussion
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="text-sm font-medium text-[#333] hover:underline">
                View All Discussions
              </button>
            </div>
          </div>

          <div className="bg-[#ECEAF3] rounded-2xl p-6 space-y-8">

            <div>
              <h3 className="font-semibold text-lg mb-5 text-[#333]">
                Featured Writers
              </h3>

              <div className="space-y-4">
                {writers.map((writer, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={writer.image}
                          alt={writer.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-sm text-[#333]">
                          {writer.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {writer.role}
                        </p>
                      </div>
                    </div>

                    <button className="text-xs bg-[#DCD7EA] px-4 py-1 rounded-full text-[#333] hover:bg-[#cfc9e6] transition">
                      Follow
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* TAGS */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-[#333]">
                Popular Tags
              </h3>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#DCD7EA] px-3 py-1 rounded-full text-[#444]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
