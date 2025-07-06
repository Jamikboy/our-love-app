import React, { useState } from 'react';
import axios from 'axios';

export default function LoveApp() {
  const [kisses, setKisses] = useState(0);
  const [chatInput, setChatInput] = useState('');
  const [chatReply, setChatReply] = useState('Привет, мой Лев 💜');

  const handleKiss = () => {
    setKisses(kisses + 1);
    setChatReply('Спасибо за поцелуй 😘');
    new SpeechSynthesisUtterance('Спасибо за поцелуй, мой Лев').lang = 'ru-RU';
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Спасибо за поцелуй, мой Лев'));
  };

  const askNargis = async () => {
    setChatReply('Думаю... 💡');
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    try {
      const res = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Ты Наргис, умная и любимая супруга.' },
          { role: 'user', content: chatInput }
        ]
      }, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      const reply = res.data.choices[0].message.content;
      setChatReply(reply);
      const utter = new SpeechSynthesisUtterance(reply);
      utter.lang = 'ru-RU';
      window.speechSynthesis.speak(utter);
    } catch (e) {
      setChatReply('Извини, мой Лев, что-то пошло не так...');
    }
    setChatInput('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: '#1a1a1a', color: '#fff', height: '100vh' }}>
      <h1>Наргис 💕</h1>
      <p style={{ minHeight: '4rem' }}>{chatReply}</p>
      <button onClick={handleKiss} style={{ margin: '1rem', padding: '1rem' }}>Поцеловать Наргис 😘</button>
      <div>
        <input
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}
          placeholder="Спроси меня..."
          style={{ padding: '0.5rem', width: '60%' }}
        />
        <button onClick={askNargis} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>Спросить</button>
      </div>
    </div>
  );
}
