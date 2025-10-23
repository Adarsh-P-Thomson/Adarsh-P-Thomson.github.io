import '../src/index.css'

export const metadata = {
  title: 'Adarsh P Thomson - Portfolio',
  description: 'Software Developer and Tech Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
