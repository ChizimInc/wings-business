import Link from 'next/link';
import React from 'react';
import { useState, useRef, MutableRefObject } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [itemHover, setItemHover] = useState(0);
  

  const span1 = useRef() as MutableRefObject<HTMLSpanElement>
  const span2 = useRef() as MutableRefObject<HTMLSpanElement>
  const span3 = useRef() as MutableRefObject<HTMLSpanElement>

  const backgroundColor = (router.pathname === '/') ? 'color-black-fill' : 'bg-white'
  const homeBannerVisible = (router.pathname === '/') ? 'flex' : 'hidden'
  const logo = (router.pathname === '/') ? 'logo-white.svg' : 'logo-black.svg'
  const color = (router.pathname === '/') ? 'text-white' : 'text-black'
  const isHome = (router.pathname === '/') ? true : false
  const isFixed = (router.pathname === '/') ? false : true

  const styles = {
    container: {
      display: 'flex',
      width: '100%',
      top: 0,
      zIndex: '500',
      boxShadow: isFixed ? '0 0 8px -2px black' : '',
      height: isHome ? 'calc(100vh - 10px)': '',
      position: isFixed ? 'fixed' as 'fixed' : 'relative' as 'relative'
    },
    image: {
      backgroundImage: isHome ? 'url("/assets/images/Main BG Photo.jpg")' : '',
      backgroundPosition: 'center',
      width: '100%',
      height: isHome ? 'calc(100vh - 10px)' : '',
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

  const burgerClickOpen = () => {
    span2.current.classList.remove('border-t-[2px]')
    span1.current.classList.add('origin-left')
    span1.current.classList.add('rotate-[42deg]')
    span3.current.classList.add('origin-left')
    span3.current.classList.add('-rotate-[42deg]')
  }

  const burgerClickClose = () => {
    span2.current.classList.add('border-t-[2px]')
    span1.current.classList.remove('origin-left')
    span1.current.classList.remove('rotate-[42deg]')
    span3.current.classList.remove('origin-left')
    span3.current.classList.remove('-rotate-[42deg]')
  }

  const burgerClickItem = () => {
    setIsOpen(false);
    burgerClickClose();
  }

  
  return (
    <>
      <div style={styles.container}>
        <div style={styles.image}>
          <div 
            className={`
              navbar z-50 w-full h-[60px] text-white items-center px-5 flex 
              ${backgroundColor}
            `}
          >
              <div className='cursor-pointer text-[16pt]'>
                <Link href='/'>
                  WINGS BUSINESS
                </Link>
              </div>
              
              <div style={{height: '43px'}} className="flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="block lg:hidden focus:outline-none"
                >
                  <div 
                    className={`w-7 flex justify-between flex-col`} 
                    style={{height: '21px'}} 
                    onClick={isOpen ? burgerClickClose : burgerClickOpen}
                  >
                    <span ref={span1} style={styles.burgherMenu} 
                      className='block w-full border-t-[2px] rounded-full'></span>
                    <span ref={span2} style={styles.burgherMenu} 
                      className='block w-full border-t-[2px] rounded-full'></span>
                    <span ref={span3} style={styles.burgherMenu} 
                      className='block w-full border-t-[2px] rounded-full'></span>
                  </div>
                </button>
              </div>
            
          </div>
          
          <div 
            className={`
              ${homeBannerVisible} 
              flex-col text-white w-full absolute top-0 h-full items-center justify-center
            `}
          >
            <div className='flex flex-col justify-between items-center' style={{height: '330px'}}>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}