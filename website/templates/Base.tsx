import { Meta } from '../layout/Meta';
import Navbar from '../layout/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { useRouter } from 'next/router';


const Base = (props: any) => {
  const router = useRouter();
  const isFixed = (router.pathname === '/') ? true : false

  return(
    <div className={`antialiased text-gray-600 ${isFixed ? 'absolute' : ''} right-0 left-0`}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <div className='mt-[4.5rem]'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

export { Base };