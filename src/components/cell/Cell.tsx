import React, {CSSProperties} from 'react';

import "./Cell.css";
import {lighten} from "@material-ui/core/styles";

interface CellProps {
  isSelectionCell?: boolean;
  column?: number;
}

interface CellState {
  color: string;
  isHovered: boolean;
}

export default class Cell extends React.Component<CellProps, CellState> {

  constructor(props: CellProps) {
    super(props);
    this.state = {color: "#fff", isHovered: false}
  }

  render() {
    const { isSelectionCell } = this.props;
    if (isSelectionCell) {
      const outsideBackground = "#ababab";
      const insideBackground = (this.state.isHovered) ? "#f00" : "#fff";
      return (
        <div className={"cell-outside"} style={{ background: outsideBackground }} onMouseEnter={this.handleSelectorHover} onMouseLeave={this.handleSelectorMouseLeave}>
          <div className={"cell-inside"} style={{ background: insideBackground}}>
          </div>
        </div>
      );
    }
    return (
      <div className={"cell-outside"}>
        <div className={"cell-inside"}>
        </div>
      </div>
    )
  }

  private handleSelectorHover = () => {
    this.setState({ isHovered: true });
  };

  private handleSelectorMouseLeave = () => {
    this.setState( {isHovered: false });
  };
}