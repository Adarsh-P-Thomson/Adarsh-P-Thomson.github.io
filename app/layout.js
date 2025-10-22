import '../src/index.css'

export const metadata = {
  title: 'Adarsh P Thomson - Portfolio',
  description: 'Full-Stack Developer & UI/UX Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
