import { Avatar } from "@mui/material";
import axios from "axios";

const TeamPage = async () =>{
  const response = await axios.get("https://dummyjson.com/users");
  const {users} = response.data;
  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      <div className="tw-flex tw-flex-col">
        {users.map((item) => (
          <div key={item.id} className="tw-flex tw-flex-row">
            <Avatar src={item.image} />
            <div className="tw-flex tw-flex-col">
              <p>{`${item.firstName} ${item.lastName}`}</p>
              <p>{item.company.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;