import { Container, Header, List } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


function AllPokemon() {

  const [allPokemon, setAllPokemon] = useState([]);


  useEffect(() => {
    fetchAllPokemon()
   }, [])


  const fetchAllPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      const { results } = data;

      setAllPokemon(results);
    }
    catch(error) {
      console.log('error', error);
    }
  }


    return (
      <div className='pokemon-page'>
          <Container fluid textAlign='center'>
                <Header as='h2'>Im the pokemon page</Header>


                {allPokemon.map((pokemon, index) => (
                    <List key={index}>
                        <List.Item key={index +1} as={Link} to={`/pokemon/${index + 1}`}>
                          {pokemon.name}
                        </List.Item>
                    </List>
                ))}

            </Container>
      </div>
    );
  }

  export default AllPokemon;