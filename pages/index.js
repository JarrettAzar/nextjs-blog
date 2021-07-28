import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className={utilStyles.headingMd}>
            <center>
              <p>Computer Science and Photography graduate looking for full time opportunities and freelance work.</p>
              <a href="https://drive.google.com/file/d/1e3MxFmscbvcHE4r_Z1uyKAlS1mte9ga7/view?usp=sharing" target="_blank">resume</a> | <a href="https://github.com/JarrettAzar" target="_blank">github</a> | <a href="https://linkedin.com/in/JarrettAzar" target="_blank">linkedin</a> | <a href="mailto:jarrett.b.azar@gmail.com">contact</a>
            </center>
        </section>
    </Layout>
  )
}
