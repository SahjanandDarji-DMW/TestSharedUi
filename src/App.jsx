import React, { useState } from "react";
import { DDropDown } from "./components";
s;
const App = () => {
  const [selected, setSelected] = useState(undefined);

  return (
    <div className="w-[70%] p-10">
      <DDropDown
        label="Technology"
        options={[
          { value: "html", label: "HTML" },
          { value: "css", label: "CSS" },
          { value: "js", label: "JavaScript" },
          { value: "js", label: "JavaScript" },
          { value: "js", label: "JavaScript" },
          { value: "js", label: "JavaScript" },
          { value: "js", label: "JavaScript" },
        ]}
        placeholder="Choose tech..."
        className="w-full bg-gray-[#F2F2F2] "
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App;
