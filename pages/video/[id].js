import React from 'react'
import content from '../../db.json';

export default function Video(video) {
    console.log(video)
    return (
      <div>
          Id: {video.video.id}
        <p>video {video.video.nome}</p>
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

