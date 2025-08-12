import React from "react";
import Logo from "../Logo/Logo";

export default function NavPage() {
  return (
    <nav>
      <ul className="flex justify-between">
        <li className="flex items-center text-2xl font-bold">
          <Logo />
        </li>
        <li>profile</li>
      </ul>
    </nav>
  );
}
