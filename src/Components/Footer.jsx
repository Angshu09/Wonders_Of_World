import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-2 z-10 rounded-full text-[11px] text-center border dark:border-none bg-[white] dark:bg-gray-700 dark:text-white shadow-lg fixed bottom-4 left-1/2 -translate-x-1/2 w-[170px]">
      <p>
        Developed by{" "}
        <Link
          to="https://github.com/Angshu09"
          target="_blank"
          className="text-blue-600 dark:text-blue-300 underline"
        >
          Angshu Das
        </Link>
      </p>
    </div>
  );
}
