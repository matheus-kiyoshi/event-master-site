import BannerPrimary from '@/app/components/BannerPrimary'
import BannerSecondary from '@/app/components/BannerSecondary'
import categories from '@/app/utils/categories'

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <BannerPrimary />
      <div className="p-2 text-blue">
        <p className="text-2xl font-medium">Eventos em Destaque</p>
        <p className="font-light text-base">
          Se divirta com os principais eventos de São Paulo e do Brasil!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <BannerSecondary />
        <BannerSecondary />
        <BannerSecondary />
      </div>
      <div className="p-2 text-blue">
        <p className="text-2xl font-medium">Navegue por tipo de Evento</p>
        <p className="font-light text-base">Vá ao evento que é a sua cara :D</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-1 lg:gap-2">
        {categories.map((category) => (
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            key={category.id}
          >
            <img src={category.icon} alt="aa" className="rounded-full" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
