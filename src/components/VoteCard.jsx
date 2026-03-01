import { useState } from "react";
import VoteButtons from "./VoteButtons";
import ResultDisplay from "./ResultDisplay";

function VoteCard() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDislike = () => {
    setDislike(dislike + 1);
  };

  const handleReset = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="card">
      <VoteButtons
        onLike={handleLike}
        onDislike={handleDislike}
        onReset={handleReset}
      />

      <ResultDisplay like={like} dislike={dislike} />
    </div>
  );
}

export default VoteCard;