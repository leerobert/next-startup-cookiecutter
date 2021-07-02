import PropTypes from 'prop-types'
import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import DashboardSidebar from './DashboardSidebar';

const useStyles = makeStyles((theme) => ({
  root: {},
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    margin: "auto",
    width: "100%"
  },
  appBar: {}
}));

DashboardNavbar.propTypes = {
};

export default function DashboardNavbar() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(true)} style={{ marginRight: 1}} aria-label="menu" >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
    </div>
  );
}
