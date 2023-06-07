'use client'
import Link from "next/link"

const Pokemon = ({ pokemon }) => {
  return (
    <li>{pokemon.name}</li>
  )
}

export default function Pokemones({ pokemones }) {
  console.log(pokemones)
  return (
    <div>
      <p>Mi App de pokemones que no tiene pokemones</p>
      <ul>

      </ul>
    </div>
  )
}

