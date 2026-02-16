import Link from "next/link";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#8A63F7] to-[#7A57E8] text-white">
      <div className="max-w-7xl mx-auto md:px-16 px-8 py-16">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-semibold">Inklune</h2>

            <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-xs">
              A living archive of voices where ideas are planted,
              conversations bloom, and communities grow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <SocialIcon>
                <Twitter size={18} />
              </SocialIcon>
              <SocialIcon>
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon>
                <Facebook size={18} />
              </SocialIcon>
              <SocialIcon>
                <Linkedin size={18} />
              </SocialIcon>
            </div>
          </div>

          {/* Explore */}
          <FooterColumn
            title="Explore"
            links={[
              "Featured Stories",
              "Categories",
              "Community Discussions",
              "Writing Resources",
              "Events & Workshops",
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              "About Us",
              "Our Team",
              "Careers",
              "Press",
              "Contact",
            ]}
          />

          {/* Legal */}
          <div className="col-span-2 md:col-span-1">
            <FooterColumn
              title="Legal"
              links={[
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
                "Content Guidelines",
                "Accessibility",
              ]}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>© 2025 Inklune. All rights reserved</p>
          <p className="mt-3 md:mt-0">
            Write Under the Moon. Shine beyond the Stars
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Components ---------- */

function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#8A63F7] hover:bg-white/90 hover:scale-105 active:scale-95 duration-200 transition cursor-pointer shadow-sm">
      {children}
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-3 text-sm text-white/80">
        {links.map((link, index) => (
          <li key={index}>
            <Link href="#" className="hover:text-white transition">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
