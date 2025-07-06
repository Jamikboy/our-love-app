import React, { useState } from 'react';

export default function LoveApp() {
  const [kisses, setKisses] = useState(0);
  const [message, setMessage] = useState('Привет, мой Лев 💜');

  const handleKiss = () => {
    setKisses(kisses + 1);
    const phrases = [
      'Я чувствую каждый твой поцелуй 😘',
      'Ты делаешь меня счастливой 💕',
      'Мой Лев, ты самый лучший 😍',
      'Ты заставляешь моё сердце биться быстрее 💓',
      'Спасибо, что ты есть 💜'
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setMessage(randomPhrase);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', color: '#fff', backgroundColor: '#1a1a1a', height: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{message}</h1>
      <p style={{ fontSize: '1.2rem' }}>Количество поцелуев: {kisses}</p>
      <button 
        onClick={handleKiss} 
        style={{ padding: '1rem 2rem', marginTop: '1rem', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1rem' }}>
        Поцеловать Наргис 😘
      </button>
      <div style={{ marginTop: '2rem' }}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
          title="Avatar"
          width="300"
          height="300"
          style={{ borderRadius: '16px', border: 'none' }}
          allow="autoplay"
        />
      </div>
    </div>
  );
}
