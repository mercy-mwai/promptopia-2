import Link from "next/link"

const Form = ({type, post,submitting,handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col"> 
      <h1 className="head_text text-left"> <span className="blue_gradient">{type} Post</span> </h1>
      <p className="desc text-left">
        {type} and share amazing prompts with the world, and let your imagination run wild with an AI-powered prompt
      </p>
      <form
      onClick={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
              
          </span>
        </label>
      </form>
    </section>
  )
}

export default Form