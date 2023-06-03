import styles from "../../styles/buttonLine.module.sass"
import ActionButton from "../atoms/actionButton"
import Like from "../../public/Like.svg"
import X from "../../public/X.svg"
import Star from "../../public/Star.svg"
import Boost from "../../public/Boost.svg"
import Back from "../../public/Back.svg"

export default function ButtonLine () {
    return (
        <div className={styles.buttonLine}>
            <ActionButton type={Back} active={false}/>
            <ActionButton type={X} active={true}/>
            <ActionButton type={Star} active={false}/>
            <ActionButton type={Like} active={true}/>
            <ActionButton type={Boost} active={false}/>
        </div>
    )
}