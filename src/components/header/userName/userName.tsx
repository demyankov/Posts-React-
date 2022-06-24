import { Name } from "./userNameStyles";

function UserName({ username }: { username: string }) {
  return <Name>{username}</Name>;
}

export default UserName;
