import { makeStyles } from '@material-ui/core/styles';

import DashboardDesktop from './DashboardDesktop'
import DashboardMobile from './DashboardMobile'
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function DashboardLayout(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <DashboardMobile>
          {props.children}
        </DashboardMobile>
      </Hidden>
      <Hidden smDown>
        <DashboardDesktop>
          {props.children}
        </DashboardDesktop>
      </Hidden>
    </div>
  )
}
