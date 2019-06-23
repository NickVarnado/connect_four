import React from 'react';
import {OrderedSet} from "immutable";
import Column from "../column/Column";

import "./Board.scss";

interface BoardProps {

}

interface BoardState {
  columns: OrderedSet<JSX.Element>;
}

export class Board extends React.Component<BoardProps, BoardState> {

  constructor(props: BoardProps) {
    super(props);
    let columns: OrderedSet<JSX.Element> = OrderedSet();
    for (let i = 0; i < 7; i++) {
      columns = columns.add((<Column/>));
    }
    this.state = { columns };
  }

  render() {
    return (
      <div className={"board"}>
        {this.state.columns}
      </div>
    )
  }
}