import Slide from "../components/Slide"

export default function Contacts() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/contacts.jpg" 
        title="CONTACTS"
        listItems={[
          'WINGS BUSINESS s.r.o.',
          'IDNO (IČO): 50 575 384',
          'Adres: Mickiewiczova 16',
          'Bratislava 811 07 Slovakia',
          'EUR IBAN: SK7475000000004025759062',
          'info@wingsbusiness.eu'
        ]}
        smallMargin
        previusSlideLink="products"
        nextSlideLink="about"
      />
    </>
  )
}