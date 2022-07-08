import Slide from "../components/Slide"

export default function Contacts() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/contacts.svg" 
        title="CONTACTS"
        listItems={[
          'GTS 8 s.r.o.',
          'IDNO (IČO): 50 575 384',
          'Adres: Mickiewiczova 16',
          'Bratislava 811 07',
          'EUR IBAN: SK7475000000004025759062',
          'BIC: CEKOSKBX',
          'Address banka: ČSOB banka, a.s.',
          'Michalská 18',
          '815 63 Bratislava',
          'office.gts8@gmail.com'
        ]}
        smallMargin
        previusSlideLink="projects"
        nextSlideLink="about"
      />
    </>
  )
}