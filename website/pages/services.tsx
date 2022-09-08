import { AppColors } from "../utils/AppConfig";
import Slide from "../components/Slide";

export default function Services() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/services.jpg" 
        title="OUR SERVICES"
        headerText="Company WINGS BUSINESS s.r.o. will be glad to offer you:"
        contentText="Wholesale of grain and oilseeds to grain exporters, grain traders, end consumers. We form and offer for sale batches of grain and oilseeds at linear elevators and at manufacturers' granaries. Experience in sales, partnerships with many flour mills and feed mills."
        smallMargin
        bigContainer
        lastLine="Our company carries out works with high quality, which is provided at the enterprise by a three-level control system “brigadier-foreman-director”. We provide a guarantee for all types of work."
        previusSlideLink="partners"
        nextSlideLink="greenhouse"
      />
    </>
  )
}