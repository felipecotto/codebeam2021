import React from 'react'
import Image from 'next/image'
import content from '../../db.json';

export default function Video(video) {
    console.log(video)
    return (
      <div>
          Id: {video.video.id}
        <p>video {video.video.nome}</p>
        <Image
        src={video.video.img}
        alt="Picture of the author"
        width={500}
        height={500}
      />

      </div>
    )
  }


  export async function getStaticProps({ params }) {
      const index = params.id - 1;
      const video = content[index];

      return {
        props: {
          video
        }
      }
  }

  export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            },
            {
                params: {
                    id: '2'
                }
            },
            {
              params: {
                  id: '3'
              }
            },
            {
              params: {
                  id: '4'
              }
            }
        ],
        fallback: false,
    };
}

