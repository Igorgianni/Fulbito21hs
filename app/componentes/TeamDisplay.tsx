import { Player } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamDisplayProps {
  teams: Player[][]
}

export default function TeamDisplay({ teams }: TeamDisplayProps) {
  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">Equipos Formados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Equipo {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {team.map((player) => (
                  <li key={player.id} className="flex justify-between items-center">
                    <span>{player.name}</span>
                    <span className="text-sm text-gray-500">
                      (Promedio: {calculateAverage(player).toFixed(2)})
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function calculateAverage(player: Player): number {
  const { id, name, ...stats } = player
  return Object.values(stats).reduce((sum, stat) => sum + stat, 0) / Object.keys(stats).length
}

