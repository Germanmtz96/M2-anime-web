import React from 'react'

import Card from 'react-bootstrap/Card';

function AboutPage() {
  return (
    <>
    <Card style={{width:'96%', margin:'10px'}}>
    <Card.Body >
      <Card.Text >Bienvenidos a SearchAnime, tu portal definitivo para descubrir y explorar el fascinante mundo del anime. Con una pasión profunda por el anime y la tecnología, hemos creado esta plataforma para que los fans puedan encontrar fácilmente información detallada y actualizada sobre sus series favoritas. SearchAnime ofrece un motor de búsqueda intuitivo y una amplia base de datos para que disfrutes al máximo de tu experiencia otaku.</Card.Text>

    </Card.Body>
    </Card>
      <a href="https://github.com/Germanmtz96/M2-anime-web">Github del Proyecto</a>
      <div id="cards-about">
    <Card  id='about' style={{ width: '14rem' , backgroundColor: '#89b4fb'}}>
      <Card.Img variant="top" src="./src/assets/foto-german.jpg" />
      <Card.Body>
      <Card.Title>Germán Martínez</Card.Title>
      <Card.Text>
          Mi nombre es Germán, tengo 28 años y soy originario de Alicante, España. Soy apasionado y comprometido con mi trabajo, siempre buscando aprender y mejorar en cada proyecto.
        </Card.Text>
        <Card.Link href="https://github.com/Germanmtz96">Github</Card.Link>
        <Card.Link href="https://www.linkedin.com/in/germ%C3%A1n-mart%C3%ADnez-sanch%C3%A9z-a095a4318/">LinkedIn</Card.Link>
      </Card.Body>
    </Card >
    <Card  id='about' style={{ width: '14rem' , backgroundColor: '#89b4fb'}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
      <Card.Title>Huanye</Card.Title>
      <Card.Text>
      Developer based in Spain. Obsessed with making interactive and artistic pages.
        </Card.Text>
        <a href="https://github.com/Huanye98?tab=repositories">Github</a>
        <a href="https://www.linkedin.com/in/huanye-zhu-016792222/">LinkedIn</a>
      </Card.Body>
    </Card >
    </div>
    </>
  )
}

export default AboutPage