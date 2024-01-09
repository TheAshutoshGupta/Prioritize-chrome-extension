
import Editor from './components/Editor'

function App() {


  return (
    <>
     <div className=' mix-blend-screen flex flex-col justify-start h-full items-center  p-20'>

      
      <div aria-hidden="true" className=" pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div style={{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"/> 
      </div>

      
      <div className='justify-self-start flex gap-5 align-top justify-start mb-10 '>
  <a href='https://www.google.com'>
    <img src='search.png' width={40}/>
  </a>
  
  <a href='https://www.twitter.com'>
    <img src='twitter.png' width={40}/>
  </a>
  
  <a href='https://www.linkedin.com'>
    <img src='linkedin.png' width={40}/>
  </a>
  
  <a href='https://www.youtube.com'>
    <img src='youtube.png' width={40}/>
  </a>
  
  <a href='https://www.github.com'>
    <img src='github.png' width={40}/>
  </a>
</div>



      

      <div className="bg-opacity-25 bg-white bg-blur-lg p-10 rounded-lg max-w-full w-full h-96 shadow-lg">
            <Editor/>
        </div>
      </div>
    
    </>
  )
}

export default App
