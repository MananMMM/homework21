import { getAllUsers } from "../lib/components/api"

export  function GET(){
    const  users=getAllUsers()
    return Response.json({users})
}

///ROUTE HANDLERS 
///USERNERIN TPENQ VOR HAMOZVENQ AVELACELA //SRUGEL ES EJUM  http://localhost:3000/api