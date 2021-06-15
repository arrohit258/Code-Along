let users=[]

const addUser=({id,name,room})=>{
    name=name.trim().toLowerCase()
    room=room.trim().toLowerCase()

    const existingUser=users.find((user)=>user.room === room && user.name===name)
    // if(existingUser){
    //     console.log("error")
    //     return {error:'Username is taken'}
    // }
    const user={id,name,room}
    console.log("here",user)
    users.push(user)
    return {user}


}
const removeUser=(id)=>{
    const index=users.findIndex((user)=>user.id===id)

    if(index!=-1){
        return users.splice(index,1)[0]
    }
}

const getUser=(id)=>{
    console.log("r",users,id)
    console.log(users.find((user)=>user.id===id))
 return users.find((user)=>user.id===id)
}


module.exports={addUser,getUser,removeUser}