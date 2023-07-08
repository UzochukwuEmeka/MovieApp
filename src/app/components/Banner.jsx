'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { baseUrl } from "../constant/Movieurl"
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/solid"

const Banner = ({ movieData }) => {

  const [filmData, setFilmData] = useState(null)

  useEffect(() => {
    setFilmData(movieData[Math.floor(Math.random() * movieData.length)])

  }, [movieData])

  console.log(filmData)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
   
      <div className="absolute top-0  left-0 -z-10 h-[95vh] w-full">
        <Image alt="Banner Image" src={`${baseUrl}${filmData?.backdrop_path || filmData?.poster_path}`} layout="fill" objectFit="cover" />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
        {filmData?.original_title || filmData?.title}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {filmData?.overview}
      </p>
      <div className="flex sapce-x-3 gap-2">
        <button className="bannerbutton bg-white text-black">
          <FaPlay className="text-black w-4 h-4 md:w-7 md:h-7" />
          Play
        </button>
        <button className="bannerbutton bg-[gray]/70">More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /></button>

      </div>
    </div>

  )
}

export default Banner
