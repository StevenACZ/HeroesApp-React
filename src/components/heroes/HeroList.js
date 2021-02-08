import React from 'react'
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher'

const HeroList = ({ publisher }) => {
  
  const heroes = getHeroesByPublisher( publisher );
  
  return (
    <>
     {
       heroes.map( hero => (
         <li key={ hero.id }>
           { hero.superhero }
         </li>
       ) )
     } 
    </>
  )
}

export default HeroList
