import React from "react";
import Layout from "../app/Layot";
import ChromeDinoGame from "react-chrome-dino";

function NotFound() {
  const style = { width: "50vw", height: "80vh", justifyContent: "center", paddingTop: "300px" };
  return (
    <>
      <Layout />
      <h1>Error 404</h1>
      <div>Not Found</div>
      <div>
      <div style={style} >
      <ChromeDinoGame />
      </div>
</div>
    </>
  );
}

export default NotFound;
