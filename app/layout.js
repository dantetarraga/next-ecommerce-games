import 'semantic-ui-css/semantic.min.css'
import '@/scss/global.scss'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        {children}
      </body>
    </html>
  )
}
