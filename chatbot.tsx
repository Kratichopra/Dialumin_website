import React, { useState } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
  suggestions?: string[];
}

const Chatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async (customInput?: string) => {
    const prompt = customInput ?? input;
    if (!prompt.trim()) return;

    setMessages((msgs) => [...msgs, { sender: "user", text: prompt }]);
    setInput("");

    try {
      const res = await fetch("https://dialumin.in/api/output", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error("HTTP error! status: ${res.status}");

      const reply = await res.text();

      const defaultSuggestions = [
        "Tell me more",
        "Can you simplify that?",
        "Give an example",
        "Why is that important?"
      ];

      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: reply,
          suggestions: defaultSuggestions
        }
      ]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "I'm not sure about that. You can contact our support team ." }
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div style={styles.floatingContainer}>
      {isOpen ? (
        <div style={styles.chatbox}>
          <div style={styles.header}>
            <span>GemCapture Q&A</span>
            <button onClick={() => setIsOpen(false)} style={styles.closeButton}>×</button>
          </div>
          <div style={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    ...styles.message,
                    alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                    backgroundColor: msg.sender === "user" ? "#DCF8C6" : "#EEE",
                  }}
                >
                  <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                </div>

                {msg.sender === "bot" && msg.suggestions && (
                  <div style={styles.suggestionsContainer}>
                    {msg.suggestions.map((suggestion, j) => (
                      <button
                        key={j}
                        onClick={() => sendMessage(suggestion)}
                        style={styles.suggestionButton}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something..."
              style={styles.input}
            />
            <button onClick={() => sendMessage()} style={styles.button}>Send</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} style={styles.floatingButton}>💬</button>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  floatingContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
  floatingButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "28px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  chatbox: {
    width: "400px",
    height: "480px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
  messages: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    backgroundColor: "#f8f8f8",
  },
  message: {
    padding: "8px 12px",
    borderRadius: "14px",
    maxWidth: "80%",
    fontSize: "14px",
    lineHeight: "1.4",
    wordBreak: "break-word",
  },
  suggestionsContainer: {
    marginTop: "4px",
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
    paddingLeft: "8px",
  },
  suggestionButton: {
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "4px 10px",
    fontSize: "12px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  inputContainer: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "8px 0 0 8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "0 8px 8px 0",
    border: "1px solid #ccc",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default Chatbot;