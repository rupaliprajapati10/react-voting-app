function ResultDisplay({ like, dislike }) {
  let message;

  if (like > dislike) {
    message = "Like is Winning 🎉";
  } else if (dislike > like) {
    message = "Dislike is Winning 😢";
  } else {
    message = "It's a Tie 🤝";
  }

  return (
    <div className="results">
      <h2>👍 Likes: {like}</h2>
      <h2>👎 Dislikes: {dislike}</h2>
      <h3>{message}</h3>
    </div>
  );
}

export default ResultDisplay;