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
  console.log(dayjs("2023-04-01T09:21:07.795Z").month());
  console.log(workExperiences);

  return (
    <Card sx={{ width: 460, height: 600 }} className={styles.resume}>
      <div className={styles.resumeHeader}>
        <h1>{data.fullName}</h1>
        <p>{data.profession}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.leftBody}>
          <p>{data.description}</p>
          <div className="workExperience">
            <h2>Employment</h2>
            <div className="experiencesContainer">
              {workExperiences.map((experience) => {
                return (
                  <div key={experience.id}>
                    <p>{experience.jobTitle}</p>
                    <p>{experience.company}</p>
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
                  </div>
                );
              })}
            </div>
          </div>
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
