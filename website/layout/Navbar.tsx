import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { NavbarItems } from '../utils/AppData';

export default function Navbar() {
  const router = useRouter()
  const [itemHandler, setItemHandler] = useState(0);

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
    image: {
      transition: '1s',
      backgroundImage: isHome && 
                        itemHandler == 0 ? 'url("/assets/images/Main BG Photo.jpg")' : 
                        itemHandler == 1 ? 'url("/assets/images/Main BG Photo.jpg")' : 
                        itemHandler == 2 ? 'url("/assets/images/Our Partners Photo.jpg")' :
                        itemHandler == 3 ? 'url("/assets/images/Our Services Photo.jpg")' :
                        itemHandler == 4 ? 'url("/assets/images/Our Greenhouse Photo.jpg")' : 
                        itemHandler == 5 ? 'url("/assets/images/Our Projects Photo.jpg")' :
                        itemHandler == 6 ? 'url("/assets/images/Contacts Photo.jpg")' : '',
      backgroundPosition: 'center',
      width: '100%',
      height: isHome ? '100vh' : '',
      backgroundSize: 'cover',
      position: isHome ? 'absolute' as 'absolute' : 'relative' as 'relative',
      top: '0',
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
        <div style={styles.image}>
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
                  <div
                    className='flex flex-col relative justify-center sm:items-center text-[22pt] font-medium'   
                    onMouseEnter={() => setItemHandler(item.id)}    
                    key={item.id}              
                  >
                    <div 
                      className='z-30 ml-[68px] sm:ml-0'
                      
                    >
                      <div>{item.title}</div>
                      <Link href={item.link}>
                        <div className='text-[9pt] flex items-center cursor-pointer'>
                          <p className='mr-2'>See more</p>
                          <img className='mt-1' width="10px" src='/assets/icons/arrow.svg' />
                        </div>
                      </Link>
                    </div>
                    <div 
                      className='absolute opacity-50 z-20 bg-app-color-100'
                      style={{
                        transition: '.5s',
                        width: itemHandler == item.id ? '100%' : '0',
                        height: itemHandler == item.id ? '100%' : '0',
                      }}
                    ></div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}