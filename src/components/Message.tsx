import React from 'react';

interface MessageProps {
    text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
    return (
        <div className="message-container">
            <p>{text}</p>
        </div>
    );
};

export default Message;