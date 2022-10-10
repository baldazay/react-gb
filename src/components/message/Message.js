import "./Message.css";


function Message({ hello, name }) {

    return (
        <div className="hello">
            <h1 className="hello-heading">{hello}</h1>
            <p className="hello-text">Try to learn me, <span className="userName">{name}</span></p>
        </div >
    );
}

export default Message;
