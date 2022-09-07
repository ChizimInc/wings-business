import { AppColors } from "../utils/AppConfig";
import Slide from "../components/Slide";

export default function Services() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/services.jpg" 
        title="OUR SERVICES"
        headerText="Company WINGS BUSINESS s.r.o. will be glad to offer you:"
        listItems={[
          'development of a design project of any level of complexity',
          'planting of fruit and ornamental plants, large trees',
          'hedges',
          'slides, rockeries',
          'ponds, streams, waterfalls, bridges',
          'small architectural forms',
          'pergolas, pergolas, arches, canopies',
          'lawns for various purposes (including a roll lawn)',
          'curbs, backfills, tracks and grounds on any base and with any coating',
          'retaining walls',
          'design and construction of drainage systems',
          'design and creation of irrigation systems (including auto-irrigation)',
          'designing and creating lighting systems',
          'care of the garden, planting, lawn and other'
        ]}
        smallMargin
        bigContainer
        lastLine="Our company carries out works with high quality, which is provided at the enterprise by a three-level control system “brigadier-foreman-director”. We provide a guarantee for all types of work."
        previusSlideLink="partners"
        nextSlideLink="greenhouse"
      />
    </>
  )
}