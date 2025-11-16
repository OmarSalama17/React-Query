"use client"
import { filterCategory } from '@/types/filter'
import React from 'react'
type PropsFilter = {
    selectedStatus: filterCategory ,
    setSelectedStatus: (value: filterCategory) => void,
}
const Filter = ({selectedStatus , setSelectedStatus}: PropsFilter) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value === "true"
        setSelectedStatus(value)
    }
  return (
    <div>
        <select value={String(selectedStatus)} onChange={onChangeHandler} >
            <option value="true">isActive</option>
            <option value="false">not isActive</option>
        </select>
    </div>
  )
}

export default Filter