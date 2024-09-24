import React, { useState } from 'react';

const ContentRating = () => {
  // Estado inicial para likes y dislikes
  // in the second parameter like setLikes or setDislikes are the functions that will change the valio of likes or dislikes that the state is 0
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Funciones para manejar los botones
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Rate this content</h2>
      <div>
        <button onClick={handleLike} style={{ marginRight: '10px' }}>👍 Like</button>
        <button onClick={handleDislike}>👎 Dislike</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
        <h2>Total Rating {likes + dislikes}</h2>
      </div>
    </div>
  );
};

export default ContentRating;
