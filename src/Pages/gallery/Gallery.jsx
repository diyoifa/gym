import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import './Gallery.css'

const Gallery = () => {
  const galleryLength = 15
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log("🚀 Gallery ~ images:", images)

  
  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Welcome to our curated gallery of exercises, designed to inspire and guide you on your fitness journey. <br/>
        Get inspired and achieve your fitness goals with our curated gallery of exercises
      </Header>

      <section className="gallery">
          <div className="container gallery__container">
            {
              images.map((image, index)=> 
                  <article key={index} className ='gallery__container-image' >
                      <img src={image} alt={`gallery img${index + 1}`}/>
                  </article>
              )
            }
          </div> 
      </section>
     </> 
  )
}

export default Gallery
