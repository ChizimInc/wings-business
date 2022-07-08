import Slide from "../components/Slide";

export default function About() {
  return (
    <>
    <Slide 
      image="/assets/images/slides/about.svg" 
      title="ABOUT COMPANY"
      listItems={[
        'GTS8 s.r.o., in a short time has won an impeccable reputation in the field of landscaping and landscaping.',
        'Our organization provides a wide range of services in the sphere of landscaping, design and improvement of territories.',
        'Here you can order both different kinds of plants and their planting, as well as landscape design.',
        'Entrust your garden to the hands of professionals. A large staff of highly qualified professionals will be happy to provide you with landscape design, landscaping and landscaping at a high level. '
      ]}
      previusSlideLink="/"
      nextSlideLink="partners"
    />
    </>
  )
}