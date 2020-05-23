import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Grid, Image, Segment } from 'semantic-ui-react'

import Head from '../components/head'
import Nav from '../components/nav'

export default () => (
  <div>
    <Grid columns={1}>
      <Grid.Column>
        <Head title="Create Next App" />
        <Nav />
      </Grid.Column>
    </Grid>
    <Grid centered columns={2} style={{marginTop: 80}}>
      <Grid.Column>
        <Header as='h1' textAlign='center'>
          Welcome to Create Next App (Create Next.js App building tools)!
        </Header>
         <Container textAlign='center'>
            <p>To get started, edit <code>pages/index.js</code> and save to reload.</p>
         </Container>
      </Grid.Column>
    </Grid>
    <Grid centered columns={5} style={{marginTop: 60}}>
      <Grid.Column>
        <Segment>
          <p>
            <Link href="//nextjs.org/docs/">
              <a className="card">
                <h3>Getting Started &rarr;</h3>
              </a>
            </Link>
          </p>
          <p>Learn more about Next.js on official website</p>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <p>
            <Link href="//github.com/create-next-app/create-next-app">
              <a className="card">
                <h3>Create Next App &rarr;</h3>
              </a>
            </Link>
          </p>
          <p>Was this tools helpful?</p>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <p>
            <Link href="//react.semantic-ui.com">
              <a className="card">
                <h3>Semantic UI &rarr;</h3>
              </a>
            </Link>
          </p>
          <p>Learn more about Semantic UI</p>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
)
