import React from 'react'

//#f5204b
function ChatsBar() {
  return (
    <div className=' mt-[2vh] mx-[2vw] text-white cursor-default border px-[1vw] pt-[2vh] rounded-tl-lg rounded-tr-lg'>
      <Head/>
      <SearchBar/>
      <Main/>
    </div>
  )
}

//Header of the Chats Bar
const Head = ()=>{
    return (
        <div className=' flex items-center justify-between mb-[2vh]'>
            <h1 className='text-xl font-semibold'>user_name</h1>
            <img src="https://avatar.iran.liara.run/public" alt="" className=' w-[2vw]'/>
        </div>
    )
}

//User Search Bar of the Chats Bar
const SearchBar = ()=>{
    return(
    <div className='searchbar'>
    <label className="input input-bordered flex items-center gap-2 ">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input type="text" className="grow rounded-full px-[1vw] py-[1vh] bg-black " placeholder="Username" />
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd" />
      </svg>
    </label>
    </div>
    )
}

//Main of the Chats Bar
const Main = ()=>{

    return (

        <div className='mt-[2vh] overflow-y-scroll h-[85.7%]'>
            <h1>Messages</h1>
            <div className='allchats'>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Abhirup Pan" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Abhirup Pan" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Swagnik Som" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Abhinaba Das" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            <ChatBarElem friendName="Ayan Nandi" avatar="https://avatar.iran.liara.run/public" chat="Hi!! How are you" time="1h"/>
            </div>
        </div>
    )
}

//Each chat bar element of the chats bar
const ChatBarElem = ({friendName, chat, time})=>{
    
    let firstName = friendName.split(" ")[0];
    let lastName =  friendName.split(" ")[1];
    const avatar = `https://avatar.iran.liara.run/username?username=${firstName+lastName}`
    return (

        <div className=' flex items-center gap-3 mt-[2vh] cursor-pointer'>
          <img src={avatar} alt="" className=' w-[2vw] mb-[2vh]'/>
          <div>
             <p>{friendName}</p>
             <div className=' flex gap-2 items-center text-[0.8rem]'>
                <p>{chat}</p>
                <div className=' bg-gray-300 w-[0.1vw] h-[0.2vh] rounded-full'></div>
                <p>{time}</p>
             </div>
          </div>
        </div>
    )
}
export default ChatsBar
