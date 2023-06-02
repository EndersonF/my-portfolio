import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/404.module.css';
import Spinner from '../components/Spinner';

export default function NotFoundPage404() {
  return (
    <>
      <Head>
        <title>404 - Página não encontrada | Enderson Frazão</title>
        <meta name="description" content="404 - Página não encontrada" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Enderson Frazão" />
        <meta name="keywords" content="Enderson, Portfólio" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.h1}>404 - Página não encontrada</h1>
        <Spinner />
        <p className={styles.paragrafo}>
          Oops...Parece que essa página não existe. <br />
          Clique no botão abaixo para voltar para a página inicial.
        </p>
        <div className={styles.link}>
          <button type="button">
            <Link href="/">
              <span>Homepage</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
