import "./Message.css";
import { useState } from 'react';


function Message({ author, text }) {

    return <li className="message-el">
        <div className="message-el-name-wrp">
            <div className="message-el-name">{author}</div>
        </div>
        <div className="message-el-text-wrp">
            <div className="message-el-text">{text}</div>
        </div>
    </li>

}

export default Message;
