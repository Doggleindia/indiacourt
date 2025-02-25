import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../redux/features/chatSlice";

const Message = ({ text, sender, time }) => (
  <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"} my-2`}>
    <div
      className={`p-3 rounded-lg shadow-md text-sm ${
        sender === "user"
          ? "bg-[#FCEDE8] text-black rounded-br-none"
          : "bg-gray-100 text-black rounded-bl-none"
      }`}
    >
      <p>{text || "No response from bot."}</p>
      <span className="text-xs text-gray-500 block text-right">{time}</span>
    </div>
  </div>
);

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const chatEndRef = useRef(null);

  const { messages } = useSelector((state) => state.chat);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    dispatch(sendMessage(input));
    setInput("");
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col h-screen bg-white pt-[80px]">
      {/* Chat Header */}
      <div className="flex items-center justify-center py-6 border-b border-gray-300">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-[#C08729] rotate-45"></div>
          <div className="w-10 h-[2px] bg-[#C08729] ml-1"></div>
        </div>

        <div className="text-center mx-4">
          <h2 className="text-2xl font-bold tracking-wider text-black">Chat With Us</h2>
          <p className="text-[#9B7B4D] tracking-wider text-sm">Talk to us for any query</p>
          <span className="text-xs text-gray-500">{currentDate}</span>
        </div>

        <div className="flex items-center">
          <div className="w-10 h-[2px] bg-[#C08729] mr-1"></div>
          <div className="w-2 h-2 bg-[#C08729] rotate-45"></div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} time={msg.time} />
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Chat Input */}
      <div className="flex items-center border-t border-gray-300 p-3">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-md text-black focus:outline-none"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="bg-[#056B38] text-white px-6 py-2 ml-3 rounded-md shadow-md hover:bg-[#034f28]"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
