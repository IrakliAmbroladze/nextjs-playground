"use client";
import { createConnection } from "@/utils/chat";
import { useState, useEffect } from "react";

const serverUrl = "https://localhost:1234";

const ChatRoom = ({ roomId }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    function createOptions() {
      return {
        serverUrl,
        roomId,
      };
    }
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  return (
    <>
      <h1 className="text-xl">Welcome to the {roomId} room!</h1>
      <input
        className="border"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );
};
const App = () => {
  const [roomId, setRoomId] = useState("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
};

export default App;
