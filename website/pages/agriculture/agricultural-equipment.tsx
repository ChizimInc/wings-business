import Link from 'next/link'

import Slide from '../../components/Slide'
import { List } from '../../components/Slide/List'
export default function AgricultureEquipment() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/agriculture/equipment.jpg" 
        title="Agricultural equipment "
        headerText="WINGS BUSINESS sro has a unique experience in the provision and selection of any equipment, line or machine. We supply enterprises with both individual machines and complex industrial lines, we complete business of any scale."
        smallMargin
        smallContainer
      >
        <div className='mb-5'>
          <div>
            <p className='my-2'>Our main task is to select and recommend to our customers only the equipment that will 100% suit them in terms of quality and cost.</p>
          </div>
        </div>
      </Slide>
      <div className='mx-2 lg:mx-[100px] flex justify-center'>
        <div className='my-4 mb-12 max-w-[1219px]'>
          <div>
            <List 
              title='We offer you a wide range of equipment for processing and packaging of all types of agricultural products:' 
              items={
                [
                  'Complex lines for processing fruits and vegetables',
                  'Agricultural processing equipment',
                  'Equipment for drying fruits and vegetables',
                  'Equipment for roasting, drying nuts, seeds, coffee',
                  'Feed production equipment',
                  'Equipment for meat processing and sausage production',
                  'Equipment for the production of semi-finished products',
                  'Equipment for the dairy industry',
                  'Agricultural processing equipment',
                  'Dosing and packaging equipment',
                  'Food processing machines',
                  'Fruit and vegetable canning equipment'
                ]
              }
            />
          </div>
          <div className='my-4 mb-12'>
            <p className='my-3'>All this and much more you can buy at the best price with the help of our specialists.</p>
            <p className='my-3'>Thanks to our flexibility and experience, a large number of partners and suppliers, we are able to serve almost all the individual needs of our many customers.</p>
            <p className='my-3 underline'>We invite manufacturers of equipment, machine tools and production lines to long-term and mutually beneficial cooperation.</p>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-evenly items-center mb-16 w-full">
        <Link href="rolled-metal" passHref>
          <div 
            className="flex ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Back: Rolled Metal
          </div>
        </Link>
        <Link href="other-equipment" passHref>
          <div 
            className="flex mt-4 ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
              Next: Other equipment
          </div>
        </Link>
      </div>
    </>
  )
}