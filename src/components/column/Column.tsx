import React from 'react';
import {OrderedSet} from 'immutable';
import Cell from '../cell/Cell';

import "./Column.css";

interface ColumnProps {

}

interface ColumnState {
  cells: OrderedSet<JSX.Element>;
}

export default class Column extends React.Component<ColumnProps, ColumnState> {

  constructor(props: ColumnProps) {
    super(props);
    let cells: OrderedSet<JSX.Element> = OrderedSet<JSX.Element>();
    for (let i = 0; i < 6; i++) {
      cells = cells.add((<Cell/>));
    }
    this.state = {cells};
  }

  render() {
    return (
      <div className={"column"}>
        {this.state.cells}
      </div>
    )
  }
}