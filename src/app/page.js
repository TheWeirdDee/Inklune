import Navbar from "./components/Home/Navbar";
import HeroSection from "./components/Home/HeroSection";
import FeaturedList from "./components/Home/FeaturedList";
import ExploreCategories from "./components/Home/ExploreCategories";
import CommunityVoices from "./components/Home/CommunityVoices";
import CommunityCallToAction from "./components/Home/CommunityCallToAction";
import Subscribe from "./components/Home/Subscribe";
import Footer from "./components/Home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedList />
      <ExploreCategories />
      <CommunityVoices />
      <CommunityCallToAction />
      <Subscribe />
      <Footer />
    </main>
  );
}
