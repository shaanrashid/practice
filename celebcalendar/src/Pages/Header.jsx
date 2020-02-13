import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="MenuDetails">
      <img className="MenuButton" alt="Menu" src="./MenuButton.png" aria-controls="NavBar" aria-haspopup="true" id="MenuButton" onClick={handleClick}>
      </img>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem> <a href="/"className="menucolor"> <img src="HomeButton.png" alt="Home" width="40" height="40" title="Home"/>Home</a></MenuItem>
        <MenuItem> <a href="/Calendar2" className="menucolor"><img src="CalendarButton.png" alt="Calendar" width="40" height="40" title="Calendar" />Calendar</a></MenuItem>
        <MenuItem> <a href="/SignIn" className="menucolor"> <img src="AdminButton.png" alt="Admin" width="40" height="40" title="Admin" />Admin</a></MenuItem>
      </Menu>
      </div>
  );
}
export default NavBar;