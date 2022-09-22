import {VscDebugBreakpointLog} from 'react-icons/vsc'

type IListProps = {
  title: string;
}

export const List = (props: IListProps) => {
  return (
    <div>
      <p>{props.title}</p>
      <div className="flex items-center mt-2">
        <VscDebugBreakpointLog />
        <p className="ml-2">Complex earthworks</p>
      </div>
      <div className="flex items-center mt-2">
        <VscDebugBreakpointLog />
        <p className="ml-2">Lawn care</p>
      </div>
      <div className="flex items-center mt-2">
        <VscDebugBreakpointLog />
        <p className="ml-2">Sale of rolled lawn</p>
      </div>
      <div className="flex items-center mt-2">
        <VscDebugBreakpointLog />
        <p className="ml-2">Landscaping and landscaping turnkey areas</p>
      </div>
    </div>
  )
}