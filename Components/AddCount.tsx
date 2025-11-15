import React from 'react'
type Props = {
    addCount:()=>void
}
const AddCount = ({addCount} : Props ) => {
  return (
    <button className="cursor-pointer bg-blue-500 rounded-md p-3" onClick={()=> addCount()}>Add</button>
  )
}

export default AddCount