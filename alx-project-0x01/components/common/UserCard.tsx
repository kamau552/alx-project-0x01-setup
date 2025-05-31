
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
    name, 
    id, 
    username,
    email, 
    phone, 
    website, 
    company,
}) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-teal-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-black">{username}</h2>
      </div>
      <div className="flex flex-col gap-2 text-white text-sm">
        <span>Name: {name}</span>
        <span>Post ID: {id}</span>
        <span>Username: {username}</span>
        <span>Email:{email}</span>
        <span>Phone: {phone}</span>
        <span>Website: {website}</span>
        <span>Company: {company?.name}</span>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default UserCard;