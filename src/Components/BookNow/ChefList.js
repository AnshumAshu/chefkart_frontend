import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function ChefList({ onContinue, onBack }) {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedChefId, setSelectedChefId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");

  useEffect(() => {
    fetch("https://chefkart-backend.onrender.com/chef/get")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch chefs");
        return res.json();
      })
      .then(async (data) => {
        // Fetch availability for each chef
        const detailedChefs = await Promise.all(
          data.data.map(async (chef) => {
            try {
              const res = await fetch(`https://chefkart-backend.onrender.com/chef/get/${chef._id}`);
              const details = await res.json();
              return { ...chef, availability: details.data.availability || [] };
            } catch (err) {
              return { ...chef, availability: [] };
            }
          })
        );
        setChefs(detailedChefs);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  const handleViewProfile = (chef) => {
    const newTab = window.open("", "_blank");
    const html = `
      <html>
      <head>
        <title>${chef.name}'s Profile</title>
        <style>
          body { background-color: #0f0f0f; color: white; font-family: sans-serif; padding: 2rem; }
          .back { color: orange; text-decoration: none; margin-bottom: 1rem; display: inline-block; }
          .profile { background: #1e1e1e; padding: 1.5rem; border-radius: 10px; max-width: 600px; margin: auto; }
          .img { width: 100px; height: 100px; object-fit: cover; border-radius: 50%; border: 2px solid #aaa; }
          .slot { background: #333; color: orange; padding: 4px 10px; border-radius: 20px; margin: 4px; display: inline-block; font-size: 14px; }
        </style>
      </head>
      <body>
        <a href="#" class="back" onclick="window.close()">← Go Back</a>
        <div class="profile">
          <img src="${chef.profilepic || chef.default_cook_image}" alt="${chef.name}" class="img" />
          <h1>${chef.name}</h1>
          <p>${chef.experience}</p>
          <p>⭐ ${chef.starRating} (${chef.totalRatings} reviews)</p>
          <h3>Available Time Slots:</h3>
          <div>${(chef.availability || []).map(a => `<span class="slot">${a.start} - ${a.end}</span>`).join("")}</div>
        </div>
      </body>
      </html>
    `;
    newTab.document.write(html);
    newTab.document.close();
  };

  if (loading) return <div className="p-4">Loading chefs...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!chefs.length) return <div className="p-4">No chefs found.</div>;

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4 bg-black text-white min-h-screen">
      {/* Back Icon */}
      <button onClick={onBack} className="text-white mb-4 flex items-center space-x-2">
        <FaArrowLeft />
        <span>Back</span>
      </button>

      <h2 className="text-xl font-semibold mb-2">Recommended Cooks</h2>

      <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
        {chefs.map((chef) => (
          <div key={chef._id} className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-700">
            <div className="flex items-center space-x-4">
              <img
                src={chef.profilepic || chef.default_cook_image}
                alt={chef.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-500"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{chef.name}</h3>
                <div className="text-sm text-gray-300 flex items-center gap-2">
                  ⭐ {chef.starRating} ({chef.totalRatings}) • {chef.experience}
                </div>
                <div className="text-orange-400 text-sm font-semibold mt-1">
                  {chef.cuisine?.length || 0} cuisines
                </div>
              </div>
              <input
                type="checkbox"
                checked={selectedChefId === chef._id}
                onChange={() => {
                  setSelectedChefId(chef._id);
                  setSelectedSlot(chef.availability?.[0]?.start + " - " + chef.availability?.[0]?.end || "");
                }}
                className="form-checkbox w-5 h-5 text-orange-500"
              />
            </div>

            {/* View Profile & Time Selector */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleViewProfile(chef)}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded text-sm"
              >
                View Profile
              </button>

              <select
                className="bg-gray-800 text-white px-2 py-1 rounded text-sm border border-gray-600"
                value={selectedChefId === chef._id ? selectedSlot : ""}
                onChange={(e) => {
                  if (selectedChefId === chef._id) {
                    setSelectedSlot(e.target.value);
                  }
                }}
              >
                {(chef.availability || []).map((slot, index) => (
                  <option key={index} value={`${slot.start} - ${slot.end}`}>
                    {slot.start} - {slot.end}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      {selectedChefId && (
        <>
          <div className="mt-4 text-sm text-gray-400">
            Please select a slot to continue
          </div>
          <button
            className="mt-1 mb-2 w-full pt-2 pb-2 rounded bg-orange-500 hover:bg-orange-600"
            onClick={() => onContinue({ chefId: selectedChefId, slot: selectedSlot })}
          >
            Continue
          </button>
        </>
      )}
    </div>
  );
}
