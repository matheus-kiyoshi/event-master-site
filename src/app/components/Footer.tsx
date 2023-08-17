export default function Footer() {
  return (
    <footer className="w-full h-6 fixed bottom-0 items-center bg-blue flex justify-end gap-2 text-white pr-32">
      <p>EventMasters © {new Date().getFullYear()}</p>
      <p>Todos os direitos reservados</p>
    </footer>
  )
}
