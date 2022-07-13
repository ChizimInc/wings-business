import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image'

type IPreviewProps = {
  photo: string;
  setOpen: Dispatch<SetStateAction<string>>
}

const Preview = (props: IPreviewProps) => {
  return (
    <div className="fixed z-[99999] top-0 left-0 w-[100vw] h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
      <div className="flex justify-center align-center h-full">
        <div className='w-full flex items-center justify-center'>
          <Image src={props.photo} layout='fill' objectFit='contain' alt="image" />
        </div>
        <div className='flex w-full justify-end z-10 absolute'>
          <div 
            className='border p-1 px-3 m-3 h-[34px] cursor-pointer'
            onClick={() => props.setOpen('')}
          >X</div>
        </div>
      </div>
    </div>
  )
}

export default Preview