import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import config from './config'

import { 
  CssBaseline
} from '@material-ui/core';

import DashboardSidebar from './DashboardSidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function DashboardDesktop(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardSidebar isPermanent={true}/>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  )
}
