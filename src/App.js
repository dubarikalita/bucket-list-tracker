import { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { generateClient } from 'aws-amplify/api';
import { listBucketItems } from './graphql/queries';
import { createBucketItem, deleteBucketItem } from './graphql/mutations';

const client = generateClient();

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const res = await client.graphql({
        query: listBucketItems,
      });
      setItems(res.data.listBucketItems.items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

  async function addItem() {
    if (!input) return;

    try {
      await client.graphql({
        query: createBucketItem,
        variables: {
          input: {
            title: input,
            completed: false,
          },
        },
      });

      setInput('');
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }

  async function deleteItem(id) {
    try {
      await client.graphql({
        query: deleteBucketItem,
        variables: {
          input: { id },
        },
      });
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: 'auto' }}>
      <h1>My Bucket List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add something you want to do..."
        style={{ padding: '8px', width: '70%' }}
      />

      <button
        onClick={addItem}
        style={{ padding: '8px 12px', marginLeft: '8px' }}
      >
        Add
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginTop: '10px' }}>
            {item.title}
            <button
              onClick={() => deleteItem(item.id)}
              style={{ marginLeft: '10px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withAuthenticator(App);
