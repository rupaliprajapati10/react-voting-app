function VoteButtons({ onLike, onDislike, onReset }) {
  return (
    <div className="buttons">
      <button onClick={onLike}>👍 Like</button>
      <button onClick={onDislike}>👎 Dislike</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default VoteButtons;