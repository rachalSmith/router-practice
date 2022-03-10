import { Container, Header } from 'semantic-ui-react'

function About() {
    return (
      <div className='about-page'>
          <Container fluid textAlign='center'>
                <Header as='h2'>Im an about page</Header>
                <p>
                    Domestic dogs inherited complex behaviors, such as bite inhibition, from
                    their wolf ancestors, which would have been pack hunters with complex
                    body language. These sophisticated forms of social cognition and
                    communication may account for their trainability, playfulness, and
                    ability to fit into human households and social situations, and these
                    attributes have given dogs a relationship with humans that has enabled
                    them to become one of the most successful species on the planet today.
                </p>
            </Container>
      </div>
    );
  }

  export default About;