import styles from './VideoThumb.module.scss';

export default function VideoThumb() {
    return (
      <section className={styles.VideoThumb}>
        <div className="container">
          Edições Anteriores
        </div>
      </section>
    )
  }

  export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }