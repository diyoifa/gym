import React from 'react'
import './About.css'
import Header from '../../Components/Header'
import headerImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/charles-gaudreault-xXofYCc3hqc-unsplash.jpg'
import VisionImage from '../../images/trainer6.jpg'
import MisionImage from '../../images/john-arano-h4i9G-de7Po-unsplash.jpg'



const About = () => {
  return (
      <>
        <Header title = 'About us' image={headerImage}>
          We're a team of passionate fitness professionals who provide state-of-the-art equipment, exercise programs, and classes to help clients achieve their health and fitness goals. Our approach focuses on holistic health and wellness, and we strive to create a welcoming and supportive environment for all clients.
        </Header>
        <section className="about__story">
          <div className="container about__story-container">
            
            <div className="about__section-image">
              <img src={StoryImage} alt="story img"/>
            </div>

            <div className="about__section-content">
              <h1>Our Story</h1>
              <p>
                 We started with a idea to create a gym that provided a welcoming and supportive environment for all clients. Through personalized programs and expert guidance on health and wellness, we have helped countless individuals achieve their fitness goals. Today, we remain committed to our core values of inclusivity, support, and community, and we are excited to continue helping our clients live healthier, happier lives.
              </p>
              <p>
                Our team of trainers and instructors is made up of passionate and knowledgeable professionals who are dedicated to helping our clients achieve their goals. We believe that fitness is not a one-size-fits-all approach, which is why we work with each client to create a personalized exercise program that meets their unique needs and abilities. Our trainers are experts in a wide range of fitness disciplines, from strength
                training and cardio to yoga and Pilates, and they are constantly updating their knowledge and skills to ensure that our clients receive the best possible guidance and support.
              </p>
              <p>
              At our gym, we are committed to helping our clients not only achieve their fitness goals but also improve their overall quality of life. 
              </p>
            </div>
            
          </div>
        </section>

        <section className="about__vision">
          <div className="container about__vision-container">
            
            <div className="about__section-content">
              <h1>Our Vision</h1>
              <p>
                  Our vision is to create a world where everyone has access to the resources and support they need to live a healthy and fulfilling life. We believe that fitness is a fundamental component of this vision, as it not only improves physical health but also mental, emotional, and social wellbeing. We envision a future where people of all ages, backgrounds, and abilities can easily and affordably access top-quality fitness facilities, programs, and resources, and where they are empowered to take control of their own health and wellness. We see ourselves as a catalyst for this change, working to create a more inclusive, supportive, and sustainable fitness industry that benefits everyone.              
              </p>
              <p>
                   We believe that achieving this vision requires a holistic approach that goes beyond traditional notions of fitness. We recognize that people's health and wellness are influenced by a complex array of factors, from their environment and lifestyle to their social connections and mental wellbeing. That's why we are committed to not only providing top-notch fitness facilities and programs but also to addressing the broader context in which our clients live and work. We strive to create a culture of wellbeing that permeates all aspects of our clients' lives, from the gym to the workplace to the home. By doing so, we hope to inspire a broader movement towards a more health-conscious and sustainable society.
              </p>
            </div>
            <div className="about__section-image">
              <img src={VisionImage} alt="story img"/>
            </div>
          </div>
        </section>

        
        <section className="about__mision">
          <div className="container about__mision-container">
            <div className="about__section-image">
              <img src={MisionImage} alt="story img"/>
            </div>
            <div className="about__section-content">
              <h1>Our Mision</h1>
              <p>
                   Our mission is to empower individuals to take control of their own health and wellness by providing them with the tools, resources, and support they need to achieve their fitness goals. We strive to create a welcoming and supportive environment that encourages our clients to push themselves to new heights, while also respecting their individual needs and abilities. We believe that fitness is not a one-size-fits-all approach, and that everyone deserves a personalized exercise program that meets their unique needs and preferences.
              </p>
              <p>
                   We are committed to delivering the highest quality fitness facilities, programs, and services, and to staying at the forefront of industry trends and innovations. We believe that our clients deserve nothing less than the best, and we work tirelessly to ensure that they receive the best possible guidance, support, and motivation. Whether it's through one-on-one training, group fitness classes, or community events and initiatives, we are dedicated to helping our clients achieve their full potential and live their best lives.
              </p>
            </div>
          </div>
        </section>


      </>
  )
}

export default About
