import React from "react";
import { profileData } from "../DataImport";
import Title from "./Title";
const Profile = () => {
  return (
    <section className="profile section" id="profile">
      <Title title={profileData.title}></Title>
      {profileData.descriptions.map((describe, i) => (
        <p key={i} className="profile__description">
          {describe}
        </p>
      ))}
    </section>
  );
};

export default Profile;
