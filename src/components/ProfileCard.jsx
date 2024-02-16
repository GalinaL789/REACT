import './profileCard.css';

function ProfileCard({ src, name, lastName }) {
  return (
    <div>
      <img className="avatar" src={src} alt="avatar.jpeg" />
      <h3>Имя: {name}</h3>
        <h3>Фамилия: {lastName}</h3>
    </div>
  );
}

export default ProfileCard;