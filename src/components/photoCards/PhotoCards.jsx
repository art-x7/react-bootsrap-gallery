import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'

import Modal from './../../modal/Modal'


const PhotoCards = () => {
  
  const photos = useSelector(state => state.photos.photos)
  const [modalActive, setModalActive] = useState(false)
  const [bigPhoto, setBigPhoto] = useState()

  const getImg = (id) => {
    setModalActive(true)
    const url = photos.find(photo => photo.id == id).url
    setBigPhoto(url)
  }
  
  return (
    <>
      <div className='container'>
        { photos.map(photo => 
        <Card style={{ width: '150px', margin: '10px' }} key={photo.id}>
          <Card.Img className='img-c' variant="top" src={photo.thumbnailUrl} onClick={() => getImg(photo.id)} />
          <Card.Body>
            <Card.Title>Card ID: {photo.id}</Card.Title>
            <Card.Text>
              {photo.title}
            </Card.Text>
          </Card.Body>
        </Card>
        )}
        <Modal active={modalActive} setActive={setModalActive} url={bigPhoto}/>
      </div>
    </>
  )
}


export default PhotoCards