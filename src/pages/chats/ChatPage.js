import ChatList from "../../components/chatList/ChatList";


export default function Chats() {
    return (
        <div className="chatPage-wrp">
            <div className="chatPage__list">
                <ChatList></ChatList>
            </div>
            <div className="chatPage__main">
                <h2 className="chatPage__main-title">Start your chat</h2>
            </div>
        </div>

    )
}