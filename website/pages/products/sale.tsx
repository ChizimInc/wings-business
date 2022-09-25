import Slide from "../../components/Slide"
import Link from "next/link"
import { VscDebugBreakpointLog } from 'react-icons/vsc';

export default function Sale() {
  return (
    <>
      <Slide 
        image="/assets/images/slides/sale2.jpg" 
        title="Sale of agricultural raw materials"
        longLeftLine
        headerText="Our company WINGS BUSINESS s.r.o is engaged in the sale of agricultural products of high quality, focusing on the standards of European countries."
        contentText="Growing agricultural raw materials requires a lot of labor, land and has a great impact on people, nature and animals. Therefore, our team carefully selects our suppliers along the value chain, carefully uses natural resources and builds honest relationships with farmers, workers and manufacturers.
        Our manufacturers meet our requirements and are also aware of our high quality standards."
        smallMargin
        smallContainer
        lastLine="Thanks to honesty, the fulfillment of all contractual and contractual obligations for the sale of agricultural products, we have received a high level of trust from our customers."
        showLastSpan
      />
      <div className="mt-[40px] sm:flex justify-around max-w-[2000px] m-auto mb-[50px]">
        <div className="ml-4">
          <p>Our advantages</p>
          <div>
            <div className="flex items-center mt-2">
              <VscDebugBreakpointLog />
              <p className="ml-2">High quality</p>
            </div>
            <div className="flex items-center mt-2">
              <VscDebugBreakpointLog />
              <p className="ml-2">Quality assurance</p>
            </div>
            <div className="flex items-center mt-2">
              <VscDebugBreakpointLog />
              <p className="ml-2">A wide range of</p>
            </div>
            <div className="flex items-center mt-2">
              <VscDebugBreakpointLog />
              <p className="ml-2">All products are certified</p>
            </div>
            <div className="flex items-center mt-2">
              <VscDebugBreakpointLog />
              <p className="ml-2">Individual approach and prompt service</p>
            </div>
          </div>
        </div>
          <div className="ml-4 mt-4 sm:mt-0 mb-6">
            <p>Our production</p>
            <div>
              <div className="flex items-center mt-2">
                <VscDebugBreakpointLog />
                <p className="ml-2">Wheat</p>
              </div>
              <div className="flex items-center mt-2">
                <VscDebugBreakpointLog />
                <p className="ml-2">Corn</p>
              </div>
              <div className="flex items-center mt-2">
                <VscDebugBreakpointLog />
                <p className="ml-2">Rapeseed</p>
              </div>
              <div className="flex items-center mt-2">
                <VscDebugBreakpointLog />
                <p className="ml-2">Rye</p>
              </div>
              <div className="flex items-center mt-2">
                <VscDebugBreakpointLog />
                <p className="ml-2">Barley</p>
              </div>
              <div className="flex items-center mt-2">
                <VscDebugBreakpointLog />
                <p className="ml-2">Sunflower seeds</p>
              </div>
            </div>
        </div>
      </div>
      <div className="sm:flex justify-evenly items-center mb-[100px] w-full">
        <Link href="purchase" passHref>
          <div 
            className="flex ml-4 mr-4 items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
            style={{backgroundColor: '#25723e', color: 'white'}}
            >
            Purchase of agricultural raw materials
          </div>
        </Link>
        <div 
          className="flex mt-4 ml-4 mr-4 items-center bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300"
          style={{ border: '1px solid green'}}
          >
          Sale of agricultural raw materials
        </div>
      </div>
    </>
  )
}