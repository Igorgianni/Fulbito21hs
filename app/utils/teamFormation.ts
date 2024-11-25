import { Player } from '../types'

export function formTeams(players: Player[]): Player[][] {
  // Calcular el promedio de cada jugador
  const playersWithAverage = players.map(player => ({
    ...player,
    average: calculateAverage(player)
  }))

  // Ordenar jugadores por promedio de mayor a menor
  playersWithAverage.sort((a, b) => b.average - a.average)

  // Inicializar los equipos
  const team1: Player[] = []
  const team2: Player[] = []
  let team1Average = 0
  let team2Average = 0

  // Distribuir jugadores
  playersWithAverage.forEach((player) => {
    if (team1Average <= team2Average) {
      team1.push(player)
      team1Average += player.average
    } else {
      team2.push(player)
      team2Average += player.average
    }
  })

  return [team1, team2]
}

function calculateAverage(player: Player): number {
  const { id, name, ...stats } = player
  return Object.values(stats).reduce((sum, stat) => sum + stat, 0) / Object.keys(stats).length
}

