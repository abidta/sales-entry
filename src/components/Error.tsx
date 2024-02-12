import { useState } from "react";

function Error({ message }: { message: string }) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        className="flex bg-white  absolute items-end  top-[20%] right-0 w-max "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="red"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12" y2="16" />
        </svg>

        {hover && <>{message}</>}
      </div>
    </>
  );
}

export default Error;
