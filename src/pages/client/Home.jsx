import HeroSection from "../../components/client/HeroSection";
import FeaturedInsights from "../../components/client/FeaturedInsights";
import ServicesSection from "../../components/client/ServicesSection";
import TrainingServices from "../../components/client/TrainingServices";
import AboutSection from "../../components/client/AboutSection";
import TeamSection from "../../components/client/TeamSection";
import TestimonialSection from "../../components/client/TestimonialSection";
import FeedbackFormImage from "../../components/client/FeedbackFormImage";


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
