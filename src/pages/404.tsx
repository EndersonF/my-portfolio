import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/404.module.css';
import spinner from '../../public/gif.gif';

export default function NotFoundPage404() {
  return (
    <>
      <Head>
        <title>404 - Página Não Encontrada</title>
        <meta name="description" content="Página não encontrada" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Enderson Frazão" />
        <meta name="keywords" content="Enderson, Portfólio" />
      </Head>
      ;
      <div className={styles.container}>
        <h1 className={styles.h1}>404 - Página Não Encontrada</h1>
        <div className={styles.spinner}>
          <Image
            width={480}
            height={270}
            src={spinner}
            objectFit="fill"
            alt="spinner"
          />
        </div>
        <p className={styles.paragrafo}>
          Oops...Parece que essa página não existe. <br />
          Clique no botão abaixo para voltar para a página inicial.
        </p>
        <div className={styles.link}>
          <Link href="/">
            <button type="button" className={styles.button1}>
              <span>Homepage</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
