import FirstPage from '../components/first-page.jsx'
import SecondPage from '../components/second-page.jsx'
import {useState,useEffect} from 'react'

export default function(){
  const [data,setData]=useState()
  useEffect(()=>{
      fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(response=>response.json())
      .then(data=>{
        setData(data)
      })
    },[])
  const [currentPage,setCurrentPage]=useState(0)
  function toggleCurrentPage(){
    setCurrentPage(prevPage=>prevPage===0?1:0)
  }
  return(
    <>
      {currentPage===0?<FirstPage toggle={toggleCurrentPage}/>:<SecondPage 
        data={data?data.results:null}
      />}
    </>
  )
}