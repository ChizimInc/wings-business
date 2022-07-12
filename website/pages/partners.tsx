import { AppColors } from "../utils/AppConfig";
import Slide from "../components/Slide";

export default function Partners() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/partners.jpg" 
        title="OUR PARTNERS"
        listItems={[
          'Company GTS8 s.r.o. Together with Gospodăria Ţărănească “Nicolai Ţipovici” has its own plant nursery.',
          'The nursery is located in Moldova, the unique climate of which allows to grow high-quality plants. We offer varietal seedlings of various plants, perennials, seedlings of annual flowers and varietal roses, related products.',
          'GTS8 s.r.o. cooperates with leading breeding institutes and stations. The company guarantees the purity of varieties.',
          'The technical equipment of our company allows us to carry out land works of any complexity on our own.',
          'GTS8 s.r.o. waiting for you and has the technical capabilities to implement your wildest ideas for landscape design and landscaping.',
          'Also, our partner is well-known Italian company Novello srl. \n Via S.Antonio, 162 \n 5018 Montichiari BRESCIA \n mail: amministrazione@novello.eu'
        ]}
        previusSlideLink="about"
        nextSlideLink="services"
      />
    </>
  )
}