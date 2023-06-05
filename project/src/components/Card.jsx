import styles from "../styles/card.module.sass"
import ProgressBar from "./organisms/progress"
import ButtonLine from "./organisms/buttonLine"
import Image from "next/image"
import caseIcon from "../../public/caseIcon.svg"
import aboutIcon from "../../public/aboutIcon.svg"


export default function Card () {
    return (
        <>
        <div className={styles.Card}>
            <div className={styles.textBlock}>
                <div className={styles.text}>
                    <div className={styles.main}>Email маркетинг</div>
                    <div className={styles.middle}><Image src={caseIcon} alt="caseIcon" />Продажи</div>
                    <div className={styles.bottom}>Только не в спам!</div>
                </div>
                <div className={styles.aboutButton}>
                    <Image src={aboutIcon} alt="aboutIcon" />
                </div>
            </div>
            <div className={styles.buttonLine}><ButtonLine /></div>
        </div>
        <div className={styles.Progress}><ProgressBar currentValue={9} targetValue={13}/></div>
        </>
    )
}