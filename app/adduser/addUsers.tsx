import React, { useState } from 'react';

const mockUserDatabase = ['alice', 'bob', 'charlie', 'david']; // placeholder usernames

function CreateCommunityPage() {
  const [username, setUsername] = useState('');
  const [cofounders, setCofounders] = useState<string[]>([]);
  const [error, setError] = useState('');

  const handleAddUser = () => {
    if (!username.trim()) return;

    if (!mockUserDatabase.includes(username)) {
      setError(`User "${username}" does not exist.`);
    } else if (cofounders.includes(username)) {
      setError(`User "${username}" is already a co-founder.`);
    } else {
      setCofounders([...cofounders, username]);
      setError('');
    }

    setUsername('');
  };

  const handleConfirm = () => {
    console.log('Final co-founders:', cofounders);
    alert('Community created with co-founders: ' + cofounders.join(', '));
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Create a Community</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Co-Founder Username:</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button onClick={handleAddUser} style={{ marginLeft: '1rem' }}>
          Add
        </button>
      </div>

      {error && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          ⚠️ {error}
        </div>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <h4>Co-Founders Added:</h4>
        {cofounders.length > 0 ? (
          <ul>
            {cofounders.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        ) : (
          <p>No co-founders added.</p>
        )}
      </div>

      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default CreateCommunityPage;
