import { useState } from 'react'
import Link from 'next/link'

import {
    AppBar, Toolbar, Typography, Container, IconButton
} from '@material-ui/core'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    margin: "auto",
    width: "100%"
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const StyledContainer = withStyles((props) => {
  return ({
    root: {
      paddingRight: "10px",
      paddingLeft: "10px",
      [props.breakpoints.only('xs')]: {
        paddingRight: "0",
        paddingLeft: "0",
      },
    },
  })
})(Container);

const NavigationTitle = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.title} variant="h6">parcelyze</Typography>
  )
}

const Navigation = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <div className={classes.grow}>
      <AppBar  position='static'>
        <Toolbar className={classes.toolbar}>
          <NavigationTitle />
          <div className={classes.grow} />
          <Link href="/dashboard"><Typography style={{padding: '8px'}}>Dashboard</Typography></Link>
          <Link href="/dashboard/shipments"><Typography style={{padding: '8px'}}>Shipments</Typography></Link>
          <Link href="/dashboard/simulator"><Typography style={{padding: '8px'}}>Simulator</Typography></Link>
          <div className={classes.grow} />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={"primary-account-menu"}
            aria-haspopup="true"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <StyledContainer maxWidth={"lg"}>
        {props.children}
      </StyledContainer>
    </div>
  )
}

export default Navigation
