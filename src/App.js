import { useState } from 'react';
import SearchBox from './components/search-box';

function App() {
  const [searchField, setSearchField] = useState('');
  console.log(searchField)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
        <h1 className='app-title'>Rolodex Monsters</h1>
        <SearchBox placeholder='search monsters' className='search-box' onChangeHandler={onSearchChange} />
      </div>
  );
}

export default App;
