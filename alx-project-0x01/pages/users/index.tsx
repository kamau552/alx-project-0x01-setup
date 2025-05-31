import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import React from "react";

interface UserCardProps {
  posts: UserProps[];
}

const Users: React.FC<UserCardProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
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
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
