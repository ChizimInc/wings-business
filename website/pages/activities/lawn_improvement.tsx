import Link from 'next/link'

import Slide from '../../components/Slide'
import { List } from '../../components/Slide/List'

export default function Lawn_improvement() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/trade/Lawn.jpg" 
        title="Lawn improvement"
        headerText="WINGS BUSINESS s.r.o. provides consulting in landscaping services, absolutely for any climatic and soil conditions with various service options"
        smallMargin
        smallContainer
        smallLeftLine
      >
        <div className='mb-5'>
          <div>
            <p className='my-2'>If you want to be sure about the quality of the lawn on your site, then the best thing you can do is to entrust us with the arrangement or sowing of the lawn.</p>
            <p className='my-2'>Here you can find lawn grasses for the widest range of uses: for landscaping shady places, sports and play areas, creating an unpretentious and undersized lawn, grass mixtures for the southern and northern regions, for landscaping urban areas and for special purposes.</p>
            <div className='flex justify-center my-5'>
              <List title='Our services:' />
            </div>
            <p className='my-2'>We select carefully the certified grass mixtures, prepare the soil, supervise the sowing of seeds and the cultivated lawn.</p>
            <p className='my-2'>Our important advantage is the ability to buy lawn grass from the best agricultural producers around the world. During the existence of our company in the agro-sales market, we have found reliable partners and grateful customers.</p>
            <p className='my-2'>Turning to us, you can be sure that a beautiful and well-groomed lawn will grow in front of your house for many years.</p>
            <p className='my-2'>We know everything about landscaping!</p>
            <p className='my-2'>Our company is interested in development. WINGS BUSINESS s.r.o invites landscaping, gardening and landscaping suppliers to cooperate.</p>
          </div>
        </div>
      </Slide>
      <div className="sm:flex justify-evenly items-center mb-16 w-full">
        <Link href="/">
          <div 
            className="flex ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Back to menu
          </div>
        </Link>
        <Link href="flowers">
          <div 
            className="flex mt-4 ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
              Next: Annual and perennial flowers
          </div>
        </Link>
      </div>
    </>
  )
}