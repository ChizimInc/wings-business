import Slide from "../../components/Slide"

export default function Purchase() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/services.jpg" 
        title="Purchase of agricultural raw materials "
        headerText="WINGS BUSINESS s.r.o invites sellers of agricultural raw materials and products of their processing to join."
        contentText="We buy almost all grain and oil crops: rye, barley, millet, corn, rapeseed, sunflower, soybean, wheat, etc. The terms of the purchase are actually with the seller in all possible cases and include various delivery grounds.
        Sustainable production and fair trade are important to us."
        smallMargin
        bigContainer
        lastLine="We will be glad to cooperate with you!"
        previusSlideLink="partners"
        nextSlideLink="greenhouse"
        purchaseModalButton
      />
    </>
  )
}