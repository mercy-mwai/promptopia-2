"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@/components/Profile";

const userProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      /* console.log("Session data:", session);*/
      const response = await fetch(`/api/users${params_.id}/posts`);
      /*console.log(session?.user.id);*/
      const data = await response.json();
      /*console.log("Fetched posts:", data);*/
      setUserPosts(data);
    };
    if (params?.id) fetchPosts();
  }, [params.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  
  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}Personalized Profile page`}
      data={userPosts}
    />
  );
};

export default userProfile;
