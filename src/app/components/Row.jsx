import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import Thumbnail from './Thumbnail'
import React from 'react'
import { useRef, useState } from 'react'

function Row({ title, movies }) {
    // console.log(movies)

    const rowRef = useRef(null)
    const [isMoved, setIsMoved] = useState(false)

    const handleScroll = (position) => {
        setIsMoved(true)

        if (rowRef.current) {
            const { clientWidth, scrollLeft } = rowRef.current
            const scrollto =
                position === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth

            rowRef.current.scrollTo({ left: scrollto, behavior: 'smooth' })

        }

    }

    // console.log(rowRef.current.clientWidth, rowRef.current.scrollLeft)
    return (
        <div className='h-40 space-y-0.5 md:sapce-y-2'>
            <h2 className='w-56  cursor-pointer text-sm  font-semibold text-[#e5e5e5] transiton duration-200 hover:text-white md:text-2xl'>{title}</h2>
            <div className='group relative md:-ml-2 '>
                <ChevronRightIcon className={`absolute top-0 bottom-0 right-2 z-40 m-auto w-9 h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 `} onClick={() => { handleScroll("rigth") }} />

                <div className="flex itmes-center sapce-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide" ref={rowRef}>
                    {movies.map((movie) => {
                        return <Thumbnail key={movie.id} movie={movie} />
                    })}
                </div>

                <ChevronLeftIcon className={`absolute top-0 bottom-0 left-2 z-40 m-auto w-9  h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'} `} onClick={() => { handleScroll("left") }} />
            </div>
        </div>

    )
}

export default Row
