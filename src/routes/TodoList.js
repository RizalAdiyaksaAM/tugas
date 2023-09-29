import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Challenge } from '../pages/Challenge'
import { Movie } from '../pages/Movie'


export const TodoList = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Movie/>}/>
    </Routes>
    </BrowserRouter>
  )
}
