import { useState } from "react";
import axios from "axios";

export function usePositions() {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [maxVote, setMaxVote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost/online-voting-system/project/server/api/auth/admin/positions.php",
        {
          description,
          max_vote: maxVote,
        }
      )
      .then(() => {
        setShowModal(false);
        setDescription("");
        setMaxVote("");
        // refresh table here
      });
  };

  return {
    showModal,
    setShowModal,
    description,
    setDescription,
    maxVote,
    setMaxVote,
    handleSubmit,
  };
}
