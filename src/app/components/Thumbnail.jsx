import React from 'react'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { moviesSate, modalState } from '../atom/ModalAtom'

const Thumbnail = ({ movie }) => {
  const [currentmovie, setCurrentMovie] = useRecoilState(moviesSate)
  const [showModal, setShowmodal] = useRecoilState(modalState)


  return (
    <div className=' relative h-28 min-w-[180px]  cursor-pointer transition duration-200  ease-out md:h-36 md:min-w-[260px] md:hover:scale-105' onClick={() => {
      setShowmodal(true)
      setCurrentMovie(movie)

    }}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
          }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
