import Link from "next/link";
import { useRouter } from "next/router";

export default function WorkExperience() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <input type="text" placeholder={`Work experience`} />
      <Link href="/education">Next</Link>
    </div>
  );
}
