import styles from "../styles/root.module.sass"
import localFont from 'next/font/local'

const Font = localFont({
  src: [
    {
      path: '../public/fonts/Book.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/Bold.woff',
      weight: '700',
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
