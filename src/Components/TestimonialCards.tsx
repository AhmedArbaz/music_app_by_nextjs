'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
        quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name:"Alex Johnson",
        title:"Guitar Student",
    },
    {
        quote:
        'I am grateful to the music school for introducing me to the world of guitar. I am now able to play my guitar and enjoy learning new skills. The music school is truly a gem!',
        name:"Sarah Smith",
        title:"Violin Student",
    },{
        quote:
        'The music school has helped me to develop my guitar skills. I am now able to play my guitar and enjoy learning new skills. The music school is truly a gem!',
        name:"Sarah Smith",
        title:"Piano Student",
    },
    {
        quote:
        'I am grateful to the music school for introducing me to the world of guitar. I am now able to play my guitar and enjoy learning new skills. The music school is truly a gem!',
        name:"Sarah Smith",
        title:"Guitar Student",
    },
    {
        quote:
        'I am grateful to the music school for introducing me to the world of guitar. I am now able to play my guitar and enjoy learning new skills. The music school is truly a gem!',
        name:"Sarah Smith",
        title:"Guitar Student",
    },
    {
        quote:
        "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class. Its make me feel confident and confident. I am now able to play my guitar and enjoy learning new skills. The music school is truly a gem!",
        name:"Sarah Smith",
        title:"Guitar Student",
    },
    {
        quote:"The community and support at this school are unmatched. I've grown not just as a painist,but also as a performer, and I am grateful to the music school for introducing me to the world of guitar. I am now able to play my guitar and enjoy learning new skills. The music school is truly a gem!",
        name:"David Dawood",
        title:"Ashan ",
    }

]

function MusicSchoolTestimonialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black  dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={musicSchoolTestimonials} //auper ham nay array of obj banaya tha vo yaha day dia
        direction="right"
        speed="slow"
        />
        </div>
        </div>
    
    </div>
  )
}

export default MusicSchoolTestimonialCard
