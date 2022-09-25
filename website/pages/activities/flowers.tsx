import Link from 'next/link'

import Slide from '../../components/Slide'
import { ImageList } from '../../components/Slide/ImageList'
import { AnnualFlowerData, PerennialFlowerData } from '../../utils/AppData'

export default function Flowers() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/trade/flowers.jpg" 
        title="Annual and perennial flowers"
        headerText="Our company is engaged in retail and wholesale sale of seeds. You have the opportunity to purchase any number of products for your  garden, arranging the adjacent territory, and completing a landscape design project."
        smallMargin
        smallContainer
        smallLeftLine
      >
        <div className='mb-5'>
          <div>
            <p className='my-2'>By purchasing seed material from us, you have a 100% chance to receive a high quality product, as we set high production standards and assure the quality control process. We choose only those products that have earned the trust of our Chief Production Engineers.</p>
            <p className='my-2'>There are so many colors that it&apos;s easy to get confused, therefore we classified those conveniently:</p>
          </div>
        </div>
      </Slide>
      <div className='mx-2 lg:mx-[100px] flex justify-center'>
        <div className='my-4 mb-12 max-w-[1219px]'>
          <div>
            <p className='text-black'>Annual flowers:</p>
            <ImageList data={AnnualFlowerData} />
          </div>
          <div>
            <p className='text-black mt-6'>Perennial flower crops:</p>
            <ImageList data={PerennialFlowerData} />
          </div>
          <div className='my-4 mb-12'>
            <p className='underline'>*Also, you can write to us and we will find the best fit plant for you.</p>
            <p className='my-3'>Our main mission is to help you build your dream garden.</p>
            <p className='my-3'>Our company is interested in development. WINGS BUSINESS s.r.o invites landscaping, gardening and landscaping suppliers to cooperate.</p>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-evenly items-center mb-16 w-full">
        <Link href="lawn_improvement" passHref>
          <div 
            className="flex ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Back: Lawn improvement
          </div>
        </Link>
        <Link href="irrigation-systems" passHref>
          <div 
            className="flex mt-4 ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
              Next: Irrigation systems for watering plants
          </div>
        </Link>
      </div>
    </>
  )
}