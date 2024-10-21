import React, { useState, useEffect } from 'react';
import './CursorFollow.css'; // Подключение стилей

const CursorFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="mouseCursor cursor-outer"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        className="mouseCursor cursor-inner"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
      </div>
    </>
  );
};

export default CursorFollow;
