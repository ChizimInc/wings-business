import Slide from "../components/Slide"
import Galery from "../components/Galery"

export default function Projects() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/projects.svg" 
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