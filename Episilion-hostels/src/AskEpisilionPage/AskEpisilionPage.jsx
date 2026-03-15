import { PageHeader } from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import { useNavigate } from "react-router-dom";
import './AskEpisilion.css'
import { useState } from "react";

export function AskEpisilionPage({ navlink, setNavLink, originalHostelCardData }) {
    const [userSearchInput, setUserSearchInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);  //Initialize as array
    const navigate = useNavigate();

    //const episilionAnswers = ["What can you see", "No hostels available", "Yes no hostel is available", "What more can i say"];

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
        // filteredHostels.forEach((filteredHostel) => {
        //     console.log(filteredHostel.name, '\n', filteredHostel.pricing.priceMax)
        //     responseName += "\n " + filteredHostel.name + `(${filteredHostel.pricing.priceMax})`

        // })
        // console.log(responseName)
        // response = filteredHostels.name
        // response += `(${filteredHostels.pricing.priceMax})`
        //const answer = "heloooo"

        const finalMessages = [
            ...updatedMessages,
            {
                message: <div>
                    <p className="episilion-response-header">Try these hostels</p>
                    {filteredHostels.map((hostel) => {
                        return (
                            <p className="episilion-response">
                                <p className="episilion-response-hostel-name">{hostel.name}</p>
                                <p className="episilion-response-hostel-price">$({hostel.pricing.priceMax})</p>
                                <p className="episilion-response-hostel-link" onClick={() => goToHostelPage(hostel.id)}>CLICK HERE</p>
                            </p>
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