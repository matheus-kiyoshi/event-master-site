'use client'
import { Input } from './Input'
import { useState } from 'react'

export const AutoComplete = () => {
  const [suggestions, setSuggestions] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleChangeInput = async (value: string) => {
    setInputValue(value)
    const fetchSuggestions = await fetch(`/api?input=${value}`, {
      method: 'GET',
    })
    const data = await fetchSuggestions.json()

    setSuggestions(data.predictions)
  }

  const handleSelect = (address: any) => {
    setInputValue(address.description)
    setSuggestions([])
  }

  return (
    <>
      <Input
        title="Localização"
        placeholder="Endereço"
        type="input"
        value={inputValue}
        onChange={(e) => handleChangeInput(e.target.value)}
      />
      <ul className="rounded bg-white shadow">
        {suggestions.map((suggestion: any, index) => (
          <li
            className="p-2 cursor-pointer hover:bg-gray-100"
            key={index}
            onClick={() => handleSelect(suggestion)}
          >
            {suggestion.description}
          </li>
        ))}
      </ul>
    </>
  )
}
