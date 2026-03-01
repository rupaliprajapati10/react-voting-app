import { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !comment) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
    setName("");
    setComment("");
  };

  return (
    <div className="form-container">
      <h2>Give Your Feedback</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="success">Thank you for your feedback!</p>}
    </div>
  );
}

export default FeedbackForm;