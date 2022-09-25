import Link from 'next/link'

import Slide from '../../components/Slide'
import { List } from '../../components/Slide/List'
export default function AgricultureEquipment() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/agriculture/other.jpg" 
        title="Other equipment"
        headerText="WINGS BUSINESS sro has established itself as a reliable business consultant in the selection of high-quality equipment, confirmed by long-term partnerships with leading companies in the agro-industrial complex."
        smallMargin
        smallContainer
      >
        <div className='mb-5'>
          <List 
            title='Looking for equipment for your business? If so, you are on the right page. Below is a list of various equipment:' 
            items={
              [
                'Tractors, farm tractor',
                'Agricultural machinery equipment',
                'Combines, harvesting equipment',
                'Headers',
                'Tillage equipment',
                'Seeding and planting equipment, seeders',
                'Equipment for watering and irrigation',
                'Fertilizer application',
                'Grain handling and grain processing equipment',
                'Packaging equipment, packaging machinery',
                'Haymaking equipment, hay harvesting equipment',
                'Technique for transportation and transportation',
                'Forestry equipment',
                'Woodworking equipment, woodworking machines',
                'Equipment for the garden and vegetable garden',
                'Vineyard equipment',
                'Potato Technique',
                'Equipment for vegetable growing',
                'Livestock machinery, livestock equipment'
              ]
            }
          />
        </div>
      </Slide>
      <div className='mx-2 lg:mx-[100px] flex justify-center'>
        <div className='my-4 mb-12 max-w-[1219px]'>
          <p className='my-3'>If you do not find the equipment you are interested in here, we will carry out the necessary search for you. We will take into account all your needs, listen to your opinion and, among all the variety, we will help you choose the most necessary items for your budget.</p>
          <List 
            title='Benefits of cooperation:'
            items={
              [
                'Competitive prices',
                'Implementation of a complex of works (services) on a turnkey basis',
                'Implemented projects in Europe, CIS countries',
                'A range of services: consulting (planning), design, launch and commissioning of equipment, etc.',
                'Development of non-standard solutions, taking into account the individual characteristics of technological processes and customer requirements'
              ]
            }
          />
          <p className='my-3 underline'>We invite manufacturers of equipment, machine tools and production lines to long-term and mutually beneficial cooperation.</p>
        </div>
      </div>
      <div className="sm:flex justify-evenly items-center mb-16 w-full">
        <Link href="agricultural-equipment" passHref>
          <div 
            className="flex ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Back: Agricultural equipment
          </div>
        </Link>
        <Link href="/activities/lawn_improvement" passHref>
          <div 
            className="flex mt-4 ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
              Next: Lawn improvement
          </div>
        </Link>
      </div>
    </>
  )
}