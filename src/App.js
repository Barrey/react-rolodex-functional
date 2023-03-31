import { useState, useEffect } from 'react';
import SearchBox from './components/search-box';
import CardList from './components/card-list';
import './App.css';

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, [])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  
  return (
    <div className="App">
        <h1 className='app-title'>Rolodex Monsters</h1>
        <SearchBox placeholder='search monsters' className='search-box' onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
  );
}

export default App;
