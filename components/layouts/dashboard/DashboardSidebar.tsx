import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/client"

// material
import { fade, styled } from '@material-ui/core/styles';
import { Box, Button, Drawer, Typography, Hidden } from '@material-ui/core'
import theme from '../../../theme'

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));


DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
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
      <Box style={{ padding: 3 }}>
        <Link href="/">
          <Box style={{ display: 'inline-flex' }}>
            Logo
          </Box>
        </Link>
      </Box>
      <Typography>Hello</Typography>

      {/* <Box style={{ marginBottom: 2, marginLeft: 2.5, marginRight: 2.5 }}>
        <Link href="/account">
          <AccountStyle>
            <MyAvatar />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {user.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box style={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <DocStyle>
          <DocIcon sx={{ width: 36, height: 36, mb: 2 }} />
          <Typography gutterBottom variant="subtitle1" sx={{ color: 'grey.800' }}>
            Hi, {user.displayName}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'grey.600' }}>
            Need help?
            <br /> Please check our docs
          </Typography>
          <Button fullWidth to={PATH_DOCS.root} variant="contained" component={RouterLink}>
            Documentation
          </Button>
        </DocStyle>
      </Box> */}
    </Box>
  );

  return (
    <RootStyle>
      <Hidden lgUp>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            style: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>

      <Hidden lgDown>
        <Drawer
          open
          variant="persistent"
        >
          <Typography>Hello?</Typography>
        </Drawer>
      </Hidden>
    </RootStyle>
  );
}
