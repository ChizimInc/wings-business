import Image from 'next/image'
import { useState } from 'react'
import Preview from './Preview';

type IGaleryProps = {
  album: string[];
}

const Galery = (props: IGaleryProps) => {
  const [zoomIn, setZoomIn] = useState('')
  const [open, setOpen] = useState('')

  return (
    <div className="mx-12 mt-12">
       <div className='flex flex-wrap'>
        {
          props.album.map( (item) => (
            <div>
              <div 
                className='my-10 mx-5 relative overflow-hidden cursor-pointer'
                onMouseEnter={() => setZoomIn(item)}
                onMouseLeave={() => setZoomIn('')}
                onClick={() => setOpen(item)}
              >
                <Image 
                  src={item} width={234} height={349} 
                  className={`
                    ${(zoomIn == item) ? 'scale-110' : ''} 
                    transition duration-300
                  `} 
                />
                <div 
                  className={`
                    ${(zoomIn == item) ? 'opacity-50' : 'opacity-0'}
                    w-full h-[98.5%] bg-app-color-100
                    absolute top-0 left-0 transition
                  `}
                ></div>
                <div
                  className={`
                    ${(zoomIn == item) ? 'opacity-100' : 'opacity-0'}
                    w-full h-[98.5%] absolute top-0 left-0 transition
                  `}
                >
                  <span 
                    className={`
                      ${(zoomIn == item) ? 'w-1/2' : ''}
                      block absolute top-[25px] h-[1px] bg-slate-50 
                    `}
                  ></span>
                  <span className='block absolute top-0 left-[25px] h-2/5 w-[1px] bg-slate-50'></span>
                  <span className='block absolute bottom-[25px] right-0 w-1/2 h-[1px] bg-slate-50'></span>
                  <span className='block absolute bottom-0 right-[25px] h-2/5 w-[1px] bg-slate-50'></span>
                </div>
                
                
              </div>
              {
                (open == item) && <Preview photo={item} setOpen={setOpen} />
              }
            </div>
          ))
        }
       </div>
    </div>
   
  )
}

export default Galery