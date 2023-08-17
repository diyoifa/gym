import React from 'react'
import Image from '../images/values.jpg'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
           
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values__image" />
                </div>
            </div>

            <div className="values__right">
                <SectionHeader icon={<GiCutDiamond/>}title = 'Values'/>
                <p>
                    Always remember that every workout brings you closer to your goals. 
                    Every drop of sweat is a small victory that brings you one step closer
                    to becoming the best version of yourself. 
                    Don't give up, keep pushing forward, and turn your dreams into reality. 
                    You can do it!
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc})=>{
                            return <Card key={id} className='values__value'>
                                        <span><img src={icon} alt="value icon" /></span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                        
                                </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
