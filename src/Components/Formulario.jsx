import React, { useEffect, useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown';


function Formulario(props) {
 
  const {animeList , setAnimeList} = props

    const [genre, setGenre] = useState('');
    const [status, setStatus] = useState('');
    const [order, setOrder] = useState('');
    const [year, setYear] = useState('');

    const [filteredData, setFilteredData] = useState(animeList.data)
console.log(animeList.data)
    const performSearch = () => {
      let filter = animeList;
  
      if (genre) {
        filter = filteredData.filter(animeList.data.genres.name === genre);
      }else if(genre){
        filteredData.filter(animeList.data.explicit_genres.name === genre);
      }else if(genre){
        filteredData.filter(animeList.data.demographics.name === genre);
      }else if(genre){
        filteredData.filter(animeList.data.themes.name === genre);
      }

       if (status) {
        filter = filteredData.filter(item => item.status === status);
      }
      if (order) {
        
        if (order === 'Nombre A-Z') {
          filter = filteredData.sort((a, b) => a.animeList.data.title.localeCompare(b.animeList.data.title));
        } else if (order === 'Actualizados') {
          filter = filteredData.sort((a, b) => new Date(b.animeList.data.aired.to.day) - new Date(a.updated_at));
        } else if (order === 'Calificación') {
          filter = filteredData.sort((a, b) => b.animeList.data.score - a.animeList.data.score);
        }
      }
      if (year) {
        filter = filteredData.filter(animeList.data.aired.prop.from.year === Number(year)); 
      }
  
      setFilteredData(filter);
    };
    const handleSelect = (setter) => (eventKey) => {
      setter(eventKey);
      
      performSearch();
    }; 
    useEffect(()=>{
      performSearch()
    },[genre, status, order, year])

    
    //genres.name. , explicit_genres.name , themes.name , demographics.name


  return (
    <div id='formulario-search'>
<Dropdown className="d-inline mx-2"  onSelect={handleSelect(setGenre)} >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info' style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>
        Géneros
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item eventKey="Action" >Action</Dropdown.Item>
          <Dropdown.Item eventKey="Space">Espacial</Dropdown.Item>
          <Dropdown.Item eventKey="Kids">Infantil</Dropdown.Item>
          <Dropdown.Item eventKey="Mecha">Mecha</Dropdown.Item>
          <Dropdown.Item eventKey="Sci-Fi">Ciencia Ficción</Dropdown.Item>
          <Dropdown.Item eventKey="Romance">Romance</Dropdown.Item>
          <Dropdown.Item eventKey="Shounen">Shounen</Dropdown.Item>
          <Dropdown.Item eventKey="Horror">Terror</Dropdown.Item>
          <Dropdown.Item eventKey="Martial Arts">Artes Marciales</Dropdown.Item>
          <Dropdown.Item eventKey="Comedy">Comedia</Dropdown.Item>
          <Dropdown.Item eventKey="Drama">Drama</Dropdown.Item>
          <Dropdown.Item eventKey="Fantasy">Fantasía</Dropdown.Item>
          <Dropdown.Item eventKey="Isekai">Isekai</Dropdown.Item>
          <Dropdown.Item eventKey="Military">Militar</Dropdown.Item>
          <Dropdown.Item eventKey="Detective">Detective</Dropdown.Item>
          <Dropdown.Item eventKey="Samurai">Samurai</Dropdown.Item>
          <Dropdown.Item eventKey="Supernatural">Sobrenarutal</Dropdown.Item>
          <Dropdown.Item eventKey="Harem">Harem</Dropdown.Item>
          <Dropdown.Item eventKey="Adventure">Aventuras</Dropdown.Item>
          <Dropdown.Item eventKey="Gore">Sangriento</Dropdown.Item>
          <Dropdown.Item eventKey="Ecchi">Ecchi</Dropdown.Item>
          <Dropdown.Item eventKey="Historical">Histórico</Dropdown.Item>
          <Dropdown.Item eventKey="Sports">Deporte</Dropdown.Item>
          <Dropdown.Item eventKey="Mystery">Misterio</Dropdown.Item>
          <Dropdown.Item eventKey="Psychological">Psicológico</Dropdown.Item>
          <Dropdown.Item eventKey="Seinen">Sheinen</Dropdown.Item>
          <Dropdown.Item eventKey="Super Power">Super poderes</Dropdown.Item>
          <Dropdown.Item eventKey="Yaoi">Yaoi</Dropdown.Item>
          <Dropdown.Item eventKey="Racing">Carreras</Dropdown.Item>
          <Dropdown.Item eventKey="Reincarnation">Reencarnación</Dropdown.Item>
          <Dropdown.Item eventKey="School">Escolares</Dropdown.Item>
          <Dropdown.Item eventKey="Avant Garde">Vanguardia</Dropdown.Item>
          <Dropdown.Item eventKey="Magic">Magia</Dropdown.Item>
          <Dropdown.Item eventKey="Music">Música</Dropdown.Item>
          <Dropdown.Item eventKey="Shoujo">Shoujo</Dropdown.Item>
          <Dropdown.Item eventKey="Suspense">Suspense</Dropdown.Item>
          <Dropdown.Item eventKey="Yuri">Yuri</Dropdown.Item>


        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2"  onSelect={handleSelect(setStatus)} >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info' style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>
        Estado
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="true">En emisión</Dropdown.Item>
          <Dropdown.Item eventKey="false">Finalizado</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2"  onSelect={handleSelect(setOrder)} >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info' style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>
        Orden
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item >Actualizados</Dropdown.Item>
          <Dropdown.Item >Nombre A-Z</Dropdown.Item>
          <Dropdown.Item >Calificación</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2"  onSelect={handleSelect(setYear)} >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-info' style={{ backgroundColor: '#c2d8fb' , color : 'black' , border: '1px solid #5091fb'}}>
        Año
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="2024">2024</Dropdown.Item>
          <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
          <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
          <Dropdown.Item eventKey="2021">2021</Dropdown.Item>
          <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
          <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
          <Dropdown.Item eventKey="2018">2018</Dropdown.Item>
          <Dropdown.Item eventKey="2017">2017</Dropdown.Item>
          <Dropdown.Item eventKey="2016">2016</Dropdown.Item>
          <Dropdown.Item eventKey="2015">2015</Dropdown.Item>
          <Dropdown.Item eventKey="2014">2014</Dropdown.Item>
          <Dropdown.Item eventKey="2013">2013</Dropdown.Item>
          <Dropdown.Item eventKey="2012">2012</Dropdown.Item>
          <Dropdown.Item eventKey="2011">2011</Dropdown.Item>
          <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
          <Dropdown.Item eventKey="2009">2009</Dropdown.Item>
          <Dropdown.Item eventKey="2008">2008</Dropdown.Item>
          <Dropdown.Item eventKey="2007">2007</Dropdown.Item>
          <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
          <Dropdown.Item eventKey="2005">2005</Dropdown.Item>
          <Dropdown.Item eventKey="2004">2004</Dropdown.Item>
          <Dropdown.Item eventKey="2003">2003</Dropdown.Item>
          <Dropdown.Item eventKey="2002">2002</Dropdown.Item>
          <Dropdown.Item eventKey="2001">2001</Dropdown.Item>
          <Dropdown.Item eventKey="2000">2000</Dropdown.Item>
          <Dropdown.Item eventKey="1999">1999</Dropdown.Item>
          <Dropdown.Item eventKey="1998">1998</Dropdown.Item>
          <Dropdown.Item eventKey="1997">1997</Dropdown.Item>
          <Dropdown.Item eventKey="1996">1996</Dropdown.Item>
          <Dropdown.Item eventKey="1995">1995</Dropdown.Item>
          <Dropdown.Item eventKey="1994">1994</Dropdown.Item>
          <Dropdown.Item eventKey="1993">1993</Dropdown.Item>
          <Dropdown.Item eventKey="1992">1992</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Formulario   