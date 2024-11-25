'use client'

import { useState } from 'react'
import { Player } from './types'
import { players } from './data/players'
import { formTeams } from './utils/teamFormation'
import PlayerSelection from './components/PlayerSelection'
import TeamDisplay from './components/TeamDisplay'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([])
  const [teams, setTeams] = useState<Player[][]>([])

  const togglePlayerSelection = (player: Player) => {
    setSelectedPlayers(prev => 
      prev.some(p => p.id === player.id)
        ? prev.filter(p => p.id !== player.id)
        : [...prev, player]
    )
  }

  const createTeams = () => {
    if (selectedPlayers.length < 2) {
      alert('Por favor, selecciona al menos 2 jugadores para formar equipos.')
      return
    }
    const formedTeams = formTeams(selectedPlayers)
    setTeams(formedTeams)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Armador de Equipos de Fútbol</CardTitle>
        </CardHeader>
        <CardContent>
          <PlayerSelection 
            players={players} 
            selectedPlayers={selectedPlayers} 
            togglePlayerSelection={togglePlayerSelection} 
          />
          <Button
            onClick={createTeams}
            className="w-full mt-4"
          >
            Armar Equipos
          </Button>
          {teams.length > 0 && <TeamDisplay teams={teams} />}
        </CardContent>
      </Card>
    </main>
  )
}

