import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
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
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onOpenSidebar} style={{ marginRight: 1}} aria-label="menu" >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
