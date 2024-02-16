import './App.css';
import ProfileCard from './components/ProfileCard';
const users = [
  {
    src: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: 'Ivan',
    lastName: 'Ivanov',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.2ejOJtifQCVnTBQ2WcW59QHaE7?w=223&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    name: 'John',
    lastName: 'Smith',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.nq6r6yTeNKIw5OHeU1zR3gHaEK?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    name: 'Bob',
    lastName: 'Harvy',
  },
];

function App() {
  return (
    <div className="page_wrapper">
      {users.map((user, i) => {
        return (
          <ProfileCard
            key={i}
            src={user.src}
            name={user.name}
            lastName={user.lastName}
          />
        );
      })}
    </div>
  );
}

export default App;