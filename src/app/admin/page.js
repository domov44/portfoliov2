'use client';

import Heading from "../components/ui/textual/Heading";
import Logout from "../utils/Logout";

export default function Page() {

  return (
    <div>
      <Heading level={1}>Bonjour admin</Heading>
      <Logout />
    </div>
  );
}
