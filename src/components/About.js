import { Container, Header } from 'semantic-ui-react'

function About() {
    return (
      <div className='about-page'>
          <Container fluid textAlign='center'>
                <Header as='h2'>About page</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nec sollicitudin massa, eget ultricies mi. Curabitur nisi at porttitor.
                    Proin lobortis hendrerit mi eget pellentesque. Nam  in suscipit tristique.
                    Quisque eu ligula quis leo pellentesque tincidunt eu sit amet odio. Phasellus vitae arcu orci.
                    Curabitur et posuere elit, a consequat justo.
                    Proin eu libero volutpat, hendrerit sem id, bibendum nunc. Sed congue,
                    velit sit amet tincidunt imperdiet, nunc ligula ornare metus,
                    sit amet elementum orci dui sit amet dui. Nulla cursus et lectus non efficitur.
                    Fusce eu vehicula lacus. In ultrices risus massa, ac semper dolor blandit vel.
                    Etiam enim est, consequat id hendrerit quis, tincidunt eget arcu.
                    Quisque ornare, lorem eget porta accumsan, ex massa eleifend enim, in cursus erat eros ac libero..
                </p>
            </Container>
      </div>
    );
  }

  export default About;