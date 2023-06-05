import styles from '../../styles/progress.module.sass'

export default function ProgressBar ({ currentValue, targetValue }) {

    const progressPercent = (currentValue/targetValue)*100;

    return (
        <div className={styles.progressBlock}>
        <div className={styles.progressBar}><div className={styles.progress} style={{width: `${progressPercent}%`}}></div></div>
        <div className={styles.progressText}>{currentValue} из {targetValue}</div>
        </div>
    )
}
