/* eslint-disable react/no-unescaped-entities */
'use client'
import CardFilter from '@/app/components/CardFilter'
import { Button } from '@/app/components/Form/Button'
import { Input } from '@/app/components/Form/Input'
import { AutoComplete } from '@/app/components/Form/InputAutoComplete'
import { InputRange } from '@/app/components/Form/InputRange'
import categories from '@/app/utils/categories'
import fetchWrapper from '@/app/utils/fetchWrapper'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function FilterEvents() {
  const searchParams = useSearchParams()
  const [events, setEvents] = useState([])

  const getEvents = async (data: any) => {
    const response = await fetchWrapper(
      '/events/filter?' + new URLSearchParams({ name: data.name }).toString(),
      {
        method: 'GET',
      },
    )

    setEvents(response)
  }

  useEffect(() => {
    if (searchParams.get('q')) {
      getEvents({
        name: searchParams.get('q'),
      })
    }
  }, [searchParams])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-8">
        <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">Filtrar Eventos</p>
            <p className="text-blue text-base font-normal">
              Busque o evento que é a sua cara de maneira mais detalhada!
            </p>
          </div>
          <Input
            title="Nome"
            placeholder="Insira o nome do seu evento"
            type="text"
          />
          <AutoComplete />
          <div className="grid grid-cols-2 gap-3">
            <Input
              title="Data"
              placeholder="Insira a data do evento"
              type="date"
            />
            <div className="mb-4 text-blue font-medium">
              <label htmlFor="categories" className="text-blue">
                Categoria
              </label>
              <select
                name="categories"
                id="categories"
                className="w-full px-6 py-2 bg-white rounded-lg border border-teal-400"
                defaultValue={''}
              >
                <option value="" disabled>
                  Selecione
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <InputRange title="Distância" />
          <InputRange title="Valor" />
          <div className="grid grid-cols-2 gap-7 w-2/3 m-auto">
            <Button
              title="Limpar"
              className="bg-white border border-blue text-blue hover:bg-zinc-50"
            />
            <Button title="Buscar" className="hover:bg-opacity-90" />
          </div>
        </div>
        <div className="mb-4 ml-0 mr-4 md:mr-2 md:ml-4">
          <p className="text-blue text-2xl font-medium">Filtrar Eventos</p>
          <p className="text-blue text-base font-normal">
            Busque o evento que é a sua cara de maneira mais detalhada!
          </p>
          {events.map((event, index) => (
            <CardFilter key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}
