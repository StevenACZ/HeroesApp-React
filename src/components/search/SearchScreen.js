import React, { useEffect, useMemo } from 'react'
import queryString from 'query-string';

import useForm from '../../customHooks/useForm';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import getHeroesByName from '../../selectors/getHeroByName';

const SearchScreen = ({ history }) => {
  
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search )

  const initialForm = {
    heroName: q
  }
  const [ formValues, handleInputChange, reset ] = useForm( initialForm );

  const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);  

  const handleSearch = ( e ) => {
    e.preventDefault();
    history.push(`?q=${ formValues.heroName }`)
    reset();
  }

  return (
    <div>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={ handleSearch }>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="heroName"
              value={ formValues.heroName }
              onChange={ handleInputChange }
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            heroesFiltered.map( hero => (
              <HeroCard
                key={ hero.id }
                { ...hero }
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchScreen
