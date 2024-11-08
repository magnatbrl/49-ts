import './profileCard.css'

function ProfileCard() {

  const user = {
    avatar: 'https://resizer.mail.ru/p/1b644c88-7f2c-5776-973e-dd5586fa84b3/AQAKa7YA4DK9_FCnOwnV-juTfO4ah_eMN9T6cl5CnjG0Gn9_ywACJi5lFpRJonCpIncMIwbP4koek-7E0_4IvdhthbM.png',
    name: 'John Smith',
    occupation: 'Software engineer',
    hobby: 'coding'
  }

  return (
    <div className="profile-card">
      <img src={user.avatar} className='profile-pictures' />
      <ul>
      <li className='profile-name'>Name: {user.name}</li>
      <li className='profile-occupation'>Occupation: {user.occupation}</li>
      <li className='profile-hobby'>hobby: {user.hobby}</li>
      </ul>
    </div>
  )
}

export default ProfileCard;