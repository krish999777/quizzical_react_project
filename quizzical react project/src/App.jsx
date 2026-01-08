import FirstPage from '../components/first-page.jsx'
import SecondPage from '../components/second-page.jsx'
import {useState} from 'react'
export default function(){
  const [currentPage,setCurrentPage]=useState(0)
  function toggleCurrentPage(){
    setCurrentPage(prevPage=>prevPage===0?1:0)
  }
  return(
    <>
      {currentPage===0?<FirstPage toggle={toggleCurrentPage}/>:<SecondPage/>}
    </>
  )
}