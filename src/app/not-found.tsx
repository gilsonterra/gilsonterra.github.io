import HomeParallax from "./components/HomeParallax/HomeParallax";
import TypewriterTitle from "./components/TypewriterTitle/TypewriterTitle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <HomeParallax>
      <main className={styles.hero}>
        <div style={{ padding: '20px',display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(50px)' }}>
          <TypewriterTitle text="Ops! Página não encontrada" className={styles.simpleTitle} />
        </div>
        <section className={styles.portrait} aria-label="Retrato principal">
          <img
            className={styles.portraitImage}
            src="/images/profile-site/avatar_sad_without_bg.png"
            alt="Retrato de Gilson Terra"
          />
        </section>
      </main>
    </HomeParallax>
  );
}
