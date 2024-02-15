import { useEffect, useState } from "react";

function ErrorToast({ message }: { message: string }) {
  const [trans, setTrans] = useState(false);
  useEffect(() => {
    setTimeout(() => {
        setTrans(true)
    }, 1);
    

    return () => {
      //setTrans(false);
    };
  }, []);

  return (
    <div className="flex justify-center items-center absolute bottom-4 w-full  ">
      <div
        className={`bg-rose-300 p-3 rounded-md ${
          trans && "-translate-y-20 duration-1000 transition"
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorToast;
