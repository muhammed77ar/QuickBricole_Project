import Card from "../component/home/Card";
import CategorySection from "../component/home/CategorySection";
import Hero from "../component/home/Hero";
import Main from "../component/home/Main";
import ResentlyServeses from "../component/home/ResentlyServeses";
export default function Homee(){
  return <div className="home">
      <Hero/>
      <Card/>
      <Main/>
      <ResentlyServeses/>
      <CategorySection/>
  </div>
}
