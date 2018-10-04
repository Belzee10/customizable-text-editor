import React from "react";
import { Value } from "slate";
import { CodeNode, BoldMark } from "./components/nodeTypes";

export const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "A line of text in a paragraph."
              }
            ]
          }
        ]
      }
    ]
  }
});

export const renderNode = props => {
  switch (props.node.type) {
    case "code":
      return <CodeNode {...props} />;
    default:
      return;
  }
};

export const renderMark = props => {
  switch (props.mark.type) {
    case "bold":
      return <BoldMark {...props} />;
    default:
      return;
  }
};
