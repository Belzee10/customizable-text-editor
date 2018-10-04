import React from "react";

export const CodeNode = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export const BoldMark = props => {
  return <strong>{props.children}</strong>;
};
