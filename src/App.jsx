import Navbar from "./components/Navbar";
import VoteCard from "./components/VoteCard";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <VoteCard />
      <FeedbackForm />
    </div>
  );
}

export default App;