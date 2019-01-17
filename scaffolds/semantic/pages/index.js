import 'semantic-ui-css/semantic.min.css'
import { Header, Grid, Image, Segment } from 'semantic-ui-react'

export default () => (
  <div>
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as='h1' textAlign='center'>
          Welcome to create-next-app-cli (Create Next.js App building tools)
        </Header>
      </Grid.Column>
    </Grid>
    <Grid centered columns={2}>
      <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
    </Grid>
    <Grid centered columns={5}>
      <Grid.Column>
        <Segment>Left Rail Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Left Rail Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Left Rail Content</Segment>
      </Grid.Column>
    </Grid>
  </div>
)
