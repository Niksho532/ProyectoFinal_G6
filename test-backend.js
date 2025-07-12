const testBackendDirectly = async () => {
  const testData = {
    userId: 1,
    productId: 1,
    quantity: 1
  };
  console.log('Testing main backend on port 3003...');
  try {
    const response = await fetch('http://localhost:3003/api/cart-items/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    const text = await response.text();
    console.log('Response text:', text);
    if (text) {
      try {
        const data = JSON.parse(text);
        console.log('Parsed response:', data);
      } catch (e) {
        console.log('Could not parse as JSON');
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
  console.log('\nTesting simple test server on port 3004...');
  try {
    const response = await fetch('http://localhost:3004/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    console.log('Test server response status:', response.status);
    const data = await response.json();
    console.log('Test server response:', data);
  } catch (error) {
    console.error('Test server error:', error);
  }
};
testBackendDirectly();

