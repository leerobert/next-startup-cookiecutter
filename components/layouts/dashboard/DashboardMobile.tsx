import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import config from './config'

import DashboardNavbar from './DashboardNavbar'
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${config.drawerWidth}px)`,
    marginLeft: config.drawerWidth,
  },
  drawer: {
    width: config.drawerWidth,
    flexShrink: 0,
  },
  menuSpacing: {
    flexGrow: 1
  },
  drawerPaper: {
    width: config.drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function DashboardDesktop(props) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardNavbar />
      <div className={classes.toolbar} />
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  )
}
