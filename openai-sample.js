const { Configuration, OpenAIApi } = require("openai");
const express = require('express');

require("dotenv").config();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const app = express();
const openai = new OpenAIApi(config);

// json middleware
app.use(express.json());

// POST endpoint
app.post('/gpt/qna', async (req, res) => {
    try {
        const payload = req.body;
        console.log(payload);
        const question = payload.question;
      
        // get answer
        const answers_messages = [];
        answers_messages.push({ role: "system", content: "You are an instructor who is answering a question for an inquisitive student. You try to answer them in a single, short paragraph, without defining the terms needed to understand the answer." });
        answers_messages.push({ role: "user", content: question });
        const answer_completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: answers_messages,
            temperature: 0
        });
        const answer = answer_completion.data.choices[0].message.content;
        console.log(answer);
    
        // get list of questions
        const questions_messages = [];
        questions_messages.push({ role: "system", content: "You are an inquisitive student who replies to each answer with one to five other questions. The questions are usually 'why' questions or questions about the definitions, and should be understandable even without the context of the previous answer. 'Ask' the questions in a json array format with escaped characters (i.e. [\"Why is sun yellow?\"]." });
        questions_messages.push({ role: "assistant", content: question });
        questions_messages.push({ role: "user", content: answer });
        
        const question_list_completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: questions_messages,
            temperature: 1
        });
        const questions_json = question_list_completion.data.choices[0].message.content;
        console.log(questions_json);
        try {
            const questions = JSON.parse(questions_json);
    
            res.json({
                answer, 
                questions, 
            });
        } catch (error) {
            console.log(error);
    
            res.json({
                answer, 
                questions: questions_json,
            });
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error.message });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});t
