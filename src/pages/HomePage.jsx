import Hero from "../components/home/Hero";
import Cta from "../components/home/Cta";
import HomeMain from "../components/home/HomeMain";
import MessageAnim from "../components/home/MessageAnim";

const HomePage = () => {
    return (
      <>
        <Hero />
        <HomeMain />
        <Cta />
        <MessageAnim />
      </>
    );
};

export default HomePage;
