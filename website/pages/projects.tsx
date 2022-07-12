import Slide from "../components/Slide"
import Galery from "../components/Galery"

export default function Projects() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/projects.jpg" 
        title="OUR PROJECTS"
        listItems={[
          'Our joint project with Novello srl in Uzbekistan. '
        ]}
        smallContainer
        previusSlideLink="greenhouse"
        nextSlideLink="contacts"
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