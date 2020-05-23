/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Head from '../components/head';
import Nav from '../components/nav';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
  },
  row: {
    marginTop: 60
  },
  papper: {
    paddingLeft: 20,
    paddingTop: 2,
    paddingBottom: 5
  },
  description: {
    marginTop: 25
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Head title="Create Next App" />
        <Nav />
        <div className={classes.root}>
          <div>
            <Typography variant="h3" gutterBottom>
              Welcome to Create Next App (Create Next.js App building tools)
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.description}>
              To get started, edit <code>pages/index.js</code> and save to reload.
            </Typography>
          </div>
          <Grid container spacing={24} justify='center' className={classes.row}>
            <Grid item xs={2} sm={2}>
              <Paper className={classes.papper}>
                <p>
                  <Link href="//nextjs.org/docs/">
                    <a className="card">
                      <h3>Getting Started &rarr;</h3>
                    </a>
                  </Link>
                </p>
                <Typography variant="caption" gutterBottom>
                  <p>Learn more about Next.js on official website</p>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Paper className={classes.papper}>
                <p>
                  <Link href="//github.com/create-next-app/create-next-app">
                    <a className="card">
                      <h3>Create Next App &rarr;</h3>
                    </a>
                  </Link>
                </p>
                <Typography variant="caption" gutterBottom >
                  <p>Was this tools helpful?</p>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Paper className={classes.papper}>
                <p>
                  <Link href="//material-ui.com/">
                    <a className="card">
                      <h3>Material UI &rarr;</h3>
                    </a>
                  </Link>
                </p>
                <Typography variant="caption" gutterBottom >
                  <p>Learn more about Material UI</p>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <style jsx>{`
          .card p {
            text-decoration: none !important;
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
          a {
            color: #067df7;
            text-decoration: none
          }
        `}</style>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
