import React,{createContext,useState} from 'react'




function ContextAllPost({children}) {
    const [allPost,setAllPost]=useState([])
    return (
        <AllPostContext.Provider value={{allPost,setAllPost}}>
            {children}
        </AllPostContext.Provider>
    )
}

export default ContextAllPost
export const AllPostContext = createContext(null) ;
