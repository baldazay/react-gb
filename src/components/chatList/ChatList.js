import React from "react";
import "./ChatList.css";
import Chat from "../chat/Chat"
import { useState } from "react";
import List from '@mui/material/List';



function ChatList() {

    const [chatList, setChatList] = useState(['friends', 'family', 'work', 'GeekBrains']);

    return (<>
        <List>
            {chatList.map((chatName, i) => <Chat primary="Spam" chatName={chatName} index={i} />)}
        </List>
    </>)
}

export default ChatList;
