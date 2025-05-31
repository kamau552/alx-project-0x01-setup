import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UserCardProps {
    posts: UserProps[];
}


const Users: React.FC<UserCardProps> = ({ posts }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {posts.map((user: UserProps, key: number) => (
          <UserCard
            key={key}
            name={user.name}
            id={user.id}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
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

export default Users;