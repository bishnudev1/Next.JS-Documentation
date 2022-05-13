import styles from '../styles/Module.module.css';

const Module = () => {
  return (
    <>
        <h1 className={styles.headText}>Module CSS or Internal CSS in Next.JS</h1>
        <button className={`${styles.mainBtn} ${styles.textBtn}`} onClick={()=> {alert('You have clicked me...')}}>Click me</button>
    </>
  )
}

export default Module