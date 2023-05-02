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
import SaveVideoModal from '../Modals/SaveVideoModal';

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
    color:'rgb(55, 65, 81)',
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

export default function NewScreenDropdown({ item, toggleCollapse }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSaveVideoModal, setOpenSaveVideoModal] = React.useState(false);

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

  const handleOpenSaveRenameModal = () => {
    handleClose();
    setOpenSaveVideoModal(!openSaveVideoModal)
  }
  return (
    <>
      <button
        className={`menu-item main-btn w-full font-thin flex items-center p-3 px-2  my-2  transition-colors duration-200 ease-in text-[#344054]  ${
          toggleCollapse ? 'justify-center' : 'justify-start'
        }`}
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className="text-left px-3">
          <AddIcon />
        </span>
        {!toggleCollapse && (
          <span
            className={classNames(
              ' text-sm font-normal flex items-center gap-1'
            )}
          >
            New screen
            <DropdownIcon className="" isDots={false} />
          </span>
        )}
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
        <MenuItem onClick={handleOpenSaveRenameModal} disableRipple>
          <span className="text-[#344054] text-sm flex items-center gap-2">
            <RecorderIcon />
            Record video
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <span className="text-[#344054] text-sm flex items-center gap-2">
            <BoxRecieveIcon />
            Upload video
          </span>
        </MenuItem>
      </StyledMenu>

      <SaveVideoModal show={openSaveVideoModal} dismiss={handleOpenSaveRenameModal}/>

    </>
  );
}
