"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpComingWebinar() {

    const featuredWebinars = [
        {
            title:"Understanding Music Theory",
            description:"Learn the fundamentals of music theory and develop your musical understanding with our comprehensive course. ",
            slug:"music-theory-fundamentals",
            isFeatured:true,
        },
        {
            title:"Violin the Art of Songs",
            description:"Learn the basics of playing guitar with our step-by-step guide course.",
            slug:"violin-fundamentals",
            isFeatured:true,
        },
        {
            title:"Piano For beginners",
            description:"Learn the basics of playing guitar with our step-by-step guide course.Dive deep into the fundamentals of music theory and enhance your musical skills",
            slug:"Understanding-music-theory",
            isFeatured:true,
        },
        {
            title:"Piano For beginners",
            description:"Learn the basics of playing guitar with our step-by-step guide course.Dive deep into the fundamentals of music theory and enhance your musical skills",
            slug:"Understanding-music-theory",
            isFeatured:true,
        },
        {
            title:"Piano For beginners",
            description:"Learn the basics of playing guitar with our step-by-step guide course.",
            slug:"violin-fundamentals",
            isFeatured:true,
        },
         {
            title:"Piano For beginners",
            description:"Learn the basics of playing guitar with our step-by-step guide course.",
            slug:"violin-fundamentals",
            isFeatured:true,
        },

    ]
  return (
    <div className=" p-12 bg-gray-800">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6">
        <div className="text-center ">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold trtacking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
       <HoverEffect items={featuredWebinars.map(webinar =>(
        {
            title:webinar.title,
            description:webinar.description,
            link:'/'
        }
       ))}
       />
        </div>
        <div className="mt-10 text-center">
            <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 to-neutral-700 bg-white hover:bg-gray-100 transition duration-200 text-gray-700">
            
            View All webinars
            </Link>
        </div>
      </div>
    </div>
  )
}

export default UpComingWebinar
