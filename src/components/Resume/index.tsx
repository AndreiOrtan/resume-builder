import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { WorkExperience } from "@/types";
import { Card } from "@mui/material";
import styles from "./Resume.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import dayjs from "dayjs";

const monthAbbreviations = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Resume({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  const { data } = useContext(DataContext);

  return (
    <Card sx={{ width: 460, height: 600 }} className={styles.resume}>
      <div className={styles.resumeHeader}>
        <h1 className="text-3xl font-semibold">{data.fullName}</h1>
        <p>{data.profession}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.leftBody}>
          <p>{data.description}</p>
          <div className="workExperience">
            <h2 className="text-xl font-medium">Employment</h2>
            <main className={styles.experiencesContainer}>
              {workExperiences.map((experience) => {
                return (
                  <section key={experience.id} className={styles.container}>
                    <div className="names">
                      <p>{experience.jobTitle}</p>
                      <p>{experience.company}</p>
                    </div>
                    <div className={styles.period}>
                      <p>
                        {
                          monthAbbreviations[
                            dayjs(experience.startDate).month()
                          ]
                        }
                        , <span>{dayjs(experience.startDate).year()}</span>
                      </p>
                      <span>{" - "}</span>
                      {experience.untilPresent ? (
                        <p>{" Present"}</p>
                      ) : (
                        <p>
                          {
                            monthAbbreviations[
                              dayjs(experience.endDate).month()
                            ]
                          }
                          {", "}
                          <span>{dayjs(experience.endDate).year()}</span>
                        </p>
                      )}
                    </div>
                  </section>
                );
              })}
            </main>
          </div>
        </div>
        <div className={styles.rightBody}>
          <section className={styles.contact}>
            <h4 className="text-xl font-medium">Contact</h4>
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
