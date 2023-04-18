import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { WorkExperience } from "@/types";
import { Card } from "@mui/material";
import styles from "./Resume.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";

export default function Resume({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  const { data } = useContext(DataContext);
  console.log(data);

  return (
    <Card sx={{ width: 460, height: 600 }} className={styles.resume}>
      <div className={styles.resumeHeader}>
        <h1>{data.fullName}</h1>
        <p>{data.profession}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.leftBody}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          expedita sapiente nobis? Laboriosam rerum unde ex recusandae quidem
          maiores porro sapiente dolore quis. Sit maiores rem tenetur fuga
          corrupti repellendus?
        </div>
        <div className={styles.rightBody}>
          <section className={styles.contact}>
            <h4>Contact</h4>
            <div className={styles.contactData}>
              {data.email ? (
                <div>
                  <EmailOutlinedIcon sx={{ fontSize: 14 }} />
                  <p>{data.email}</p>
                </div>
              ) : null}

              {data.phone ? (
                <div>
                  <PhoneEnabledOutlinedIcon sx={{ fontSize: 14 }} />
                  <p>{data.phone}</p>
                </div>
              ) : null}
              {data.city || data.country ? (
                <div>
                  <FmdGoodOutlinedIcon sx={{ fontSize: 14 }} />
                  <p>
                    {data.city}
                    {data.country ? `, ${data.country}` : null}
                  </p>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </Card>
  );
}
