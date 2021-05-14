import Link from "next/link";
import Spacer from "./Spacer";

const header = {
  position: "fixed",
  padding: "1rem",
  top: 0,
  left: 0,
  width: "100%",
  height: "1rem",
  backgroundColor: "#dcdcde",
  color: "white",

  display: 'flex',
  justifyContent: 'space-between',

};

const linkStyle = {
  marginRight: 15,
  fontFamily: "Spartan",
  textDecoration: "none",
  color: "black",
};

const homelink = {
  marginRight: 30,
    fontFamily: "Spartan",
  textDecoration: "none",
  color: "black",
};

const footer = {
  position: "fixed",
  padding: "1rem",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "1rem",
  backgroundColor: "#dcdcde",
  color: "white",
  display: "flex",
  justifyContent: "center",
};

const Header = () => (
  <div style={header}>
    <div>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    
      <Link href="/resume">
        <a style={linkStyle}>Resume</a>
      </Link>

      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
    </div>

    <div>
      <Link href="/index">
        <a style={homelink}>Home</a>
      </Link>
    </div>
    
  </div>
);

const Layout = () => {
  return (
    <>
      {" "}
      <Header /> <Footer />
    </>
  );
};

const Footer = () => ( 
  <div style={footer}>
    <a style={linkStyle} href="https://www.linkedin.com/in/macarojasb/">
      {" "}
      LinkedIn{" "}
    </a>
    <a style={linkStyle} href="https://www.instagram.com/macarojasb/">
      {" "}
      Instagram{" "}
    </a>
  </div>
);

export default Layout;
