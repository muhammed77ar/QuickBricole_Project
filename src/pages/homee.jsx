import Card from "../component/home/Card";
import CategorySection from "../component/home/CategorySection";
import Hero from "../component/home/Hero";
import Main from "../component/home/Main";
import NewsSubscription from "../component/home/NewsSubscription";
import ProfionellsSlider from "../component/home/ProfionellsSlider";
import ResentlyServeses from "../component/home/ResentlyServeses";
export default function Homee(){
  return <div className="home">
      <Hero/>
      <Card/>
      <Main/>
      <ResentlyServeses/>
      <CategorySection/>
      <ProfionellsSlider/>
      <NewsSubscription/>
  </div>
}
