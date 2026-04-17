import { Routes, Route } from 'react-router'
import { HomePage } from './HomePage/HomePage';
import { MoreDetailsPage } from './MoreDetailsPage/MoreDetailsPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SignUpPage } from './logins/SignUpPage.jsx';
import { LoginPage } from './logins/loginPage.jsx';
import { AskEpisilionPage } from './AskEpisilionPage/AskEpisilionPage.jsx';
import { AboutUsPage } from './AboutUs/AboutUsPage.jsx';
import { MoreFromUsPage } from './MoreFromUs/MoreFromUsPage.jsx';
import './App.css'
import { CompareHostels } from './CompareHostelsPage/CompareHostels.jsx';


function App() {
  const [hostelsCardData, sethostelsCardData] = useState([]);
  const [originalHostelCardData, setOriginalHostelCardData] = useState([])
  const [navlink, setNavLink] = useState(false);//THIS HIDES ANDS SHOWS THE HAMBURGER MENU AND BUTTON



  const loadHostelsCard = async () => {
    const response = await axios.get('https://episilion-backend-2lt0.onrender.com/api/hostels')
    //const response = await axios.get('http://localhost:3000/api/hostels')
    console.log("testing code", response.data)
    sethostelsCardData(response.data)//THIS DATA WILL CHANGE BASED ON THE FILTER OPTIONS
    setOriginalHostelCardData(response.data)//THIS DATA WILL CHANGE BASED ON THE FILTER OPTIONS
  }
  useEffect(() => {
    loadHostelsCard();
  }, []);



  return (
    <>
      <Routes>
        {/* <Route index element={<PageHeader/>}></Route> */}
        <Route index element={<HomePage hostelsCardData={hostelsCardData} sethostelsCardData={sethostelsCardData}
          navlink={navlink} setNavLink={setNavLink} originalHostelCardData={originalHostelCardData} setOriginalHostelCardData={setOriginalHostelCardData} />} />

        <Route path="moreDetails" element={<MoreDetailsPage hostelsCardData={hostelsCardData} navlink={navlink} setNavLink={setNavLink} originalHostelCardData={originalHostelCardData} />} />
        <Route path="aboutus" element={<AboutUsPage navlink={navlink} setNavLink={setNavLink} />} />
        <Route path="signup" element={<SignUpPage navlink={navlink} setNavLink={setNavLink} />} />
        <Route path="askepisilion" element={<AskEpisilionPage navlink={navlink} setNavLink={setNavLink} originalHostelCardData={originalHostelCardData} />} />
        <Route path="login" element={<LoginPage navlink={navlink} setNavLink={setNavLink} />} />
        <Route path='morefromus' element={<MoreFromUsPage navlink={navlink} setNavLink={setNavLink} />} />
        <Route path='comparehostels' element={<CompareHostels navlink={navlink} setNavLink={setNavLink} originalHostelCardData={originalHostelCardData} />} />
      </Routes>
    </>
  )
}

export default App
