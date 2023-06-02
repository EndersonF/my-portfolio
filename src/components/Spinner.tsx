import Image from 'next/image';
import styles from '../styles/404.module.css';
import spinner from '../../public/assets/gif.gif';

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <Image
        width={480}
        height={270}
        src={spinner}
        objectFit="fill"
        alt="Carregando..."
        onError={e => {
          e.currentTarget.src = '/gif.gif';
        }}
      />
    </div>
  );
}
