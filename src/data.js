import {SiOpenaigym} from 'react-icons/si'
import Honesty from '../src/images/honesto.png'
import Respect from '../src/images/confianza.png'
import Responsibility from '../src/images/responsabilidad.png'
import Empathy from '../src/images/empatia.png'


export const links = [
    {
        name: "Home",
        path: '/',
        property: '_self'
    },
    {
        name: "About",
        path: '/about',
        property: '_self'
    },
    {
        name: "Gallery",
        path: '/gallery',
        property: '_self'
    },
    {
        name: "Plans",
        path: '/plans',
        property: '_self'
    },
    {
        name: "Trainers",
        path: '/trainers',
        property: '_self'
    },
    {
        name: "Exercises",
        path: 'https://exercises-gregorio-cardona.netlify.app/',
        property: '_blank'
    },
    {
        name: "Contact",
        path: '/contact',
        property: '_self'
    }
]



export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Starting Strength",
        info: "A strength training program that focuses on basic compound exercises such as squats, deadlifts, and bench press to build strength and muscle mass.",
        path: "https://startingstrength.com/"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "HIIT (High-Intensity Interval Training)",
        info: "A cardio-focused program that involves short bursts of high-intensity exercise followed by periods of rest to improve cardiovascular health and burn calories.",
        path: "https://www.hindawi.com/"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "StrongLifts 5x5",
        info: "A program that focuses on five basic compound exercises to build strength and muscle mass. The program involves three workouts per week, with each workout consisting of five sets of five reps for each exercise.",
        path: "https://stronglifts.com/5x5/"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "CrossFit",
        info: " A popular training program that combines elements of weightlifting, cardio, and gymnastics to improve overall fitness and performance. The program is typically performed in group classes and involves varied and challenging workouts.",
        path: "https://www.crossfit.com/"
    }
]


export const values = [
    {
        id: 1,
        icon: Honesty,
        title: "Honesty",
        desc: "Telling the truth and acting with integrity."
    },
    {
        id: 2,
        icon: Respect,
        title: "Respect",
        desc: "Treating others with dignity and consideration."
    },
    {
        id: 3,
        icon: Responsibility,
        title: "Responsibility",
        desc: "Taking responsibility for our actions and decisions."
    },
    {
        id: 4,
        icon: Empathy,
        title: "Empathy",
        desc: "Understanding the perspectives and feelings of others."
    }
]

export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "The frequency of exercise depends on various factors such as your fitness goals, current fitness level, age, health status, and personal preferences. As a general guideline, the American College of Sports Medicine recommends that adults should aim for at least 150 minutes of moderate-intensity exercise per week, which can be spread out over at least three days. Alternatively, you can also aim for 75 minutes of vigorous-intensity exercise per week, or a combination of moderate and vigorous exercise."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time of day to work out depends on your individual schedule, preferences, and lifestyle. Some prefer working out in the morning as it helps establish a consistent routine and boost energy levels. Others may prefer working out in the evening to relieve stress and unwind after a long day. Ultimately, the best time to work out is the time that works best for you and allows you to be consistent with your exercise routine."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "The length of your workouts depends on your fitness goals, current fitness level, and schedule. As a general guideline, adults should aim for at least 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week, spread out over at least three days. Strength training exercises should also be included at least two days per week, working all major muscle groups. However, the duration of each workout can vary depending on your individual needs and preferences, ranging from 30 minutes to 60 minutes or more. The most important thing is to be consistent with your exercise routine and make it a part of your daily or weekly schedule."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, warming up before your workouts is important to prepare your body for physical activity, increase blood flow to your muscles, and reduce the risk of injury. A proper warm-up can include light cardio exercises such as jogging or jumping jacks, dynamic stretching to improve range of motion, and specific warm-up exercises for the muscles you'll be working during your workout. The duration of your warm-up can vary depending on the intensity and duration of your workout, but generally, a warm-up of 5-10 minutes is recommended."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Both strength training and cardio are important for overall fitness and health. The type of exercise you do depends on your fitness goals and personal preferences. Incorporating both strength training and cardio into your workout routine can provide the best results for overall fitness and health. Aim for a balance between the two and consider consulting with a certified fitness professional to create a workout plan tailored to your individual needs and goals."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes, lifting weights is a popular and effective form of strength training that can help increase muscle mass, improve bone density, and boost metabolism. However, there are other forms of strength training such as bodyweight exercises, resistance band exercises, and using weight machines that can also be effective. The type of strength training you choose depends on your fitness goals, preferences, and access to equipment."
    }
]


export const testimonials = [
    {
        id: 1,
        name: "Luz natalia Amaya",
        quote: "Working with my personal trainer has been a game-changer for me. She tailored my workouts to my specific needs and goals, and the results have been amazing. I feel stronger and more confident than ever before!",
        job: "psychologist",
        avatar: require("./images/IMG-20220901-WA0060.jpg")
    },
    {
        id: 2,
        name: "John B.",
        quote: "I've tried a lot of different exercise routines over the years, but none of them have been as effective as the ones my personal trainer designed for me. He pushed me to work harder than I thought I could, and the results have been incredible. I highly recommend this service!",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Michael R",
        quote: "I was nervous about working with a personal trainer at first, but my trainer made me feel comfortable and supported right away. She created a program that challenged me without being overwhelming, and I'm thrilled with the progress I've made so far",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Maria leticia Guarin",
        quote: "The personalized attention I get from my personal trainer has made all the difference in my fitness journey. He's always available to answer questions or provide feedback, and he pushes me to do my best every time. I can't imagine working out without him!",
        job: "Talking Parrot",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 5,
        name: "Marilux Cardona",
        quote: "I've been a client of this personal training service for a few months now, and I'm so glad I decided to invest in myself. The trainers are knowledgeable, friendly, and dedicated to helping me reach my goals. I've already seen significant improvements in my strength and endurance!",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]


export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'Exercise library', available: true},
            {feature: 'Custom workout plans', available: true},
            {feature: 'Trainer directory', available: true},
            {feature: 'Monthly challenges', available: true},
            {feature: 'Progress tracking', available: true},
            {feature: 'Nutritional information', available: false},
            {feature: 'workout history', available: false},
            {feature: 'workout plans fitness', available: false},
            {feature: 'Integration with Fitbit and Apple Watch to track workouts and progress.', available: false},
            {feature: 'certified personal trainers', available: false},
            {feature: 'track progress and notifications.', available: false},
            {feature: 'Video conferencing with trainers', available: false},
            {feature: 'Performance analytics', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'Exercise library', available: true},
            {feature: 'Custom workout plans', available: true},
            {feature: 'Trainer directory', available: true},
            {feature: 'Monthly challenges', available: true},
            {feature: 'Progress tracking', available: true},
            {feature: 'Nutritional information', available: true},
            {feature: 'workout history', available: true},
            {feature: 'workout plans fitness', available: true},
            {feature: 'Integration with Fitbit and Apple Watch to track workouts and progress.', available: true},
            {feature: 'certified personal trainers', available: false},
            {feature: 'track progress and notifications', available: false},
            {feature: 'Video conferencing with trainers', available: false},
            {feature: 'Performance analytics', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'Exercise library', available: true},
            {feature: 'Custom workout plans', available: true},
            {feature: 'Trainer directory', available: true},
            {feature: 'Monthly challenges', available: true},
            {feature: 'Progress tracking', available: true},
            {feature: 'Nutritional information', available: true},
            {feature: 'workout history', available: true},
            {feature: 'workout plans fitness', available: true},
            {feature: 'Integration with Fitbit and Apple Watch to track workouts and progress.', available: true},
            {feature: 'certified personal trainers', available: true},
            {feature: 'track progress and notifications', available: true},
            {feature: 'Video conferencing with trainers', available: true},
            {feature: 'Performance analytics', available: true}
             ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Natalia Amaya',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]