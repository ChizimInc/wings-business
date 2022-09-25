import {VscDebugBreakpointLog} from 'react-icons/vsc'

type IListProps = {
  title: string;
  items: string[];
}

export const List = (props: IListProps) => {
  return (
    <div>
      <p>{props.title}</p>
      {
        props.items.map( item => (
          <div className="flex items-center mt-2" key={item}>
            <div className='w-[16px] h-[16px]'>
              <VscDebugBreakpointLog />
            </div>
            <p className="ml-2">{item}</p>
          </div>
        ) )
      }
    </div>
  )
}