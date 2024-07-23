import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Buscador() {

  const [queries , setQueries] = useSearchParams()
  const [searchAnime, setSearchAnime] = useState(null)

  const title = queries.get("title")


    useEffect(()=>{
      getData()
    },[])

    const handleSearch = (event) => {setSearchAnime(event.target.value) 
 
      const filteredArr = searchAnime.filter((eachAnime)=>{
        return eachAnime.title.startsWith(event.target.value)
      })
      

    }
      
    

  

    const getData = async ()=>{
      try {
        const response = await axios.get("https://api.jikan.moe/v4/anime")
        setAnimeArr(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    if(animeArr === null){
      return <h3>... Cargando</h3>
    }

 

  return (

    <Form className="d-flex">
    <Form.Control
        type="search"
        placeholder="Buscar"
        className="me-2"
        aria-label="Search"
         onChange={handleSearch}
        value={searchAnime} 
      />
      <Button variant="outline-info" >Buscar</Button>
    </Form>

  )
}

export default Buscador