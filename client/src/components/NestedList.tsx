import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import "./components.css"

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', marginRight: '25px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        // <ListSubheader component="div" id="nested-list-subheader">
        //   Nested List Items
        // </ListSubheader>
        <>
        </>
      }
    >
      {/* <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton> */}
      {/* <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton> */}
      <ListItemButton style={{ background: 'rgb(144, 196, 60)', color: '#fff' }} onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            {/* <ListItemText primary="WOMEN'S CLOTHING" /> */}
            WOMEN'S CLOTHING
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            MEN'S CLOTHING
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            WATCHES
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            BAGS & SHOP
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            SHOES
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            JEWELLERY
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            ACCESSORIES
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            TOYS, KID & BABY
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            SPORT & OUTDOORS
          </ListItemButton>

          <ListItemButton style={{ border: '1px solid #F6F8F8' }} sx={{ pl: 4 }}>
            HEALTH & BEAUTY
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
