import React from "react";

export default function Button({ children, isPrimary, href }: any) {
  const buttonStyle = isPrimary
    ? "bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700"
    : "   bg-red-500 px-4 py-1 font-semibold rounded-xl flex items-center cursor-pointer hover:bg-red-600";
  return href ? (
    <a href={href} className={buttonStyle}>
      {children}
    </a>
  ) : (
    <button className={buttonStyle}>{children}</button>
  );
}
