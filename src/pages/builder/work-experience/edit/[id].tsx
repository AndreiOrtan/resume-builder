import { useRouter } from "next/router";
export default function EditWorkExperience() {
  const router = useRouter();
  const { id } = router.query;
  return <div>form with id {id}</div>;
}
