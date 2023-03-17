import { FormPages, FormData } from "@/types";
export default function ContactForm({
  updateField,
  firstName,
  lastName,
}: FormPages & FormData) {
  return (
    <div>
      <label>First Name:</label>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => updateField({ firstName: e.target.value })}
      />
      <label>Last Name:</label>
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => updateField({ lastName: e.target.value })}
      />
    </div>
  );
}
