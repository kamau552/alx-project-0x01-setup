export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

//'PostData and PostModal' interfaces
export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}
export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: UserProps) => void;
}