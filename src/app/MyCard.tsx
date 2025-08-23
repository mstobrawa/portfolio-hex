"use client";

import { useState } from "react";

type MyCardProps = {
  title: string;
  description: string;
  initialLikes?: number; // opcjonalny props
};

export default function MyCard({
  title,
  description,
  initialLikes = 0,
}: MyCardProps) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleLike}
      >
        ❤️ Like ({likes})
      </button>
    </div>
  );
}
