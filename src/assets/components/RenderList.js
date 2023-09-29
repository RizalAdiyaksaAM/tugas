import React from 'react'

// props
export const RenderList = (props) => {


  const deletePokemon=()=>{
    props.setData(
      props.DataAll.filter( valueFilter =>
            valueFilter.name !== props.dataPokemon.name )
    )
  }


  return (
    <div className='w-full'>
      <span className=' bg-red-200 px-[2rem] py-[0rem]'>{props.movie}</span>
      <button onClick={()=>{deletePokemon()}} className='bg-blue-200'>Delete Pokemon</button>
    </div>
  )
}
