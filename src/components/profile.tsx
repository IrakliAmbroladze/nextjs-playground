import React, { ReactNode, JSX } from "react";
import Panel from "@/components/panel";
import Image from "next/image";
import { Person } from "@/types/Person";
import getImageUrl from "@/utils/get-image";

interface ProfileProps {
  person: Person;
}

const Header = ({ name }: { name: string }): JSX.Element => {
  return <h1>{name}</h1>;
};
const Avatar = ({ person }: { person: Person }): ReactNode => {
  return (
    <Image
      className="m-1.5 rounded-full"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
};
const Profile = ({ person }: ProfileProps) => {
  return (
    <Panel>
      <Header name={person.name} />
      <Avatar person={person} />
    </Panel>
  );
};

export default Profile;
