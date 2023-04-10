import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Yo it's me..</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </section>
    </Layout>
  );
}