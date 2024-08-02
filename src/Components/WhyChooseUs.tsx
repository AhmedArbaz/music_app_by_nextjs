"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent = [
    {
        title: "Discover Your Sound with Our Music School A Personal Journey in Music Mastery",
        description: "Embrak on a musical journey that's just right for you. Learn the basics of playing guitar with our step-by-step guide course.At our music school, your aspirations will be met with dedication and passion. We believe that every student is unique, and we work hard to ensure that each student receives the personalized attention and guidance they deserve.Gives Support individual needs, family needs, and educational needs.",
    },
    {
        title:"Live Feedback & Engagement",
        description:"Immerse yourself in an interactive learning experience. Our platform offers a wide range of learning resources, including videos, interactive games, and audio recordings. We provide engaging feedback and engaging engagement. This approach enhances your understanding and helps you reach your goals.",
    },
    {
        title:"Limitless Learning Opportunities",
        description:"With our expansive resource library and dynamic course offerings, you'll never find yourself iwhtout something new to explore. Our platform offers an endless variety of learning opportunities. You'll never have to stop learning.Ensuring your success is our top priority. We strive to provide you with the resources and support you need to achieve your goals."
    },
    {
        title:"Personalized Learning",
        description:"Our platform offers personalized learning. We understand that every student is unique, and we work hard to ensure that each student receives the personalized attention and guidance they deserve.With our expansive resource library and dynamic course offerings, you'll never find yourself whtout something new to explore. Our platform offers an endless variety of learning opportunities."
    },
    {
        title: "Discover Your Sound with Our Music School A Personal Journey in Music Mastery",
        
        description: "Embrak on a musical journey that's just right for you. Learn the basics of playing guitar with our step-by-step guide course.At our music school, your aspirations will be met with dedication and passion. We believe that every student is unique, and we work hard to ensure that each student receives the personalized attention and guidance they deserve.Gives",
    },
    { 
        title:"Limitless Learning Opportunities",
        description:"With our expansive resource library and dynamic course offerings, you'll never find yourself iwhtout something new to explore. Our platform offers an endless variety of learning opportunities. You'll never have to stop learning.Ensuring your success is our top priority. We strive to provide you with the resources and support you need to achieve your goals."
    },
]
function WhyChooseUs() {
return(
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
)
}

export default WhyChooseUs