import React from 'react'
import Chat from './components/Chat'
import ChatsBar from './components/ChatsBar'


function App() {
  return (
    <div className='flex bg-[#1C1C1C] h-screen'> 
      <ChatsBar/>
      <Chat/>
      
    </div>
  )
}

export default App
