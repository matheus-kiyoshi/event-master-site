import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-blue mx-auto px-6 fixed top-0 w-full h-16 flex items-center z-10">
      <Image
        src="/em.webp"
        alt="logo"
        width={200}
        height={200}
        priority={true}
        className="mr-24 w-auto h-auto"
      />
      <div className="flex items-center w-[50vw]">
        <input
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
          type="text"
          placeholder="Insira o nome ou endereço do seu evento por aqui! :)"
        />
      </div>
    </nav>
  )
}
