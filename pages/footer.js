export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer>
      Hello {date}.
    </footer>
  )
}