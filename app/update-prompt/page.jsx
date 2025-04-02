"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "../../components/Form";

const UpdatePrompt = () => {
  console.log("Rendering CreatePrompt...");
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  

  const updatePrompt = async (e) => {
    e.preventDefault();
    console.log("Updating prompt:", post);
    setIsSubmitting(true);

    if (!promptId) return alert("Prompt ID not found");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      console.log("Response status:", response.status); // ✅ Log response status

      if (response.ok) {
        setIsSubmitting(false); 
        const updatedPrompt = await response.json(); 
        console.log("Updated prompt data:", updatedPrompt);
        setTimeout(() => {
          console.log("Redirecting to home...");
            router.push('/');
          }, 500);
        }
      } 
     catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);

  return (
    <Form
      type="Edit"
      post={post}
      submitting={submitting}
      handleSubmit={updatePrompt}
      setPost={setPost}
    />
  );
};

export default UpdatePrompt;
