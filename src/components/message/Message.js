import "./Message.css";


function Message({ author, text, key }) {

    return <li className="message-el">
        <div className="message-el-name-wrp">
            <div className="message-el-name"><span className="message-el-name-span">{author}</span></div>
        </div>
        <div className="message-el-text-wrp">
            <div className="message-el-text"><span className="message-el-name-span">{text}</span></div>
        </div>
    </li>

}

export default Message;
