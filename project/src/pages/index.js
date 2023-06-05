import Logo from "../components/atoms/logo"
import Footer from "../components/atoms/footer"
import Card from "../components/Card"
import localFont from 'next/font/local'
import styles from "../styles/root.module.sass"

const Font = localFont({
  src: [
    {
      path: '../../public/fonts/Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/SemiBold.woff',
      weight: '600',
    },
  ],
});

export default function Home () {
  return (
    <>
    <div className={`${Font.className} ${styles.main}`}>
        <Logo />
        <Card />
        <Footer />
    </div>
    </>
  )
}
