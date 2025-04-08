'use client'

import {useState} from "react";
import { useSession } from "next-auth/react";
import {useRouter} from  "next/navigation";

import Form from '../../components/Form';

  const CreatePrompt = () => {
    /*console.log('Rendering CreatePrompt...');*/
    const router=useRouter();
    const { data: session } = useSession();

    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({
      prompt: '',
      tag: '',
    });
    
    const createPrompt = async (e) => {
      e.preventDefault();
      /*console.log('Submitting:', {
        userId: session?.user?.id,
        prompt: post.prompt,
        tag: post.tag,
      });*/

      if (!post.prompt || !post.tag) {
        alert('Please fill in both the prompt and tag fields.');
        setIsSubmitting(false);
        return;
      }
    
      
      setIsSubmitting(true);
  
      try {
        console.log("Submitting prompt:", session?.user.id, post.prompt, post.tag);
        const response = await fetch("api/prompt/new", {
          method: 'POST',
          body: JSON.stringify({
            prompt: post.prompt,
            userid: session?.user.id, 
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
  
    return (
      <Form
        type="Create"
        post={post}
        submitting={submitting}
        handleSubmit={createPrompt}
        setPost={setPost} 
      />
    );
  };

  export default CreatePrompt;
  