import React, { useState } from "react";
import { Button } from "semantic-ui-react";

type Flower = {
  id: string;
  title: string;
  inStock: boolean;
};

const initialFlowers: Flower[] = [
  {
    id: "flower01",
    title: "Sunflower",
    inStock: false,
  },
  {
    id: "flower02",
    title: "Rose",
    inStock: true,
  },
  {
    id: "flower03",
    title: "Daisy",
    inStock: true,
  },
  {
    id: "flower04",
    title: "Orchid",
    inStock: false,
  },
];

const TableItem = () => {
  const [flowers, setFlowers] = useState(initialFlowers);

  const handleStockClick = (id: string) => {
    setFlowers((prevFlowers) =>
      prevFlowers.map((flower) => {
        return flower.id === id
          ? { ...flower, inStock: !flower.inStock }
          : flower;
      })
    );
  };

  const handleDeleteClick = (id: string) => {
    const index = flowers.findIndex((x) => x.id === id);
    if (index >= 0) {
      const newData = [...flowers];
      newData.splice(index, 1);
      setFlowers(newData);
    }
  };

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
        {flowers.map((flower) => (
          <tbody>
            <tr key={flower.id}>
              <td>{flower.id}</td>
              <td>{flower.title}</td>
              <td>
                <Button
                  className={"" + (flower.inStock ? "yes" : "no")}
                  onClick={() => handleStockClick(flower.id)}
                >
                  {flower.inStock ? "Yes" : "No"}
                </Button>
              </td>
              <td>
                <Button onClick={() => handleDeleteClick(flower.id)}>
                  Delete
                </Button>
              </td>
              <td>
                <Button>Update</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TableItem;
