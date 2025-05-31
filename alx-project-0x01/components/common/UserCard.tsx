import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, username }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        {/* You can add more user details here if needed */}
      </div>
      {/* Add more user info as needed */}
      <div className="mt-4 flex items-center justify-between text-sm text-black">
        <span>Username: {username}</span>
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;