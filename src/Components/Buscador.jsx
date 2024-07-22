import React from 'react'

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';



function Buscador() {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Button  variant="info" className='buscador' >Buscador</Button >
  )
}

export default Buscador