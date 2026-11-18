import Button from "./Button";
import "./ProfileCard.css";

function ProfileCard({ name, description, avatar, type }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="avatar" />

      <h2>{name}</h2>

      <p>{description}</p>

      <Button type={type} />
    </div>
  );
}

export default ProfileCard;