import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import db from '../db.json';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url} />
        <Link href="/sobre"><a><h1>Felipe Blog</h1></a></Link>
      </header>

      <section className="postsContainer">
        <h2>Posts</h2>



        {props.data.map((project) => {
          return (
            <article className="postsContainer__post" key={project.id}>
              <Link href={`/video/${encodeURIComponent(project.id)}`}>
                <a>{project.nome}</a>
              </Link>
            <p>
              Resumo do post
            </p>
          </article>
          )
        })}


      </section>
    </div>
  )
}

export async function getStaticProps() {
  const data = db
  return {
    props: {
      data
    }
  }
}


