import Link from "next/link";
import { Button } from "@mui/material";
import styles from "./HomeContent.module.css";
import TestComponent from "../Layouts/FormLayout/FormLayout";

const HomeContent = () => {
  return (
    <div className={styles.homeModule}>
      <Link href="/builder">
        <Button variant="contained">Start building your resume</Button>
      </Link>
      {/* <TestComponent>
        <div>
          <p>Salut children</p>
        </div>
        <div>Another children</div>
      </TestComponent> */}
    </div>
  );
};
export default HomeContent;
