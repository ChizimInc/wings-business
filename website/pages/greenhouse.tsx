import Galery from "../components/Galery"
import Slide from "../components/Slide"

export default function Greenhouse() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/greenhouse.svg" 
        title="OUR GREENHOUSE"
        listItems={[
          'Company GTS8 s.r.o. Together with Gospodăria Ţărănească “Nicolai Ţipovici” has its own plant nursery.',
          'The nursery is located in Moldova, the unique climate of which allows to grow high-quality plants. We offer varietal seedlings of various plants, perennials, seedlings of annual flowers and varietal roses, related products.',
        ]}
        smallContainer
        previusSlideLink="services"
        nextSlideLink="projects"
      />
      <Galery 
        album={[
          '/assets/images/album/photo1.svg',
          '/assets/images/album/photo2.svg',
          '/assets/images/album/photo3.svg',
          '/assets/images/album/photo4.svg',
          '/assets/images/album/photo5.svg',
          '/assets/images/album/photo6.svg',
          '/assets/images/album/photo7.svg',
          '/assets/images/album/photo8.svg',
        ]} 
      />
    </>
  )
}