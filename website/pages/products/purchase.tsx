import Slide from "../../components/Slide"
import Link from "next/link"

export default function Purchase() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/purchase.jpg" 
        title="Purchase of agricultural raw materials "
        headerText="WINGS BUSINESS s.r.o invites sellers of agricultural raw materials and products of their processing to join."
        contentText="We buy almost all grain and oil crops: rye, barley, millet, corn, rapeseed, sunflower, soybean, wheat, etc. The terms of the purchase are actually with the seller in all possible cases and include various delivery grounds.
        Sustainable production and fair trade are important to us."
        smallMargin
        smallContainer
        lastLine="We will be glad to cooperate with you!"
        showLastSpan
      />
      <div className="sm:flex justify-evenly items-center mt-8 w-full">
        <div 
          className="flex ml-4 mr-4 items-center bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
          style={{ border: '1px solid green'}}
          >
          Purchase of agricultural raw materials
        </div>
        <Link href="sale" passHref>
          <div 
            className="flex mt-4 ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Sale of agricultural raw materials 
          </div>
        </Link>
      </div>
    </>
  )
}