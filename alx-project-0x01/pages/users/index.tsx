import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import React from "react";
import { useState } from "react";

interface UserCardProps {
  posts: UserProps[];
}

const Users: React.FC<UserCardProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserProps[]>(posts);

  const openModal = () => { setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); };

  const handleAddUser = (newUser: UserProps) => {
  setUserList([...userList, newUser]);
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {userList.map((user: UserProps, key: number) => (
          <UserCard
            key={key}
            name={user.name}
            id={user.id}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
      </div>

      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-semibold">User Content</h1>
        <button
          onClick={openModal}
          className="bg-blue-700 px-4 py-2 rounded-full text-white"
        >
          Add User
        </button>
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddUser={(newUser: UserProps) => {
          handleAddUser(newUser);
          closeModal();
        }}
      />
    </>
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