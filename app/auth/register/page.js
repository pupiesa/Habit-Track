"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendPostRequest = async () => {
    try {
      const response = await axios.post("/api/signup", data);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <h1>Handling POST Request in Next.js</h1>
      <input
        id="username"
        type="text"
        placeholder="Enter username"
        style={{ padding: "10px 5px" }}
        value={data.username}
        onChange={handleChange}
      />
      <br />
      <input
        id="email"
        type="email"
        placeholder="Enter email"
        style={{ padding: "10px 5px" }}
        value={data.email}
        onChange={handleChange}
      />
      <br />
      <input
        id="password"
        type="password"
        placeholder="Enter password"
        style={{ padding: "10px 5px" }}
        value={data.password}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={sendPostRequest} style={{ padding: "5px 10px" }}>
        Send POST Request
      </button>
    </div>
  );
}
