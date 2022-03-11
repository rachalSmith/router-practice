import { useEffect, useState } from 'react';
import { Card, Container } from 'semantic-ui-react';

function Pokemon({ match }) {


    const [pokemon, setPokemon] = useState({
        sprites: {}
    });


    useEffect(() => {
        fetchPokemon()
       }, [])


      const fetchPokemon = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
          const data = await response.json();

          setPokemon(data);
        }
        catch(error) {
          console.log('error', error);
        }
      }


    return (
        <div>
            <Container style={{ marginTop: '20vh' }}>
                <Card centered
                    image={pokemon.sprites.front_default}
                    header={pokemon.name}
                />
            </Container>
        </div>

    );
  }

  export default Pokemon;