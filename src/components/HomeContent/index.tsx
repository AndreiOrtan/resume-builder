import Link from "next/link";
import { Button } from "@mui/material";
import styles from "./HomeContent.module.css";
import { useEffect } from "react";

const HomeContent = () => {
  // useEffect(() => {
  //   localStorage.removeItem("FORM_PAGE_INDEX");
  // }, []);
  return (
    <div className={styles.homeModule}>
      <Link href="/builder">
        <Button variant="contained">Start building your resume</Button>
      </Link>
    </div>
  );
};
export default HomeContent;
