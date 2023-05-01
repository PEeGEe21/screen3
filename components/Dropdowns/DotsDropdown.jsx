import React, {useState, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import MoreVertIcon from '../Icons/MoreVertIcon';
import TrashIcon from '../Icons/TrashIcon';
import AttachIcon from '../Icons/AttachIcon';
import CopyIcon from '../Icons/CopyIcon';
import DownloadIcon from '../Icons/DownloadIcon';
import { ScreenData } from '../../utils/data';
import { useRouter } from 'next/router';
import MoreHoriIcon from '../Icons/MoreHoriIcon';
import ShareIcon from '../Icons/ShareIcon';
import SummaryIcon from '../Icons/SummaryIcon';
import DropdownIcon from '../Icons/DropdownIcon';
import RenameVideoModal from '../Modals/RenameVideoModal';
import RenameDropdown from './RenameDropdown';
// import { ArrowRightAlt } from '@mui/icons-material';

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
    minWidth: 160,
    color:'rgb(55, 65, 81)',
    boxShadow: '0px 3px 14px 1px rgba(52, 64, 84, 0.06)',
    '& .MuiMenu-list': {
      padding: '4px 0',
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

export default function DotsDropdown({ item }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openRenameModal, setOpenRenameModal] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    console.log('deleting...');
    // alert(item.name);
    // console.log(item.id, 'item.id');

    // return;
    const index = ScreenData.findIndex((x) => x.id == item.id);
    if (index !== -1) {
      ScreenData.splice(index, 1);
      console.log('deleted...');
      // console.log(ScreenData, 'ScreenData');
      handleClose()
      router.push('/');
    }
  };

  // console.log(item, 'screen in dropdown');

  React.useEffect(() => {
    router.prefetch('/');
  }, []);


  const handleOpenRenameModal = () => {
    handleClose();
    setOpenRenameModal(!openRenameModal)
  }

  return (
    <>
      <button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="text-[#344054] rounded-full p-2 hover:bg-[#F3F3FE] border-0"
      >
        <span className="">
          <MoreHoriIcon />
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
        <MenuItem onClick={handleClose} disableRipple>
          <span className='flex items-center justify-between w-full'>
            <span className="text-[#344054] text-xs flex items-center gap-2">
              <ShareIcon />
              Share
            </span>

            <DropdownIcon isDots={true} />
          </span>
        </MenuItem>

        <RenameDropdown item={item} disableRipple/>

        <MenuItem onClick={handleClose} disableRipple>
          <span className="text-[#344054] text-xs flex items-center gap-2">
            <CopyIcon />
            Duplicate
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <span className="text-[#344054] text-xs flex items-center gap-2">
            <DownloadIcon />
            Download
          </span>
        </MenuItem>
        <MenuItem onClick={handleDelete} disableRipple>
          <button className="text-[#E92005] text-xs flex items-center gap-2">
            <TrashIcon />
            Delete
          </button>
        </MenuItem>
      </StyledMenu>

      <RenameVideoModal show={openRenameModal} dismiss={handleOpenRenameModal} item={item}/>

    </>
  );
}
