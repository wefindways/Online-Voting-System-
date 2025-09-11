import { useState, useEffect } from "react";
import axios from "axios";

export function usePositions() {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [maxVote, setMaxVote] = useState("");
  const [positions, setPositions] = useState([]);

  const fetchPositions = () => {
    axios
      .get("http://localhost/online-voting-system/project/server/api/auth/admin/positions.php")
      .then((res) => setPositions(res.data))
      .catch((err) => console.error("Error fetching positions:", err));
  };

  useEffect(() => {
    fetchPositions(); // load once
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/online-voting-system/project/server/api/auth/admin/positions.php", {
        description,
        max_vote: maxVote,
      })
      .then((res) => {
        if (res.data.success) {
          // append new row to state
          setPositions((prev) => [res.data.position, ...prev]);

          setShowModal(false);
          setDescription("");
          setMaxVote("");
        } else {
          console.error("Save failed:", res.data.message);
        }
      })
      .catch((err) => console.error("Error saving position:", err));
  };

  return {
    showModal,
    setShowModal,
    description,
    setDescription,
    maxVote,
    setMaxVote,
    positions,
    handleSubmit,
  };
}
