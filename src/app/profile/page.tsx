
import { getAllUsers } from "../lib/components/api";
import { UserList } from "../lib/components/user-list";
import { IUser } from "../lib/types";

export default function Page(users:IUser[]) {
  const user=getAllUsers()
  return (
    <>
      <UserList users={users} />
    </>
  );
}
