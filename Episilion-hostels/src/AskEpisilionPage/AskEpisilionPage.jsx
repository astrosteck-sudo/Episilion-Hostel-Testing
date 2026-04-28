import { PageHeader } from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import { useNavigate } from "react-router-dom";
import "./AskEpisilion.css";
import { useState, useEffect } from "react";
import sendImage from "../assets/icons/send.png";
import robotImage from "../assets/icons/robot.png";
import lightBulbImage from "../assets/icons/light-bulb.png";
import axios from "axios";

export function AskEpisilionPage({ isLoggedIn }) {
  const [userSearchInput, setUserSearchInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]); //Initialize as array
  const [open, setOpen] = useState(false);
  //const [userCautionText, setUserCautionText] = useState(true)
  const navigate = useNavigate();

  // useEffect(() => {
  //   document.body.classList.add("episilion-bg");
  //   return () => {
  //     document.body.classList.remove("episilion-bg");
  //   };
  // }, []);

  //This hook scrolls to the bottom whenever chatMessages updates.
  useEffect(() => {
    const messagesDiv = document.querySelector(".messages");
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }, [chatMessages]);

  // Load messages on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("episilionChat");
    if (savedMessages) {
      //setUserCautionText(false)
      setChatMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages whenever they change, but only if not empty
  useEffect(() => {
    if (chatMessages.length > 0) {
      localStorage.setItem("episilionChat", JSON.stringify(chatMessages));
    }
  }, [chatMessages]);

  function searchInput(event) {
    setUserSearchInput(event.target.value);
  }

  async function sendMessage() {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (!userSearchInput.trim()) return;

    const userMessage = userSearchInput;
    setUserSearchInput("");

    // 1. ADD USER MESSAGE TO CHAT
    setChatMessages((prev) => [
      ...prev,
      {
        message: userMessage,
        sender: "user",
      },
    ]);

    try {
      // 2. CALL AI
      const res = await axios.post("http://localhost:3000/api/intent/search", {
        query: userMessage,
      });

      const result = res.data.result;
      console.log(res.data);

      // 3. ADD RESULT TO CHAT
      setChatMessages((prev) => [
        ...prev,
        {
          message: result,
          type: "episilionResults",
          sender: "episilion",
          header: res.data.reason || "Episilion Results",
        },
      ]);
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/login");
        return;
      }

      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong. Please try again.";

      // 4. ADD ERROR TO CHAT
      setChatMessages((prev) => [
        ...prev,
        {
          message: errorMessage,
          type: "error",
          sender: "episilion",
        },
      ]);
    }
  }

  function goToHostelPage(parameter) {
    console.log(parameter);
    navigate(`/moreDetails?hostelId=${parameter}`);
  }

  //Allow sending with Enter key
  function handleKeyDown(event) {
    //THIS RETURNS THE USER WHEN THE USER IS NOT LOGGED IN
    if (event.key === "Enter") {
      if (!isLoggedIn) {
        navigate("/login");
      } else {
        sendMessage();
      }
    }
  }
  //THIS IS TO EXTRACT THE USER IMFORMATION FROM THE TOKEN
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    document.title = "Ask Episilion | Episilion Hostels";
  }, []);

  return (
    <>
      <div className="main-epsilion-container">
        <div className={`epsilion-wrapper-one ${open ? "open" : ""}`}>
          <div className="sidebar-header">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <div className="ask-episilion-page-header-AI-description sidebar">
            <p>Ask Episilion</p>
            <p>AI powered hostel assistant</p>
          </div>

          <p className="your-usage-text">YOUR USAGE</p>
          <div className="user-AI-usage-container">
            <p className="free-request-text">
              Free Request{" "}
              <span className="user-number-request-left">2/2 left</span>
            </p>
            <p className="upgrade-text">Upgrade for 15 request/day</p>
          </div>

          <div className="premuim-access-container">
            <p>Unlock Full Access</p>
            <p>Get 15 AI request per day for just GHS 10/month</p>
            <button className="upgrade-now-button">Upgrade Now</button>
          </div>
        </div>

        <div className={`epsilion-wrapper-two ${open ? "shift" : ""}`}>
          <div className="topbar">
            <button className="menu-btn" onClick={() => setOpen(true)}>
              ☰
            </button>
            <div className="ask-episilion-page-header">
              <img
                src={robotImage}
                className="ask-episilion-page-header-robot-image"
              />
              <div className="ask-episilion-page-header-AI-description">
                <p>Episilion AI</p>
                <p>Online • Powered By Open AI • Hostel Specialist</p>
              </div>
            </div>
          </div>

          <div className="messages">
            <div className="episilion-message-and-bot-conatainer">
              <img src={robotImage} className="ask-episilion-robot-image" />
              <div className="episilion-message">
                <p className="ask-episilion-message-first-Paragraph">
                  Hi {!isLoggedIn ? "student" : user?.name || "student"}! 👋 How can I help
                  you today?
                </p>
                <p className="ask-episilion-message-second-Paragraph">
                  I'm your Epislion AI assistant - ask me anything about
                  hostels, prices, amenities, or locations near your campus.
                  I'll find the best options for you.
                </p>
                <p className="ask-episilion-message-third-Paragraph">
                  <img
                    src={lightBulbImage}
                    className="ask-episilion-light-bulb"
                  />
                  Tip: Keep questions short and direct for the most accurate
                  answers
                </p>
              </div>
            </div>
            {/*Map over chatMessages array to render each bubble */}
            {chatMessages.map((chat, index) => (
              <div
                key={index}
                className={
                  chat.sender === "user" ? "user-message" : "episilion-message"
                }
              >
                {chat.type === "episilionResults" ? (
                  <div className="episilion-response">
                    <div className="ask-episilion-loader"></div>
                    <p className="episilion-response-header">
                      {chat.header}
                    </p>
                    {Array.isArray(chat.message) ? (
                      chat.message.map((hostel) => (
                        <div key={hostel.id}>
                          {/* <img src={hostel.image} alt={`${hostel.name} image`} className="episilion-response-image" /> */}
                          <div className="episilion-response-card-details">
                            <p className="episilion-response-hostel-name">
                              {hostel.name}
                            </p>
                            <div className="episilion-response-price-view-details">
                              <p className="episilion-response-hostel-price">
                                $({hostel.price})
                              </p>

                              <p
                                className="episilion-response-hostel-link"
                                onClick={() => goToHostelPage(hostel.id)}
                              >
                                View
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>{chat.message}</p>
                    )}
                  </div>
                ) : (
                  chat.message
                )}
              </div>
            ))}
          </div>
          <div className="ask-episilion-search-conatainer">
            <div className="ask-episilion-search-bar">
              <textarea
                type="text"
                className="ask-episilion-input-box"
                onChange={searchInput}
                onKeyDown={handleKeyDown}
                value={userSearchInput}
                placeholder="Ask about hostels, pricing, and amenities.."
              />
              <button
                className="ask-episilion-search-button"
                onClick={sendMessage}
              >
                <img src={sendImage} className="send-image-epislion" />
              </button>
            </div>
            <div className="ask-epislion-warning-message">
              Episilion AI can make mistakes. Always verify hostels details
              before booking
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
