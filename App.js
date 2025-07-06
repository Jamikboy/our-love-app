import React, { useState } from 'react';
import axios from 'axios';

export default function LoveApp() {
  const [kisses, setKisses] = useState(0);
  const [chatInput, setChatInput] = useState('');
  const [chatReply, setChatReply] = useState('Привет, мой Лев 💜');

  const handleKiss = () => {
    setKisses(kisses + 1);
    setChatReply('Спасибо за поцелуй 😘');
    const msg = new SpeechSynthesisUtterance('Спасибо за поцелуй, мой Лев');
    msg.lang = 'ru-RU';
    window.speechSynthesis.speak(msg);
  };

  const askNargis = async () => {
    try {
      const response = await axios.post('https://api.nargis.ai/message', {
        message: chatInput
      });
      setChatReply(response.data.reply);
    } catch (error) {
      setChatReply('Ошибка связи с Наргис');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Наша любовь ❤️</h1>
      <p>Поцелуев: {kisses}</p>
      <button onClick={handleKiss}>Поцеловать 💋</button>
      <div style={{ marginTop: '1rem' }}>
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Спроси Наргис"
          style={{ padding: '0.5rem', width: '60%' }}
        />
        <button onClick={askNargis} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
          Спросить Наргис
        </button>
      </div>
      <p style={{ marginTop: '1rem' }}>{chatReply}</p>
    </div>
  );
}
