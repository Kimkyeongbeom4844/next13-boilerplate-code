import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.spinner_wrap}>
      <div className={styles.spinner}></div>
    </div>
  );
}
