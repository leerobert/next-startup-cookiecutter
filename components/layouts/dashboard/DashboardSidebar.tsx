import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/client"

// material
import { makeStyles } from '@material-ui/core/styles';
import { 
  Box, Drawer, Divider, List, ListItem, ListItemText 
} from '@material-ui/core';
import config from './config'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  drawer: {
    width: config.drawerWidth,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  menuSpacing: {
    flexGrow: 1
  },
  drawerPaper: {
    width: config.drawerWidth,
  },
}))

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
  isPermanent: PropTypes.bool
}

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar, isPermanent = false }) {
  const classes = useStyles()
  const { pathname } = useRouter();
  const [session, loading] = useSession()

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    // was Scrollbar
    <Box>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <div className={classes.menuSpacing} />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      className={classes.drawer}
      open={isOpenSidebar}
      onClose={onCloseSidebar}
      // @ts-ignore
      variant={isPermanent ? 'permanent' : 'temporary'}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      {renderContent}
    </Drawer>
  );
}
