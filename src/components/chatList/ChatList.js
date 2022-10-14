import React from "react";
import "./ChatList.css";
import Chat from "../chat/Chat"
import { useState } from "react";
import List from '@mui/material/List';



function ChatList() {

    const [chatList, setChatList] = useState(['friends', 'family', 'work', 'GeekBrains']);

    return (<>
        <List className="chat__list">
            {chatList.map((chatName, i) => <Chat primary="Spam" chatName={chatName} index={i} />)}
        </List>
    </>)
}

export default ChatList;
