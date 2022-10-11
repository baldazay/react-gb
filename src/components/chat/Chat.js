import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import './Chat.css';


function Chat({ chatName, index }) {


    return (
        <ListItem disablePadding key={index}>
            <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={chatName} />
            </ListItemButton>
        </ListItem>


    )
}

export default Chat;
