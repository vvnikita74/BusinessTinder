import styles from "../../styles/buttonLine.module.sass"
import ActionButton from "../atoms/actionButton"
import Like from "../../public/Like.svg"
import X from "../../public/X.svg"

export default function ButtonLine () {
    return (
        <div className={styles.buttonLine}>
            <ActionButton type={Like} active={false}/>
            <ActionButton type={X} active={true}/>
            <ActionButton type={Like} active={false}/>
            <ActionButton type={Like} active={true}/>
            <ActionButton type={X} active={false}/>
        </div>
    )
}