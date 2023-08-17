/* eslint-disable react/no-unescaped-entities */
import { Input } from '@/app/components/Form/Input'
import { InputFile } from '@/app/components/Form/InputFile'
import categories from '@/app/utils/categories'

export default function CreateEvent() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-8">
        <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
            <p className="text-blue text-base font-light">
              Crie o seu próprio evento da maneira que você preferir! :)
            </p>
          </div>
          <Input
            title="Título"
            placeholder="Insira o nome do seu evento"
            type="text"
          />
          <Input
            title="Endereço"
            placeholder="Insira o endereço do seu evento"
            type="text"
          />
          <Input
            title="Cupom"
            placeholder="Insira o cupom do seu evento"
            type="text"
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              title="Data"
              placeholder="Insira a data do evento"
              type="date"
            />
            <Input
              title="Horário"
              placeholder="Insira o horário do evento"
              type="time"
            />
          </div>
          <div className="grid gap-2">
            <p className="text-blue text-base font-medium">Categorias</p>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <div key={category.id} className="text-blue">
                  <input type="checkbox" className="mr-2" />
                  <label>{category.name}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-blue font-medium text-base">Valor</p>
            <p className="text-neutral-500 text-[10px] font-light">
              Caso seu evento seja gratuito, o campo deverá ficar vazio. Caso
              haja mais de um setor, basta adicionar a seção. Se houver cupom
              promocional, basta colocar o código no campo "cupom".
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <Input
              title="Preço"
              placeholder="R$00,00"
              type="text"
              className="col-span-2"
            />
            <Input
              title="Setor"
              placeholder="Insira o nome do setor"
              type="text"
              className="col-span-3"
            />
          </div>
          <div>
            <Input
              title="Descrição"
              placeholder="Digite a descrição do evento"
              type="textarea"
            />
          </div>
        </div>
        <div className="mb-4 ml-0 mr-4 md:mr-2 md:ml-4">
          <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
          <p className="text-blue text-base font-light">
            Crie o seu próprio evento da maneira que você preferir! :)
          </p>
          <div className="my-4">
            <p className="text-blue text-base font-medium">Banner</p>
            <p className="text-neutral-500 text-sm font-light">
              Insira um banner no formato 336x280
            </p>
            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow mt-2">
              <InputFile />
            </div>
          </div>
          <div className="my-4">
            <p className="text-blue text-base font-medium">Flyers</p>
            <p className="text-neutral-500 text-sm font-light">
              Insira até três flyers
            </p>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-blue text-base font-medium">Mapa do Evento</p>
            <p className="text-neutral-500 text-sm font-light">
              Insira o Mapa do Evento indicando os setores
            </p>
            <div className="w-full h-56 bg-zinc-300 rounded-3xl shadow mt-2">
              <InputFile />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
