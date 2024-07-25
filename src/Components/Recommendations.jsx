import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function Recommendations(props) {

    

  return (
    <div id="all-cards-recommendations" style={{display:'flex' ,justifyContent:"space-between",gap:"0"} }>
<Link   to={`/anime-list/${props.recommendationArr[0].entry.mal_id}` } >
    <Card className='img-recomendadas' style={{ width: '5rem', margin: '10px' , backgroundColor: '#89b4fb'}} >

    <Card.Img variant="top" src={props.recommendationArr[0].entry.images.jpg.large_image_url} style={{ height:'100px'}} />
    <Card.Title className="titulo-recom" style={{ paddingTop:"2px",height:'44px', overflow:'hidden', fontSize:"16px"}}>{props.recommendationArr[0].entry.title}</Card.Title> 


  </Card>
</Link>
<Link   to={`/anime-list/${props.recommendationArr[1].entry.mal_id}`}>
  <Card className='img-recomendadas' style={{ width: '5rem', margin: '10px' , backgroundColor: '#89b4fb' }} >

    <Card.Img variant="top" src={props.recommendationArr[1].entry.images.jpg.large_image_url} style={{ height:'100px'}} />
    <Card.Title className="titulo-recom" style={{ paddingTop:"2px",height:'44px', overflow:'hidden', fontSize:"16px"}}>{props.recommendationArr[1].entry.title}</Card.Title> 


  </Card>
  </Link>
  <Link   to={`/anime-list/${props.recommendationArr[2].entry.mal_id}`}>
    <Card className='img-recomendadas' style={{ width: '5rem', margin: '10px' , backgroundColor: '#89b4fb' }} >

    <Card.Img variant="top" src={props.recommendationArr[2].entry.images.jpg.large_image_url} style={{ height:'100px'}} />
    <Card.Title className="titulo-recom" style={{paddingTop:"2px", height:'44px', overflow:'hidden', fontSize:"16px"}}>{props.recommendationArr[2].entry.title}</Card.Title> 


  </Card>
  </Link>
  <Link   to={`/anime-list/${props.recommendationArr[3].entry.mal_id}`}>
  <Card className='img-recomendadas' style={{ width: '5rem', margin: '10px' , backgroundColor: '#89b4fb' }} >

    <Card.Img variant="top" src={props.recommendationArr[3].entry.images.jpg.large_image_url} style={{ height:'100px'}} />
    <Card.Title className="titulo-recom" style={{ paddingTop:"2px",height:'44px', overflow:'hidden', fontSize:"16px"}}>{props.recommendationArr[3].entry.title}</Card.Title> 


  </Card>
  </Link>
    </div>
  )
}

export default Recommendations