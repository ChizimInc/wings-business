import Link from 'next/link'

import Slide from '../../components/Slide'
import { ImageList } from '../../components/Slide/ImageList'
import { ConiferousTreesData, DeciduousTreeData, OrnamentalTreeData, DecorativeTreesData } from '../../utils/AppData'

export default function DecorativeTrees() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/trade/decorative-trees.jpg" 
        title="Decorative trees for the garden"
        headerText="Many owners of country plots or household plots, dream of creating a luxurious  garden with a large number of green spaces to make it unique and exclusive. Trees come in a variety of sizes, from tall oaks to dwarf fruit trees that you can grow on your property."
        smallMargin
        smallContainer
        smallLeftLine
      >
        <div className='mb-5'>
          <div>
            <p className='my-2'>When choosing trees for a site, it is necessary to take into account preferences for temperature changes, humidity, soil requirements, the size of the site and the tasks that are assigned to them. The most important thing is to choose just such a biological species that will be comfortable growing in the climatic conditions of the corresponding region.</p>
            <p className='my-2'>Choosing the right tree for your yard is a long-term investment that will bring beauty and coziness to your garden.</p>
            <p className='my-2'>Types of trees for the garden:</p>
          </div>
        </div>
      </Slide>
      <div className='mx-[160px] mb-24'>
        <div>
          <p className='text-black'>Coniferous trees</p>
          <ImageList data={ConiferousTreesData} />
        </div>
        <div>
          <p className='text-black mt-6'>Deciduous trees</p>
          <ImageList data={DeciduousTreeData} />
        </div>
        <div>
          <p className='text-black mt-6'>Frost Hardy Ornamental Trees/Most Cold Hardy Plants</p>
          <ImageList data={OrnamentalTreeData} />
        </div>
        <div>
          <p className='text-black mt-6'>Decorative flowering trees</p>
          <ImageList data={DecorativeTreesData} />
        </div>
        <div className='my-4 mb-12'>
          <p className='underline'>*Can't find the product you're looking for? Please let us know about it!</p>
          <p className='my-3'>Our specialists will select for you the varieties of trees that will correspond to the peculiarities of the growing conditions, as well as the optimal care that you can provide them.</p>
          <p className='my-3'>We will turn your site into a fragrant oasis with minimal time and labor.</p>
          <p className='my-3'>Our company is interested in development. WINGS BUSINESS s.r.o invites landscaping, gardening and landscaping suppliers to cooperate.</p>
        </div>
      </div>
      <div className="sm:flex justify-evenly items-center mb-16 w-full">
        <Link href="irrigation-systems">
          <div 
            className="flex ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Back: Irrigation systems for watering plants
          </div>
        </Link>
        <Link href="/products/purchase">
          <div 
            className="flex mt-4 ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
              Next: Purchase of agricultural raw materials
          </div>
        </Link>
      </div>
    </>
  )
}