import logo from "../assets/images/logo.svg";


export default function Logo() {
  return (
    <nav>
      <img src={logo} alt="jobster logo" className="logo" />
    </nav>
  );
}
