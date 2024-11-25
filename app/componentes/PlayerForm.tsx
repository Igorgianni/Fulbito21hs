import { useState } from 'react'
import { Player } from '../types'

interface PlayerFormProps {
  addPlayer: (player: Player) => void
  playerCount: number
}

export default function PlayerForm({ addPlayer, playerCount }: PlayerFormProps) {
  const [player, setPlayer] = useState<Player>({
    id: Date.now(),
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
      id: Date.now(),
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={player.name}
        onChange={handleChange}
        placeholder="Nombre del jugador"
        required
      />
      {Object.entries(player).map(([key, value]) => {
        if (key === 'name' || key === 'id') return null
        return (
          <div key={key}>
            <label>{key}: </label>
            <input
              type="range"
              name={key}
              min="1"
              max="10"
              value={value}
              onChange={handleChange}
            />
            <span>{value}</span>
          </div>
        )
      })}
      <button type="submit">Agregar Jugador</button>
    </form>
  )
}


