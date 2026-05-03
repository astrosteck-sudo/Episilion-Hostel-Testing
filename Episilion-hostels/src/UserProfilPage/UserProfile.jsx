import { PageHeader } from "../PageHeader/PageHeader";
//import profilePicture from "../assets/icons/user.png";
import "./UserProfile.css";
import CalenderImage from "../assets/icons/calendar.png";

export function UserProfilePage() {
  return (
    <>
      <title>Profile Page | Episilion Hostels</title>

      <div className="user-profile-container">
        <div className="user-profile-name-abrv">FB</div>

        <div>
          <p className="user-profile-name">Felix Brown Nice</p>
          <p className="user-profile-email">felix123@gmail.com</p>
          <div className="user-profile-joined">
            <img
              className="user-profile-calender-image"
              src={CalenderImage}
              alt=""
            />
            Joined <span className="user-joined-date-span">April 2026</span>
          </div>
        </div>
      </div>
    </>
  );
}
