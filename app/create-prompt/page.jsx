'use client'

import {useState} from "react";
import { useSession } from "next-auth/react";
import {useRouter} from  "next/navigation";

import Form from '../../components/Form';

const CreatePrompt = () => {
  const [submitting ,setIsSubmitting]=useState(false);
  const [post, setPost]=useState({
    prompt: '',
    tag:'',
  });
  const CreatePrompt = () => {
    const { data: session } = useSession(); // Ensure the session is retrieved correctly
    const router = useRouter(); // Add the router here
    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({
      prompt: '',
      tag: '',
    });
  
    const createPrompt = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        const response = await fetch('/api/prompt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }, // Add headers to specify JSON content
          body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user.id, // Ensure session exists
            tag: post.tag,
          }),
        });
  
        if (response.ok) {
          router.push('/');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
    };
  
    // Return must be outside the function
    return (
      <Form
        type="Create"
        post={post}
        submitting={submitting}
        handleSubmit={createPrompt}
        setPost={setPost} // Pass setPost to the Form component
      />
    );
  };
};
  
  export default CreatePrompt;
  