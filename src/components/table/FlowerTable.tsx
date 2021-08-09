import React, { FC } from "react";
import { Button } from "semantic-ui-react";

import { Flower } from "./type";

interface FlowerProps {
  flowers: Flower[];
  handleDeleteClick(arg: string): void;
  handleUpdateClick(arg: string): void;
}

const FlowerTable: FC<FlowerProps> = (props: FlowerProps) => {
  return (
    <div>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>In stock?</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        {props.flowers.map((flower) => (
          <tbody key={flower.id}>
            <tr key={flower.id}>
              <td>{flower.id}</td>
              <td>{flower.title}</td>
              <td>
                <h3 className={"" + (flower.inStock ? "yes" : "no")}>
                  {flower.inStock ? "Yes" : "No"}
                </h3>
              </td>
              <td>
                <Button onClick={() => props.handleDeleteClick(flower.id)}>
                  Delete
                </Button>
              </td>
              <td>
                <Button onClick={() => props.handleUpdateClick(flower.id)}>
                  Update
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default FlowerTable;
