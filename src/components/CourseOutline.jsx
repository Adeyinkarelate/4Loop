import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CourseOutline = ({ modules = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-6">
      {modules.length === 0 && (
        <p className="text-white/80">No modules available.</p>
      )}

      {modules.map((module, index) => (
        <div
          key={index}
          className="bg-white/5 rounded-xl p-5 border border-white/10 shadow-md"
        >
          {/* Module Header */}
          <button
            onClick={() => toggle(index)}
            className="flex justify-between w-full text-left text-xl font-semibold text-white"
          >
            {module.title || "Untitled Module"}

            {openIndex === index ? (
              <ChevronUp className="text-purple-400" />
            ) : (
              <ChevronDown className="text-purple-400" />
            )}
          </button>

          {/* Dropdown Content */}
          {openIndex === index && (
            <div className="mt-4 space-y-4">
              {(module.submodules || []).map((sub, i) => (
                <div key={i} className="pl-4">
                  <h3 className="text-lg font-medium text-purple-300">
                    {sub.name || "Unnamed Submodule"}
                  </h3>

                  <ul className="list-disc list-inside text-white/90 mt-2 space-y-1">
                    {(sub.items || []).map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseOutline;
