import React from "react";
import { JSX, ReactNode, useState } from "react";

interface PanelProps {
  children: ReactNode;
}

const Panel = ({ children }: PanelProps): JSX.Element => {
  const [open, setOpen] = useState(true);

  return (
    <section className="border border-[#aaa] rounded-md w-[200px] mt-5 p-2.5">
      <button onClick={() => setOpen((o) => !o)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </section>
  );
};
export default Panel;
