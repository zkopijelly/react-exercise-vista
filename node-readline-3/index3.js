import express from 'express';
import rateLimitingMiddleware from './middleware/rateLimitingMiddleware.js';

const app = express();

app.use('/api', rateLimitingMiddleware);

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is some data.' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
