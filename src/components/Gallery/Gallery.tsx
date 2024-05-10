'use client'

import Image from 'next/image'
// import Draggable from 'react-draggable'
import s from './Gallery.module.scss'

interface Image {
  filePath: string
  altText: string
  dimensions: {
    width: number
    height: number
  }
}

interface GalleryProps {
  images: Image[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <>
      {images.map((image, index) => (
        <div className={s.image} key={index}>
          <Image
            src={image.filePath}
            alt={image.altText}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        </div>
      ))}
    </>
  )
}

export default Gallery
