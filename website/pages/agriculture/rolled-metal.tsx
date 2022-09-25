import Link from 'next/link'

import Slide from '../../components/Slide'
import { List } from '../../components/Slide/List'
export default function RolledMetal() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/agriculture/metal.jpg" 
        title="Rolled metal"
        headerText="WINGS BUSINESS sro offers its expertise and appraisal for the selection and quality of rolled metal products for your company. Our specialists know how to choose a replacement for a discontinued item, as well as choose the right steel grade in accordance with the required strength class and other technical requirements. Our goal is to build long lasting economic relationships with our Clients. We are always open for fruitful and long-term cooperation with any client, paying due attention to each customer."
        smallMargin
        smallContainer
      >
        <div className='mb-5'>
          <div>
            <p className='my-2'>Our main task is to quickly provide the production or construction site with the necessary rolled metal of the appropriate quality, in a short time manner and thereby make your work as comfortable as possible.</p>
            <p className='my-2'>Here you can find the highest quality metal products at affordable prices.</p>
          </div>
        </div>
      </Slide>
      <div className='mx-2 lg:mx-[100px] flex justify-center'>
        <div className='my-4 mb-12 max-w-[1219px]'>
          <div>
            <List 
              title='The wide range of services provided by our company includes:' 
              items={
                [
                  'Metal wholesale',
                  'Retail metal rolling',
                  'Stainless steel',
                  'Non-ferrous metal',
                  'Titanium rolled metal'
                ]
              }
            />
          </div>
          <div className='my-4 mb-12'>
            <p className='underline'>*Please note that the range of services is constantly updated with new positions. All products are certified and comply with international standards (EN, DIN, ASTM).</p>
            <p className='my-3'>We do not have orders that we cannot fulfill. We have the ability to satisfy the most specific requests of our customers!</p>
            <p className='my-3'>Our company invites to mutually beneficial cooperation all metal traders, as well as wholesale and retail markets of building materials involved in the sale of rolled metal products.</p>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-evenly items-center mb-16 w-full">
        <Link href="/" passHref>
          <div 
            className="flex ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Back: Main menu
          </div>
        </Link>
        <Link href="/agriculture/agricultural-equipment" passHref>
          <div 
            className="flex mt-4 ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
              Next: Agricultural equipment
          </div>
        </Link>
      </div>
    </>
  )
}