import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // To access the dynamic URL parameter
import { CommunityType } from "@/models";


const CommunityDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Extract the community ID from the URL
  const [community, setCommunity] = useState<CommunityType | null>(null);

  useEffect(() => {
    if (id) {
      const fetchCommunity = async () => {
        const response = await fetch(`/api/communities/${id}`); // Fetch community by ID
        const data = await response.json();
        setCommunity(data); // Set community data in state
      };

      fetchCommunity();
    }
  }, [id]); // Re-run when the ID changes

  if (!community) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{community.name}</h1>
      <p><strong>ID:</strong> {community._id}</p> {/* Display Community ID */}
      <p><strong>Creator:</strong> {community.creator}</p> {/* Display Creator */}
      <p><strong>Admins:</strong> {community.admins.join(", ")}</p> {/* Display Admins */}
      <p><strong>Verified Users:</strong> {community.verifiedUsers.join(", ")}</p> {/* Display Verified Users */}
    </div>
  );
};

export default CommunityDetails;
