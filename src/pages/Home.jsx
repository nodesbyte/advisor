import HeroSection from "../components/HeroSection";
import FeaturedInsights from "../components/FeaturedInsights";
import ServicesSection from "../components/ServicesSection";
import TrainingServices from "../components/TrainingServices";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/TestimonialSection";
import FeedbackFormImage from "../components/FeedbackFormImage";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection isHomePage={true}/>
      <FeaturedInsights  />
      <ServicesSection />
      <TrainingServices />
      <TeamSection />
      <TestimonialSection />
      <FeedbackFormImage />

    </>
  );
}
