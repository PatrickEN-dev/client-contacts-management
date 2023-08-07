import styles from "../register/styles.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <h1 className={styles.loadingText}>Carregando...</h1>
    </div>
  );
}
