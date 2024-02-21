import React, { useState } from 'react';
import Button from "../Button/Button";

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div>
      <Button name="Like"  type="button" onClick={handleLike}/><h2>Like {likes}</h2>
      <Button name="Dislike"  type="button" onClick={handleDislike}/><h2>Dislike {dislikes}</h2>
      <Button name="Reset"  type="button"onClick={handleReset}/>Reset Results
    </div>
  );
};

export default Feedback;