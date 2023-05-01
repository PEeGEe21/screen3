import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import DropdownIcon from '../Icons/DropdownIcon';
import AddIcon from '../Icons/AddIcon';
import classNames from 'classnames';
import RecorderIcon from '../Icons/RecorderIcon';
import BoxRecieveIcon from '../Icons/BoxRecieveIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import LoginIcon from '../Icons/LoginIcon';
import { ScreenData, coloredArray, colors, Tags } from '../../utils/data';

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
    minWidth: 140,
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

export default function TagsDropdown({ item, toggleCollapse }) {
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

  const getBackgroundColor = (color) => {
    const alpha = 0.8; // adjust the alpha value to change the background color's opacity
    const hexColor = colors.indexOf(color).toString(16).padStart(2, '0');
    return `#${hexColor.repeat(3)}${Math.round(alpha * 255)
      .toString(16)
      .padStart(2, '0')}`;
  };

  return (
    <>
      <button
        className="flex items-center text-[#344054] bg-white text-sm border-[#D5D5D6] border px-3 py-2 rounded-lg h-10 gap-2"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Tags
        <span className="">
          <DropdownIcon />
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
        {Tags.map((item, index) => (
          <MenuItem disableRipple key={index}>
            <span
              className={`rounded-full text-xs px-3 py-1 text-[${
                colors[index % colors.length]
              }]`}
              style={{
                color: colors[index % colors.length],
                backgroundColor: `rgba(${parseInt(
                  colors[index % colors.length].substr(1, 2),
                  16
                )}, ${parseInt(
                  colors[index % colors.length].substr(3, 2),
                  16
                )}, ${parseInt(
                  colors[index % colors.length].substr(5, 2),
                  16
                )}, 0.1)`,
              }}
            >
              {item}
            </span>
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
}
