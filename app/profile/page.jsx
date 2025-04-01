"use client"
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Session data:", session);
      const response=await fetch(`/profile/${session?.user.id}/posts`)
      console.log(session?.user.id);
      const data = await response.json();
      /*console.log("Fetched posts:", data);*/
      setPosts(data);
    };

    /*console.log("data");*/
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {

  };

  return (
    <Profile
      name="My"
      desc="Welcome to my Personalized Profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
