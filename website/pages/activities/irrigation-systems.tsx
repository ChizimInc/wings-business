import Link from 'next/link'

import Slide from '../../components/Slide'

export default function IrrigationSystems() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/trade/irrigation.jpg" 
        title="Irrigation systems for watering plants"
        headerText="WINGS BUSINESS s.r.o offers a range of services including design and installation of irrigation systems for watering plants. Our company will help you develop a project that is the most suitable to complete your project, taking into account the landscape, the area and location of the green spaces, taking into account the client's wishes regarding the quality of the irrigation system. Proper project planning will help you to maximize the effectiveness of financial investments in the irrigation system."
        smallMargin
        smallContainer
        smallLeftLine
      >
        <div className='mb-5'>
          <div>
            <p className='my-2'>In the line of proposed irrigation systems, you will find a complete range of tools and equipment for watering your site or garden. Mobile, automatic or energy-saving - We are ready to provide a solution for watering any kind of plants</p>
            <p className='my-2'>The process of installation is performed using reliable equipment from trusted manufacturers, which is considered to be an effective long-term choice from the Client’s perspective.</p>
            <p className='my-2'>Precise timing with respect to watering of plants and lawn is a guarantee of their health and flowering appearance.</p>
            <p className='my-2'>WINGS BUSINESS s.r.o invites suppliers and manufacturers of artificial irrigation and irrigation system equipment for cooperation.</p>
          </div>
        </div>
      </Slide>
      <div className="sm:flex justify-evenly items-center mb-16 w-full">
        <Link href="flowers" passHref>
          <div 
            className="flex ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Back: Annual and perennial flowers
          </div>
        </Link>
        <Link href="decorative-trees" passHref>
          <div 
            className="flex mt-4 ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
              Next: Decorative trees for the garden
          </div>
        </Link>
      </div>
    </>
  )
}