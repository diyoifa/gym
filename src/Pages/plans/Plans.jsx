import React from 'react'
import './Plan.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {plans} from '../../data'
import Card from '../../UI/Card'
const Plans = () => {
  return (
    <>
      <Header title='Our plans' image={HeaderImage}>
         Explore our range of subscription plans and find the perfect fit for your fitness journey. With a variety of features and pricing options, you can choose the plan that meets your needs and budget. Whether you're a beginner or an experienced athlete, we have a plan that can help you reach your goals. Join us today and take the first step towards a healthier, happier you!
      </Header>
      <div className="plans">
        <section className="container plans__container">
          {
            plans.map(({id, name, desc, price, features})=> 
              <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1>
                  <h4>Features</h4>
                  {
                    features.map(({feature, available}, index)=>
                        <p key={index} className = {!available ? 'disable': 'enable'}>
                            {feature}
                        </p>
                    )
                  }
                  <button onClick={() => window.open('https://wa.link/wtnqzo', '_blank')}  className='btn lg' >Choose plan</button>
              </Card>
            )
          }
        </section>
      </div>
    </>
  )
}

export default Plans
