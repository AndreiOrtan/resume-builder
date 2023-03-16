import Link from "next/link";
import Navbar from "../Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="half-container">{children}</div>
    </>
  );
}
