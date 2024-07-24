

export interface IUser {
  id: string;
  name: string;
  surname: string;
  login: string;
  password: string;
}

export const  UserList=(users:IUser)=>{

      return(
        <>
        <h1 className="is-size-3">Profile</h1>
        <div className="row has-background-link-light">
            <div key={users.id} className="row">
              <strong className="is-size-5">Name:{users.name}</strong>
              <br></br>
              <strong className="is-size-5">Surname:{users.surname}</strong>
            </div>
          
       
      </div>
        
        </>
      )
}