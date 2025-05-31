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
    <div className="max-w-sm mx-auto my-6 p-6 bg-amber-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-black">{username}</h2>
      </div>
      <div className="flex flex-col gap-2 text-gray-700 text-sm">
        <span>Name: Leanne Graham {name}</span>
        <span>Post ID: 1 {id}</span>
        <span>Username: Bret  {username}</span>
        <span>Email: Sincere@april.biz {email}</span>
        <span>Phone:1-770-736-8031 x56442  {phone}</span>
        <span>Website: hildegard.org {website}</span>
        <span>Company: Romaguera-Crona {company?.name}</span>
      </div>
      <div className="grid grid-cols-3 gap-2 ">
          {
            username?.map((user: UserProps, key: number) => (
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
            ))
          }
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