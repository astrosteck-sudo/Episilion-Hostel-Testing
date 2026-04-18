import { PageHeader } from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import { useNavigate } from "react-router-dom";
import './AskEpisilion.css'
import { useState, useEffect } from "react";

export function AskEpisilionPage({ originalHostelCardData }) {
    const [userSearchInput, setUserSearchInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);  //Initialize as array
    const [userCautionText, setUserCautionText] = useState(true)
    const navigate = useNavigate();


    //This hook scrolls to the bottom whenever chatMessages updates.
    useEffect(() => {
        const messagesDiv = document.querySelector('.messages');
        if (messagesDiv) {
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    }, [chatMessages]);

    // Load messages on mount
    useEffect(() => {
        const savedMessages = localStorage.getItem("episilionChat");
        if (savedMessages) {
            setUserCautionText(false)
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

    function sendMessage() {
        if (!userSearchInput.trim()) return;  //Prevent empty messages
        setUserCautionText(false)
        const updatedMessages = [
            ...chatMessages,
            {
                message: userSearchInput,
                sender: 'user'
            }
        ];

        //Add Epsilon's response right after the user message
        //const response = episilionAnswers[Math.floor(Math.random() * episilionAnswers.length)];
        //let responseName = '';
        const filteredHostels = originalHostelCardData.filter(
            (hostel) => hostel.featured
        )
        console.log(filteredHostels)

        const finalMessages = [
            ...updatedMessages,
            {
                message: filteredHostels,
                type: 'episilionResults',
                sender: 'episilion'
            }
        ];

        setChatMessages(finalMessages);
        setUserSearchInput('');  // Clear input after sending
    }
    function goToHostelPage(parameter) {
        console.log(parameter)
        navigate(`/moreDetails?hostelId=${parameter}`);
    }

    //Allow sending with Enter key
    function handleKeyDown(event) {
        if (event.key === 'Enter') sendMessage();
    }

    // function clearLocalstorage(){
    //     localStorage.clear()
    // }

    return (
        <>
            <title>Ask Episilion | Episilion Hostels</title>
            {/* <PageHeader navlink={navlink} setNavLink={setNavLink} /> */}
            <div className="messages">
                <div className="episilion-message">How can I be of help?</div>

                <div className={`user-caution-message ${userCautionText ? 'open': 'close'}`}>
                    <p>This is a testing of Episilion AI, questions asked should be short and direct for more accurate responses !!</p>
                </div>

                {/*Map over chatMessages array to render each bubble */}
                {chatMessages.map((chat, index) => (
                    <div key={index} className={chat.sender === 'user' ? 'user-message' : 'episilion-message'}>
                        {chat.type === 'episilionResults' ?
                            (
                                <div>
                                    <p className="episilion-response-header">Try these hostels</p>
                                    {chat.message.map((hostel) => {
                                        return (
                                            <div key={hostel.id} className="episilion-hostel-card">
                                                <img src={hostel.image} alt={`${hostel.name} image`} className="episilion-response-image" />
                                                <p className="episilion-response">
                                                    <p className="episilion-response-hostel-name">{hostel.name}</p>
                                                    <p className="episilion-response-hostel-price">$({hostel.pricing.priceMax})</p>
                                                    <p className="episilion-response-hostel-link" onClick={() => goToHostelPage(hostel.id)}>CLICK HERE</p>
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : chat.message}
                    </div>
                ))}
            </div>
            <div className="ask-episilion-search">
                <input
                    type="text"
                    className="ask-episilion-input-box"
                    onChange={searchInput}
                    onKeyDown={handleKeyDown}
                    value={userSearchInput}
                    placeholder="Type here and press Enter..."
                />
                <button className="ask-episilion-search-button" onClick={sendMessage}>Send</button>
            </div>
            <SiteFooter />
        </>
    );
}