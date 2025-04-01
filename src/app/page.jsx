"use client";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "Irakli",
    lastName: "Ambroladze",
    email: "ambroladzirakli@gmail.com",
  });
  return (
    <>
      <label>
        First name:{" "}
        <input
          className="border"
          value={form.firstName}
          onChange={(e) =>
            setForm((f) => {
              return { ...f, firstName: e.target.value };
            })
          }
        />
      </label>
      <br />
      <label>
        Last name:
        <input
          className="border"
          value={form.lastName}
          onChange={(e) =>
            setForm((f) => {
              return { ...f, lastName: e.target.value };
            })
          }
        />
      </label>
      <br />
      <label>
        Email:{" "}
        <input
          className="border"
          value={form.email}
          onChange={(e) =>
            setForm((f) => {
              return { ...f, email: e.target.value };
            })
          }
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}
