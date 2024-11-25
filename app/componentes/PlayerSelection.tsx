import { Player } from '../types'

interface PlayerSelectionProps {
  players: Player[]
  selectedPlayers: Player[]
  togglePlayerSelection: (player: Player) => void
}

export default function PlayerSelection({ players, selectedPlayers, togglePlayerSelection }: PlayerSelectionProps) {
  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <input
            type="checkbox"
            id={`player-${player.id}`}
            checked={selectedPlayers.some(p => p.id === player.id)}
            onChange={() => togglePlayerSelection(player)}
          />
          <label htmlFor={`player-${player.id}`}>
            {player.name}
          </label>
        </div>
      ))}
    </div>
  )
}

