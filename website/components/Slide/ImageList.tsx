import Image from 'next/image'

interface IImageListProps {
  data: {title: string, src: string}[]
}

export const ImageList = (props: IImageListProps) => {
  return (
    <>
      <div className='flex w-full align-center justify-start flex-wrap'>
        {
          props.data.map( ({title, src}) => (
            <div className='w-[250px] mx-6 my-3' key={title}>
              <div className=' flex items-center justify-center h-[50px]'>
                <p className=''>{title}</p>
              </div>
              <div 
                className='w-[250px] h-[180px] bg-center bg-cover' 
                style={{
                  backgroundImage: `url(${src})`
                }}
              ></div>
            </div>
          ) )
        }
      </div>
    </>
  )
}