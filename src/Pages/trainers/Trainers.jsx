import React from 'react'
import './Trainers.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook, FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../Components/Trainer'

const Trainers = () => {
  return (
    <>
      <Header title='Our trainers' image={HeaderImage}>
          Discover our expert trainers who will help you reach your fitness goals with personalized workout plans and expert guidance. Join us today and start your journey towards a healthier lifestyle!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials})=>
              <Trainer key={id} image={image} name = {name} job = {job} 
              socials = {[
                            {icon:<BsInstagram/>, link: socials[0]},
                            {icon:<AiOutlineTwitter/>, link: socials[1]},
                            {icon:<FaFacebook/>, link: socials[2]},
                            {icon:<FaLinkedinIn/>, link: socials[3]}

                         ]} 
              />
            )
          }
        </div>
      </section>
    </>
  )
}

export default Trainers
