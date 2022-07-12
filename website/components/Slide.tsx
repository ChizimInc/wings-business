import Image from "next/image";
import Link from "next/link";

type IAboutProps = {
  title: string;
  headerText?: string;
  listItems: string[];
  lastLine?: string;
  smallMargin?: boolean;
  bigContainer?: boolean;
  smallContainer?: boolean;
  image: string;
  nextSlideLink?: string;
  previusSlideLink?: string;
}

export default function Slide(props: IAboutProps) {
  return (
    <>
    <div className="mx-3 lg:container mt-32 text-black flex flex-col md:flex-row items-center content-between justify-between">
      <div className="w-full md:w-1/2 relative sm:mr-[60px]">
        <span
          className="hidden lg:block h-[116%] opacity-50 absolute ml-[-17px] left-[-78px]"
          style={{
            borderLeft: '2px solid #25723E',
            marginTop: ''
          }}
        ></span>
        <div 
          className={`
          text-black text-[14pt] font-medium 
            ${props.bigContainer ? 'mt-[5px]' : 'xl:mt-[85px]'}`
          }>
          <div className="mb-[15px]">
            {props.title}
          </div>
          <span 
            className="block w-[135%] md:w-[160%] opacity-50"
            style={{
              borderTop: '2px solid #25723E',
              marginLeft: '-125px'
            }}
          ></span>
        </div>
        {/* ---------------- Mobile ------------------------ */}
          <div className=" md:hidden relative mt-6">
            <div 
              className="w-[100%] h-[250px] bg-cover z-50"
              style={{
                backgroundImage: `url(${props.image})`
              }}
            >
            </div>
            <div className="absolute w-10 h-10 bg-app-color-300 top-[-10px] right-[-10px] z-[-1]"></div>
            <div className="absolute flex justify-center w-24 h-12 bg-app-color-100 bottom-0 ">
              <Link href={{pathname: props.previusSlideLink}} passHref>
                <div 
                  style={{borderRight: '1px solid #eaf0ec61'}} 
                  className="w-1/2 flex justify-center items-center cursor-pointer hover:bg-app-color-200"
                >
                  <Image src="/assets/icons/left-arrow-slide.svg" width={16} height={16} alt="image" />
                </div>
              </Link>
              <Link href={{pathname: props.nextSlideLink}} passHref>
                <div className="w-1/2 flex justify-center items-center cursor-pointer hover:bg-app-color-200">
                  <Image 
                    src="/assets/icons/left-arrow-slide.svg" 
                    className="rotate-180" width={16} height={16}
                    alt="image" 
                  />
                </div>
              </Link>
            </div>
          </div>
        {/* ----------------end Mobile ------------------------ */}
        <div className={`text-[9pt] ${props.bigContainer ? 'mt-2' : 'mt-16'} `}>
          <div className="my-4">
            {
              props.headerText
            }
          </div>
          {
            props.listItems.map((items) => (
              <div 
                key={items}
                className={`${props.smallMargin ? 'my-2' : 'my-4'} text-[8pt]`}
              >{items}</div>
            ))
          }
          <div className="my-4">
            {
              props.lastLine
            }
          </div>
        </div>
        <span
          className={`
            hidden xl:block w-[115%] opacity-50 h-1 ml-[100px] absolute bottom-0 mb-[16px]
            ${props.bigContainer ? 'mb-[0px]' : 'mb-[16px]'}
          `}
          style={{
            borderTop: '2px solid #25723E'
          }}
        ></span>
      </div>
      <div className="hidden md:block relative">
        <div 
          className={`
            ${props.smallContainer ? 'w-[550px]' : 'w-[460px]'} 
            ${props.smallContainer ? 'h-[420px]' : 'h-[497px]'}
            bg-cover z-50
          `}
          style={{
            backgroundImage: `url(${props.image})`
          }}
        >
        </div>
        <div className="absolute w-10 h-10 bg-app-color-300 top-[-10px] right-[-10px] z-[-1]"></div>
        <div className="absolute flex justify-center w-24 h-12 bg-app-color-100 bottom-0 left-[-48px]">
          <Link href={{pathname: props.previusSlideLink}} passHref>
            <div 
              style={{borderRight: '1px solid #eaf0ec61'}} 
              className="w-1/2 flex justify-center items-center cursor-pointer hover:bg-app-color-200"
            >
              <Image src="/assets/icons/left-arrow-slide.svg" width={16} height={16} alt="image" />
            </div>
          </Link>
          <Link href={{pathname: props.nextSlideLink}} passHref>
            <div className="w-1/2 flex justify-center items-center cursor-pointer hover:bg-app-color-200">
              <Image 
                src="/assets/icons/left-arrow-slide.svg" 
                className="rotate-180" width={16} height={16} 
                alt="image"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}