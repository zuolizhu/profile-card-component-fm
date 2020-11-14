import GlobalStyles from './GlobalStyles';
import ProfileCard from './components/ProfileCard';

const users = [
  {
    id: 1,
    username: 'Victor Crest',
    age: 26,
    location: 'London',
    followers: '80K',
    likes: '803K',
    photos: '1.4K',
    avatar: '/assets/images/image-victor.jpg'
  }
];

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {users.map(user => <ProfileCard key={user.id} userInfo={user} />)}
    </div>
  );
}

export default App;
