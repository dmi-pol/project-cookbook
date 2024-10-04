import Layout from "../app/Layot";
import ChromeDinoGame from "react-chrome-dino";

function NotFound() {
  const dinoStyle = { width: "50vw", height: "80vh", justifyContent: "center", paddingTop: "300px" };
  const pageStyle = { paddingTop: "5%" };

  return (
    <>
      <Layout />
      <h1 style={pageStyle} >Error 404</h1>
      <div style={pageStyle} >Not Found</div>
      <div>
      <div style={dinoStyle} >
      <ChromeDinoGame />
      </div>
</div>
    </>
  );
}

export default NotFound;
