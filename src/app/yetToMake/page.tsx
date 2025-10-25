// app/page.tsx
import React from "react";

const Page = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "2rem",
          fontFamily: "Martel Sans, sans-serif",
          padding: "20px 40px",
          borderRadius: "30px",
          border: "6px solid",
          borderImage: "linear-gradient(to right, rgb(152, 41, 108), rgb(200, 69, 69), rgb(152, 41, 108)) 1",
          textAlign: "center",
        }}
      >
        ᗯIᒪᒪ ᗷE ᒪIᐯE OᑎᑕE ᗪEᑭᒪOYEᗪ
      </h1>
    </div>
  );
};

export default Page;
