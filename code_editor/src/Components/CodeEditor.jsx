import React, { useState } from "react";
import { Highlight, defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/github";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };
  return (
    <>
      <div
        className="grid-container"
        style={{
          fontFamily: "monospace",
          fontSize: 16,
          width: "80%",
          margin: "auto",
        }}
      >
        <div>
          <h4 style={{ textAlign: "center" }}>simple Text</h4>
          <textarea
            value={code}
            onChange={handleChange}
            style={{
              fontFamily: "inherit",
              fontSize: "inherit",
              border: "1px solid #ccc",
              width: "100%",
              minHeight: "300px",
              padding: "10px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <h4 style={{ textAlign: "center" }}>Highlighted Text</h4>
          <Highlight code={code} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className}
                style={{ ...style, padding: "10px", overflowX: "auto" }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
