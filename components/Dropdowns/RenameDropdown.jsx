import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ScreenData } from '../../utils/data';
import { useRouter } from 'next/router';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SummaryIcon from '../Icons/SummaryIcon';
import Image from 'next/image';

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
    minWidth: 220,
    color: 'rgb(55, 65, 81)',
    boxShadow: '0px 3px 14px 1px rgba(52, 64, 84, 0.06)',
    '& .MuiMenu-list': {
      padding: '10px 0',
      fontSize: '14px',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
      
    },
  },
}));

export default function RenameDropdown({ item, toggleCollapse }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    // handleClose()
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    router.prefetch('/');
  }, []);

  return (
    <>
      <MenuItem
        disableRipple
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <button className="text-[#344054] text-xs flex items-center gap-2 w-full">
          <SummaryIcon />
          Rename
        </button>
      </MenuItem>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableRipple
      >
        <MenuItem disableRipple className="menu-override" role="presentation">
          <div>
            <div className="mb-2">
              <div className="flex items-center justify-start gap-3 grow flex-row text-sm text-[#344054]">
                <div>
                  <SummaryIcon />
                </div>
                <p className="">Rename video file</p>
              </div>
            </div>

            <div className="flex items-center justify-start py-3 my-1 w-full">
              <div className="flex items-center justify-start gap-3 w-full h-12">
                <div className="h-full w-14 relative object-cover block max-h-full rounded-lg overflow-hidden ">
                  <Image
                    src={'/img/' + item.image_thumbnail}
                    fill
                    priority
                    alt={`Picture of ${item.name}`}
                    className="max-h-48 rounded-lg object-cover"
                  />
                </div>
                <div className="grow  h-full">
                  <input
                    id="name"
                    type="text"
                    className={`block w-full h-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none`}
                    name="name"
                    defaultValue={item.name}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            {/* onChange={(e) => setName(e.target.value)} */}
            <div className="flex items-center justify-end gap-4 mt-3 mx-auto w-full">
              <button
                className="text-[#344054] bg-[#E8E8E9] px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out"
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button className="text-white bg-[#6457EF] px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out">
                Change
              </button>
            </div>
          </div>
        </MenuItem>
      </StyledMenu>

      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        anchorEl={anchorEl}
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex items-center justify-start gap-3 grow flex-row text-sm text-[#344054]">
            <div>
              <SummaryIcon />
            </div>
            <p className="">Rename video file</p>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex items-center justify-start py-3 my-1 w-full">
            <div className="flex items-center justify-start gap-3 w-full h-12">
              <div className="h-full w-14 relative object-cover block max-h-full rounded-lg overflow-hidden ">
                <Image
                  src={'/img/' + item.image_thumbnail}
                  fill
                  priority
                  alt={`Picture of ${item.name}`}
                  className="max-h-48 rounded-lg object-cover"
                />
              </div>
              <div className="grow  h-full">
                <input
                  id="name"
                  type="text"
                  className={`block w-full h-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none`}
                  name="name"
                  defaultValue={item.name}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="flex items-center justify-end gap-4 mt-3 mx-auto w-full">
            <button
              className="text-[#344054] bg-[#E8E8E9] px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out"
              onClick={() => handleClose()}
            >
              Cancel
            </button>
            <button className="text-white bg-[#6457EF] px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out">
              Change
            </button>
          </div>
        </DialogActions>
      </Dialog> */}
    </>
  );
}
