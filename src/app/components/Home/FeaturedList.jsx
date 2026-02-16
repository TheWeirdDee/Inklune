"use client";

import Image from "next/image";
import BlogMarketing from "../../../../public/images/blogImages/BlogMarketing.png";
import BlogBitcoin from "../../../../public/images/blogImages/BlogBitcoin.png";
import BlogWriting from "../../../../public/images/blogImages/BlogMarketing.png";
import BlogProfileOne from "../../../../public/images/blogImages/BlogProfileOne.png";
import BlogProfileTwo from "../../../../public/images/blogImages/BlogProfileTwo.png";
import BlogProfileThree from "../../../../public/images/blogImages/BlogProfileThree.png";


export default function FeaturedList() {
    const posts = [
        {
            title: "How to create marketing campaigns that actually convert",
            desc: "Learn how to craft messages that drive action and deliver results",
            image: BlogMarketing,
            profile: BlogProfileOne,

        },
        {
            title: "Why building a memorable brand is more than just a logo",
            desc: "Discover the elements that make a brand stand out in a crowded market",
            image: BlogBitcoin,
            profile: BlogProfileTwo,
        },
        {
            title: "Why building a memorable brand is more than just a logo",
            desc: "Discover the elements that make a brand stand out in a crowded market",
            image: BlogWriting,
            profile: BlogProfileThree,
        },
    ];

    return (
        <section className="w-full bg-[#f5f5f7] py-14">
            <div className="max-w-7xl mx-auto px-0 lg:px-16">

                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Featured List
                    </h2>

                    <div className="bg-[#BCB2DA4D] rounded-full p-1 flex gap-1 text-sm">
                        <button className="px-4 py-1.5 bg-white text-[#333333] rounded-full shadow-sm">
                            Latest
                        </button>
                        <button className="px-4 py-1.5 text-[#333333]">
                            Popular
                        </button>
                    </div>
                </div>

                {/* CARDS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {posts.map((post, index) => (
                        <article key={index} className="group">

                            {/* IMAGE CARD */}
                            <div className="relative h-[230px] overflow-hidden rounded-2xl">

                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    priority={index === 0}
                                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* META */}
                                <div className="absolute bottom-[-5] md:bottom-0 md:left-2 left-0 flex items-center gap-2 z-10">
                                    <div className="relative w-7 h-7 rounded-full overflow-hidden shadow-sm">
                                        <Image
                                            src={post.profile}
                                            alt="Author"
                                            fill
                                            sizes="28px"
                                            className="object-cover"
                                        />
                                    </div>


                                    <div className="flex gap-2 text-[10px] text-[#5A5A59]">
                                        <span className="bg-white border border-[#1313131A] px-2 py-1 rounded-full">
                                            Campaign
                                        </span>
                                        <span className="bg-white px-2 py-1 rounded-full shadow-sm">
                                            6min read
                                        </span>
                                    </div>
                                </div>

                            </div>

                            {/* TEXT */}
                            <h3 className="mt-3 font-semibold text-gray-900 leading-snug transition group-hover:text-[#8A63F7]">
                                {post.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                {post.desc}
                            </p>

                        </article>
                    ))}
                </div>
            </div>
<div className="flex justify-center mt-6">
  <a
    href="/blog"
    className="px-3 py-3 rounded-sm border border-[#8A63F7] text-[#333333] font-medium transition-all duration-300 hover:bg-[#8A63F7] hover:text-white hover:border-[#8A63F7]"
  >
    View more stories
  </a>
</div>

        </section>
    );
}
