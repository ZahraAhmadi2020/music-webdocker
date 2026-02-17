import React, { useState } from 'react';

function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatHistory([...chatHistory, { sender: 'You', text: message }]);
      setMessage('');
      setTimeout(() => {
        setChatHistory((prev) => [...prev, { sender: 'Support', text: 'Спасибо за сообщение! Мы скоро ответим.' }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        💬
      </button>
      {isOpen && (
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg w-80 mt-2">
          <h3 className="text-lg font-semibold mb-2">Чат с поддержкой</h3>
          <div className="h-40 overflow-y-auto mb-2 border border-gray-300 p-2">
            {chatHistory.map((msg, index) => (
              <p key={index} className="mb-1">
                <strong>{msg.sender}: </strong>{msg.text}
              </p>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 bg-gray-600 border border-gray-600 rounded"
              placeholder="Введите сообщение..."
              autoFocus
            />
            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded"
              disabled={!message.trim()}
            >
              Отправить
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SupportChat;
