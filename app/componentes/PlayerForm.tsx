import { useState } from 'react'
import { Player } from '../types'

interface PlayerFormProps {
  addPlayer: (player: Player) => void
  playerCount: number
}

export default function PlayerForm({ addPlayer, playerCount }: PlayerFormProps) {
  const [player, setPlayer] = useState<Player>({
    name: '',
    physicalCondition: 5,
    shooting: 5,
    passing: 5,
    goalkeeping: 5,
    defense: 5,
    dribbling: 5,
    speed: 5,
    competitiveness: 5,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (player.name.trim() === '') {
      alert('Por favor, ingresa el nombre del jugador.')
      return
    }
    addPlayer(player)
    setPlayer({
      name: '',
      physicalCondition: 5,
      shooting: 5,
      passing: 5,
      goalkeeping: 5,
      defense: 5,
      dribbling: 5,
      speed: 5,
      competitiveness: 5,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      [name]: name === 'name' ? value : Number(value),
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre del Jugador ({playerCount}/20)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={player.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      {Object.entries(player).map(([key, value]) => {
        if (key === 'name') return null
        return (
          <div key={key}>
            <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <input
              type="range"
              id={key}
              name={key}
              min="1"
              max="10"
              value={value}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
            <span className="text-sm text-gray-500">{value}</span>
          </div>
        )
      })}
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
      >
        Agregar Jugador
      </button>
    </form>
  )
}

