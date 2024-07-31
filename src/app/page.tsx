import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import { Banner } from "@/components/banner";
import ChooseUs from "@/components/chooseUs";
import ConnectCompany from "@/components/connectCompany";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto">
      <Banner />
      <Services />
      <Pricing />
      <Testimonial />
      <ChooseUs />
      <Portfolio />
      <ConnectCompany />
      <Footer />
    </section>
  );
}
