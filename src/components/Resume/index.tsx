import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { FormData } from "@/types";

export default function Resume() {
  const { data } = useContext(DataContext);
  console.log();
  const renderedData = Object.keys(data).map((field) => {
    return <h1 key={field}>{data[field as keyof FormData]}</h1>;
  });
  return <div className="resume">{renderedData}</div>;
}
