import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { NavbarItems } from '../utils/AppData';


export default function Navbar() {
  const router = useRouter()
  const [itemHandlerId, setItemHandlerId] = useState(0)

  const backgroundColor = (router.pathname === '/') ? 'color-black-fill' : 'bg-white'
  const homeBannerVisible = (router.pathname === '/') ? 'flex' : 'hidden'
  const isHome = (router.pathname === '/') ? true : false
  const isFixed = (router.pathname === '/') ? false : true

  const styles = {
    container: {
      display: 'flex',
      width: '100%',
      top: 0,
      zIndex: '500',
      borderBottom: isFixed ? '1px solid #EAF0EC' : '',
      position: isFixed ? 'fixed' as 'fixed' : 'relative' as 'relative',
    },
    span: {
      borderTop: '4px solid #B5363A'
    },
    burgherMenu: {
      borderTopColor: isHome ? 'white' : 'black'
    }
  }

  
  return (
    <>
      <div style={styles.container}>
        <div 
          style={{
            transition: '.35s',
            backgroundImage: isHome ? "url('/assets/images/Main BG Photo.jpg')" : '',
            backgroundPosition: 'center',
            width: '100%',
            height: isHome ? '100vh' : '',
            backgroundSize: 'cover',
            position: isHome ? 'absolute' as 'absolute' : 'relative' as 'relative',
            top: '0',
          }}
        >
          <div 
            className={`
              navbar z-50 w-full h-[72px] items-center px-4 sm:px-[4.25rem] flex
              ${isHome ? 'text-white' : 'text-app-color-100'}  
              ${backgroundColor}
            `}
            style={{
              borderBottom: '1px solid white'
            }}
          >
              <div 
                className='cursor-pointer text-[16pt]'
                >
                <Link href='/'>
                  WINGS BUSINESS
                </Link>
              </div>
            
          </div>
          
          <div 
            className={`
              ${homeBannerVisible} 
              flex-col text-white w-full top-0 h-[89.5%] items-center justify-center
            `}
          >
            <div 
              className='grid sm:grid-cols-3 gap-1 w-full h-full'
            >
              {
                NavbarItems.map((item) => (
                  <Link href={item.link}>
                    <div
                      className='flex flex-col relative cursor-pointer justify-center sm:items-center text-[22pt] font-medium'   
                      onMouseEnter={() => setItemHandlerId(item.id)}    
                      key={item.id}              
                    >
                      <div 
                        className='z-30 ml-[68px] max-w-[80%] sm:ml-0'
                        
                      >
                        <div className='leading-9'>{item.title}</div>
                        <div className='text-[9pt] mt-2 flex items-center cursor-pointer'>
                          <p className='mr-2'>See more</p>
                          <img className='mt-1' width="10px" src='/assets/icons/arrow.svg' />
                        </div>
                      </div>
                      <div 
                        className='absolute opacity-50 z-20 bg-app-color-100'
                        style={{
                          transition: '.5s',
                          width: itemHandlerId == item.id ? '100%' : '0',
                          height: itemHandlerId == item.id ? '100%' : '0',
                        }}
                      ></div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}