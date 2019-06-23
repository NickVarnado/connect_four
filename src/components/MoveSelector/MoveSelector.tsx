import React, {CSSProperties} from 'react';
import {OrderedSet} from "immutable";
import Cell from "../cell/Cell";

interface MoveSelectorProps {

}

interface MoveSelectorState {
  cells: OrderedSet<JSX.Element>;
}

const selectionRowStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row"
};

export class MoveSelector extends React.Component<MoveSelectorProps, MoveSelectorState> {

  constructor(props: MoveSelectorProps) {
    super(props);
    let cells: OrderedSet<JSX.Element> = OrderedSet<JSX.Element>();
    for (let i = 0; i < 7; i++) {
      const cell = (
        <Cell
          isSelectionCell={true}
          column={i} />
      );
      cells = cells.add(cell);
    }
    this.state = {cells};
  }

  render() {
    return (
      <div style={selectionRowStyle}>
        {this.state.cells}
      </div>
    )
  }
}