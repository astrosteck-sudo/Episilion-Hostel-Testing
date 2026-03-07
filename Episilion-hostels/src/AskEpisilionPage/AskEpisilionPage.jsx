import { PageHeader } from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import './AskEpisilion.css'
import { useState } from "react";






export function AskEpisilionPage({ navlink, setNavLink }) {
    const [userSearchInput, setUserSearchInput] = useState('');
    const [userMessage, setUserMessage] = useState('This is the user message');
    const [episilionMessage, setEpisilionMessage] = useState('This is ask epislion message');
    const [displayMessage, setDisplayMessage] = useState('')

    function searchInput(event) {
        const result = event.target.value;
        console.log(result)
        console.log(result)
        setUserSearchInput(result)

    }

    function sendMessage(){
        setUserMessage(userSearchInput);
        setUserSearchInput('')
    }



    return (
        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} substituteLink={<Link className="link" to="/">Home</Link>} />


            <div className="messages">
                <div className="user-message">
                    {userMessage}
                    
                </div>

                <div className="episilion-message">
                    {episilionMessage}
                </div>
            </div>


            <div className="ask-episilion-search">
                <input
                    type="text"
                    className="ask-episilion-input-box"
                    onChange={searchInput}
                    value={userSearchInput}
                />
                <button className="ask-episilion-search-button" onClick={sendMessage}>Search</button>
            </div>

            <SiteFooter />
        </>


    )
}