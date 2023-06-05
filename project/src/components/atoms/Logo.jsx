import styles from "../../styles/logo.module.sass"
import Image from "next/image"
import logoIcon from "../../../public/logoIcon.svg"
export default function Logo () {
    return (
        <div className={styles.logo}>
            <Image src={logoIcon} alt="businessLogo"></Image>
            <div className={styles.logoText}>business</div>
        </div>
    )
};