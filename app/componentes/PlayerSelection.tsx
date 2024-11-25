import { Player } from '../types'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface PlayerSelectionProps {
  players: Player[]
  selectedPlayers: Player[]
  togglePlayerSelection: (player: Player) => void
}

export default function PlayerSelection({ players, selectedPlayers, togglePlayerSelection }: PlayerSelectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => (
        <div key={player.id} className="flex items-center space-x-2">
          <Checkbox
            id={`player-${player.id}`}
            checked={selectedPlayers.some(p => p.id === player.id)}
            onCheckedChange={() => togglePlayerSelection(player)}
          />
          <Label
            htmlFor={`player-${player.id}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {player.name}
          </Label>
        </div>
      ))}
    </div>
  )
}

