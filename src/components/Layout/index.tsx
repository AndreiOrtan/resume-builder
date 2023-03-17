import Link from "next/link";
import { FC, ReactNode } from "react";
import Navbar from "../Navbar";
import Resume from "../Resume";

interface LayoutProps {
  children: ReactNode;
}

const HomeLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content-container">{children}</div>
    </>
  );
};
export default HomeLayout;
