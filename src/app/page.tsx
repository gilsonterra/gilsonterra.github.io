import HomeParallax from "./components/HomeParallax/HomeParallax";
import styles from "./page.module.css";

export default function Home() {
  return (
    <HomeParallax>
      <main className={styles.hero}>
        <section className={styles.portrait} aria-label="Retrato principal">
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
