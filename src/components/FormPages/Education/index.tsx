import { FormPages, FormData } from "@/types";
export default function Education({
  updateField,
  university,
}: FormPages & FormData) {
  return (
    <div>
      <label>University</label>
      <input
        type="text"
        placeholder="University"
        value={university}
        onChange={(e) => updateField({ university: e.target.value })}
      />
    </div>
  );
}
