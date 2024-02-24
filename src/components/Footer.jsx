import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#777",
          textAlign: "center",
          height: "80px",
          padding: "15px",
        }}
      >
        <FaFacebook size={60} style={{ margin: "5px" }} />
        <FaTwitter size={60} style={{  margin: "5px" }} />
        <IoLogoWhatsapp size={60} style={{  margin: "5px" }} />
      </div>
    </>
  );
}
