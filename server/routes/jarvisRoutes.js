import OpenAI from 'openai';
import express from 'express';

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY, // Use environment variable to store the API key securely
});

// Route for testing API connection
router.get('/', (req, res) => {
    res.send("Hello from JARVIS");
});

// Route to handle image generation
router.post('/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;

        // Check if the prompt is present
        if (!prompt) {
            return res.status(400).json({ message: 'Prompt is required' });
        }

        const response = await openai.images.generate({
            model: 'dall-e-3',
            prompt,
            n: 1,
            size: '1024x1024',
        });

        const aiImageUrl = response.data[0].url;
        res.status(200).json({ message: aiImageUrl });

    } catch (error) {
        console.error('Error calling OpenAI API: ', error);
        const errorMessage = error?.response?.data?.error?.message || error.message || 'Something went wrong';
        res.status(500).json({ message: errorMessage });
    }
});

export default router;
