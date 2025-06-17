import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const selectedPaste = pastes.find((paste) => paste._id === id);

  if (!selectedPaste) {
    return <div className="view-paste-container">Paste not found.</div>;
  }

  return (
    <div className="view-paste-container">
      <h1 className="view-paste-title">{selectedPaste.title}</h1>
      <div className="view-paste-content">{selectedPaste.content}</div>
      <p className="view-paste-date">
        Created At: {new Date(selectedPaste.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default ViewPaste;
