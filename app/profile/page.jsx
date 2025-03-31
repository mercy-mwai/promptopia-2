"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@/components/Profile";

const MyProfile = () => {
  /*const { data: session } = useSession();*/
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Session data:", session);
      /*const response = await fetch(`/api/prompt/user/${session?.user.id}`);*/
    /*const variableUser=session?.user.id;*/
    console.log("Variable User:", variableUser);
      const response = await fetch('/profile/variableUser/posts');
      console.log(session?.user.id);
      const data = await response.json();
      console.log("Fetched posts:", data);
      setPosts(data);
    };

    console.log(data);
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {

  };
  const handleDelete = async () => {

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
