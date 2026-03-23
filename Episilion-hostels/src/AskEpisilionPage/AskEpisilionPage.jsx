import { PageHeader } from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import { useNavigate } from "react-router-dom";
import './AskEpisilion.css'
import { useState, useEffect } from "react";

export function AskEpisilionPage({ navlink, setNavLink, originalHostelCardData }) {
    const [userSearchInput, setUserSearchInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);  //Initialize as array
    const navigate = useNavigate();


    //This hook scrolls to the bottom whenever chatMessages updates.
    useEffect(() => {
        const messagesDiv = document.querySelector('.messages');
        if (messagesDiv) {
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    }, [chatMessages]);

    //THIS Loads messages on mount
    useEffect(() => {
        const savedMessages = localStorage.getItem("episilionChat");
        if (savedMessages) {
            setChatMessages(JSON.parse(savedMessages));
        }
    }, []);

    // Save messages whenever they change
    useEffect(() => {
        localStorage.setItem("episilionChat", JSON.stringify(chatMessages));
    }, [chatMessages]);

    function searchInput(event) {
        setUserSearchInput(event.target.value);
    }

    function sendMessage() {
        if (!userSearchInput.trim()) return;  //Prevent empty messages

        const updatedMessages = [
            ...chatMessages,
            { message: userSearchInput, sender: 'user' }
        ];

        //Add Epsilon's response right after the user message
        //const response = episilionAnswers[Math.floor(Math.random() * episilionAnswers.length)];
        //let responseName = '';
        const filteredHostels = originalHostelCardData.filter(
            (hostel) => hostel.featured
        )

        function goToHostelPage(parameter) {
            console.log(parameter)
            navigate(`/moreDetails?hostelId=${parameter}`);
        }

        const finalMessages = [
            ...updatedMessages,
            {
                message: <div>
                    <p className="episilion-response-header">Try these hostels</p>
                    {filteredHostels.map((hostel) => {
                        return (
                            <>
                                <img src={hostel.image} alt={`${hostel.name} image`} className="episilion-response-image" />
                                <p className="episilion-response">
                                    <p className="episilion-response-hostel-name">{hostel.name}</p>
                                    <p className="episilion-response-hostel-price">$({hostel.pricing.priceMax})</p>
                                    <p className="episilion-response-hostel-link" onClick={() => goToHostelPage(hostel.id)}>CLICK HERE</p>
                                </p>
                            </>

                        )
                    })}
                </div>, sender: 'episilion'
            }
        ];

        setChatMessages(finalMessages);
        setUserSearchInput('');  // Clear input after sending
    }

    //Allow sending with Enter key
    function handleKeyDown(event) {
        if (event.key === 'Enter') sendMessage();
    }

    return (
        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />
            <div className="messages">
                <div className="episilion-message">How can I be of help?</div>

                {/*Map over chatMessages array to render each bubble */}
                {chatMessages.map((chat, index) => (
                    <div key={index} className={chat.sender === 'user' ? 'user-message' : 'episilion-message'}>
                        {chat.message}
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
                />
                <button className="ask-episilion-search-button" onClick={sendMessage}>Search</button>
            </div>
            <SiteFooter />
        </>
    );
}