import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineAddBox, MdOutlinePrivacyTip } from 'react-icons/md'
import { FiFilter } from 'react-icons/fi'
import { LiaMapMarkerSolid } from 'react-icons/lia'
import { BsQuestionCircle } from 'react-icons/bs'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="sidebar fixed z-10 top-16 bottom-0 text-xs text-blue h-screen right-0 p-2 w-24 overflow-y-auto text-center bg-gray-200 shadow">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <Link href={'/'}>
          <div className="flex flex-col cursor-pointer justify-center items-center mb-9">
            <AiOutlineHome size={30} />
            <span>Home</span>
          </div>
        </Link>
        <Link href={'/maps'}>
          <div className="flex flex-col cursor-pointer justify-center items-center mb-9">
            <LiaMapMarkerSolid size={30} />
            <span>Mapa</span>
          </div>
        </Link>
        <Link href={'/create-event'}>
          <div className="flex flex-col cursor-pointer justify-center items-center mb-9">
            <MdOutlineAddBox size={30} />
            <span>Adicionar Evento</span>
          </div>
        </Link>
        <Link href={'/filter-events'}>
          <div className="flex flex-col cursor-pointer justify-center items-center mb-9">
            <FiFilter size={30} />
            <span>Filtrar Eventos</span>
          </div>
        </Link>
        <div className="flex flex-col cursor-pointer justify-center items-center mb-9">
          <BsQuestionCircle size={30} />
          <span>SAC</span>
        </div>
        <div className="flex flex-col cursor-pointer justify-center items-center mb-9">
          <MdOutlinePrivacyTip size={30} />
          <span>Privacidade</span>
        </div>
      </div>
    </aside>
  )
}
