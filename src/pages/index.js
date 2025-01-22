import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to Your Portal!</h1>
        <p>This is your portal home page.</p>
      </main>
    </div>
  );
}
