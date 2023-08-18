import BannerPrimary from '@/app/components/BannerPrimary'
import BannerSecondary from '@/app/components/BannerSecondary'
import categories from '@/app/utils/categories'
import fetchWrapper from '@/app/utils/fetchWrapper'

export default async function Dashboard() {
  // const response = await fetchWrapper('/events/main', {
  //   method: 'GET',
  // })
  const event = {
    title: 'Taylor Swift',
    price: [
      {
        sector: 'Pista',
        amount: '200',
      },
    ],
    categories: ['Show'],
    description: 'The Eras Tour',
    city: 'São Paulo',
    formattedAddress: 'Allianz Parque, São Paulo',
    location: {
      latitude: '-23.527201',
      longitude: '-46.678572',
    },
    banner: 'banner.png',
    flyers: ['flyer1.png', 'flyer2.png'],
    coupons: [],
    date: new Date(),
    participants: [],
  }

  const response = [event, event, event, event]

  const secondaryResponse = response.slice(1)

  return (
    <div className="container mx-auto">
      <BannerPrimary events={response[0]} />
      <div className="py-2 px-7 text-blue">
        <p className="text-2xl font-medium">Eventos em Destaque</p>
        <p className="font-light text-base">
          Se divirta com os principais eventos de São Paulo e do Brasil!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4 px-5">
        {secondaryResponse.map((event: any) => (
          <BannerSecondary key={event.id} event={event} />
        ))}
      </div>
      <div className="py-2 px-7 text-blue">
        <p className="text-2xl font-medium">Navegue por tipo de Evento</p>
        <p className="font-light text-base">Vá ao evento que é a sua cara :D</p>
      </div>
      <div className="grid grid-cols-2 px-5 md:grid-cols-7 gap-1 lg:gap-2">
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
