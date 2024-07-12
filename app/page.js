import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/database";
const Home = async () => {
  await connectDB();
  return (
    <main>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </main>
  );
};
export default Home;
