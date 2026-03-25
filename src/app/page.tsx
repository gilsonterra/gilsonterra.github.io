import HomeParallax from "./components/HomeParallax/HomeParallax";
import styles from "./page.module.css";

export default function Home() {
  return (
    <HomeParallax>
      <main className={styles.hero}>
        <div className={styles.texture} aria-hidden="true" />

        <section className={styles.portrait} aria-label="Retrato principal">
          <div className={styles.portraitHalo} aria-hidden="true" />
          <img
            className={styles.portraitImage}
            src="/images/profile-site/profile_without_bg.png"
            alt="Retrato de Gilson Terra"
          />
        </section>
      </main>
    </HomeParallax>
  );
}
