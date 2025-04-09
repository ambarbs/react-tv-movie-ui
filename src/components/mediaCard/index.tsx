import React from 'react';
import './MediaCard.css'
type Props = {
  title: string;
  imageUrl: string;
};

const MediaCard: React.FC<Props> = ({ title, imageUrl }) => (
  <div className="media-card">
    <img src={imageUrl} alt={title} />
    <p>{title}</p>
  </div>
);

export default MediaCard;
