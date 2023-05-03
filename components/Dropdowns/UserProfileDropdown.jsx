import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ScreenData } from '../../utils/data';
import { useRouter } from 'next/router';
import DropdownIcon from '../Icons/DropdownIcon';
import AddIcon from '../Icons/AddIcon';
import classNames from 'classnames';
import RecorderIcon from '../Icons/RecorderIcon';
import BoxRecieveIcon from '../Icons/BoxRecieveIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import LoginIcon from '../Icons/LoginIcon';
import { getSession, useSession, signOut } from 'next-auth/react';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    // color:
    //   theme.palette.mode === 'light'
    //     ? 'rgb(55, 65, 81)'
    //     : theme.palette.grey[300],
    boxShadow: '0px 3px 14px 1px rgba(52, 64, 84, 0.06)',
    '& .MuiMenu-list': {
      padding: '14px 0',
      fontSize: '14px',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function UserProfileDropdown() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    router.prefetch('/');
  }, []);

  // const {data: session} = useSession();

  function handleSignOut(){
    // signOut()
  }

  return (
    <>
      <button
        className="bg-[#F2F2F4] p-3 rounded-full h-12 w-12 hidden md:block"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className="flex items-center justify-center text-[#046ED1]">
          <ProfileIcon height="18" width="16" />
        </span>
      </button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple>
          <span className="text-[#344054] text-sm flex items-center gap-2 py-1">
            {/* {session ? session?.user?.email : ''} */}
            bosemay04@gmail.com
          </span>
        </MenuItem>
        <MenuItem onClick={handleSignOut} disableRipple className=" mt-3">
          <span className="text-[#E92005] text-sm flex items-center gap-3">
            <LoginIcon />
            Log out
          </span>
        </MenuItem>
      </StyledMenu>
    </>
  );
}
