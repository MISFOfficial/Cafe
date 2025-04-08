import './App.css'
import Blogs from './components/Blogs/Blogs'
import Nav from './components/navigation/Nav'

function App() {

  return (
    <>
    {/* nabigation bar */}
      <Nav></Nav>
      <div className="main-container flex gap-x-10 px-[100px]">
        {/* left-container */}
        <div className="left-container w-[75%] text-center">
          {/* blogs content */}
          <Blogs></Blogs>
        </div>
        {/* right-container */}
        <div className="right-container w-[25%] text-center border-black border">
          <h1 className='text-2xl font-bold'>Reading time : 0</h1>
          <h1 className='text-2xl font-bold'>Bookmarks count: 0</h1>
        </div>
      </div>
    </>
  )
}

export default App
