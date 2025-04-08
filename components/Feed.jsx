'use client'

import{useState, useEffect} from 'react';

import PromptCard from './PromptCard';

const PromptCardList=({data, handleTagClick})=>{
  
  return(
    <div className='mt-16 prompt_layout'>
     {data.map((post) =>(
      <PromptCard 
      key={post._id}
      post={post}
      handleTagClick={handleTagClick}
      />
     ))}
    </div>
  )
}

const Feed = () => {
  const [posts, setPosts] = useState([]);

  //search
  const [searchText, setSearchText]=useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(()=>{
    const fetchPosts=async()=> {
      const response=await fetch('api/prompt');
      const data =await response.json();

      setPosts(data)
    }
    console.log("data");
    fetchPosts();
  },[]);

  // const filterPrompts=(searchText)=>{
  //   const regex= new RegExp(searchText, "i");
  //   return posts.filter((item))
  //   .filter((item)=>regex.test(item.tag) || regex.test(item.prompt) || regex.test(item.creator.username));
  // }
  // const handleSearchChange=(e)=>{

  // }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
          <input 
          type='text'
          placeholder='Search for a tag or a username'
          // value={searchText}
          // onChange={handleSearchChange}
          required
          className='search_input peer'
          />
      </form>
      <PromptCardList 
      data={posts}
      handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed