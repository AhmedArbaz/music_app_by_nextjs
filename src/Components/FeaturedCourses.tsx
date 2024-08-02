'use client'
import React from 'react'
import courseData from "../data/music_courses.json" // ya ham nay banaya tha khud hi cards kay liay
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { Button } from './ui/moving-border';


//ya ham ais liay kar rhay hain kay hamary api say data jo a raha hay vo same datatype ka rahay ager change ho ga to hamin yahi pata chal jay ga kay kia error a raha hay ya api say data nahi aya kuch aur ais lia interface use kia jata hay ham apny sary data jo gernalize kar dain gay
interface Courses {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
// ya kar lia kay jo bhi data ay ga vo ya ana chiay aur ais data type ka ana chiay na aur koi data ay na datatype change ho ya validation khud lag gai


const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course: Courses) => course.isFeatured)
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h1>
                    <p className='font-extrabold text-4xl'>Learn with the Best</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className=" mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Courses) => (
                        <div key={course.id} className=" flex justify-center">

                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow ">

                                    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>


                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-3'>{course.description}</p>


                                   <Link href={`/courses/${course.slug}`}>
                                    <Button
                                     borderRadius="1rem"
                                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
                                    >
                                    Learn More
                                    </Button>
                                    </Link>

                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/courses"}
                    className='px-4 py-2 rounded-lg border bg-neutral-500 text-neutral-700  hover:bg-gray-100 transition duration-200'
                >
                    View All courses
                </Link>
            </div>

        </div>
    )
}

export default FeaturedCourses
