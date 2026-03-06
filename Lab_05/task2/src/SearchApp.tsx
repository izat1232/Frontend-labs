import { useState } from 'react';
import { User } from './types';

const INITIAL_DATA: User[] = [
  { name: 'Alice', email: 'alice@mail.com', age: 25 },
  { name: 'Bob', email: 'bob@mail.com', age: 30 },
  { name: 'Charlie', email: 'charlie@mail.com', age: 35 },
  { name: 'Diana', email: 'diana@mail.com', age: 28 },
  { name: 'Eve', email: 'eve@mail.com', age: 22 }
];

function SearchApp() {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm('');
    setFilteredUsers(users);
  };

  return (
    <div>
      <h1>Lab 5.2 - User Search</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleClear}>Clear</button>
      
      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email} - Age: {user.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchApp;
