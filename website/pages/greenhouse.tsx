import Galery from "../components/Galery"
import Slide from "../components/Slide"

export default function Greenhouse() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/greenhouse.jpg" 
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
          '/assets/images/album/photo1.jpg',
          '/assets/images/album/photo2.jpg',
          '/assets/images/album/photo3.jpg',
          '/assets/images/album/photo4.jpg',
          '/assets/images/album/photo5.jpg',
          '/assets/images/album/photo6.jpg',
          '/assets/images/album/photo7.jpg',
          '/assets/images/album/photo8.jpg',
        ]} 
      />
    </>
  )
}