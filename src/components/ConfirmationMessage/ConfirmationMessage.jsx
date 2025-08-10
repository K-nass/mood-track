import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ConfirmationMessage() {
  return (
    <div className="flex items-center justify-center gap-3 p-3">
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="text-3xl text-blue-500"
      />
      <p className="text-2xl font-light text-blue-950 opacity-70">
        Logged mood successfully!
      </p>
    </div>
  );
}
