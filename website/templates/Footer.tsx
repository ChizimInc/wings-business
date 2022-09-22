import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter()
  const isFixed = (router.pathname !== '/greenhouse' && router.pathname !== '/products/sale') ? true : false

  return(
    <div 
      className={`
        ${isFixed ? 'mt-5' : ''} 
        footer bottom-0 w-full h-11 bg-white flex items-center px-4 sm:px-[4.25rem] md:fixed
      `}
      style={{
        borderTop: '1px solid #EAF0EC'
      }}
    >
      WINGS BUSINESS s.r.o. 2018
    </div>
)};

export { Footer };
