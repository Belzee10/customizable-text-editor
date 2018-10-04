import React, { Component } from "react";
import { initialValue, renderNode, renderMark } from "../textEditorConfig";
import { Editor } from "slate-react";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: initialValue
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange({ value }) {
    this.setState({ value });
  }

  onKeyDown(event, change) {
    if (!event.ctrlKey) return;
    switch (event.key) {
      case "b":
        event.preventDefault();
        change.toggleMark("bold");
        return true;
      case "-":
        event.preventDefault();
        const isCode = change.value.blocks.some(block => block.type === "code");
        change.setBlocks(isCode ? "paragraph" : "code");
        return true;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="editor">
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderNode={renderNode}
          renderMark={renderMark}
        />
      </div>
    );
  }
}

export default TextEditor;
