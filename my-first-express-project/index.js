const expres = require('express');
const app = express();
const port = 3000;

// json middleware
app.use(express.json());

app.post('/api/endpoint', async (req, res) => {
    const payload = req.body;
  
    // Send a response
    res.json({ message: 'Data received successfully' });
  });

// Asynchronous endpoint with parameters
app.get('/async/with-params/:param', async (req, res) => {
    const param = req.params.param;
  
    try {
      // Perform asynchronous operation with parameter
      const result = await someAsyncOperationWithParams(param);
  
      // Send the result as response
      res.json(result);
    } catch (error) {
      // Handle the error
      res.status(500).json({ error: error.message });
    }
  });

// Non-asynchronous endpoint
app.get('/not-async', (req, res) => {
    const result = someNonAsyncOperation();
  
    // Send the result as response
    res.json(result);
  });

// Simulating asynchronous operations
function someAsyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Async operation complete');
      }, 2000);
    });
  }
  
function someAsyncOperationWithParams(param) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Async operation with parameter: ${param}`);
      }, 2000);
    });
}

// Start the server
app.listen(port, () => {
    console.log(`Server started on port {port}`);
});
