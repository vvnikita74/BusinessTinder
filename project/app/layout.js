import styles from "../styles/root.module.sass"
import localFont from 'next/font/local'

const Font = localFont({
  src: [
    {
      path: '../public/fonts/Regular.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/SemiBold.woff',
      weight: '600',
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Font.className} ${styles.main}`}>{children}</body>
    </html>
  )
}
