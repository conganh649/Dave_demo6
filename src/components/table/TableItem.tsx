import React, { useState, FC, useEffect } from "react";
import { Button } from "semantic-ui-react";
import _ from "lodash";

import FlowerTable from "./FlowerTable";
import AddEditForm from "../form/AddEditForm";
import { Flower, initialFlowers, blankFlower, defaultNumber } from "./type";
import Header from "../header_footer/Header";

const TableItem: FC = () => {
  const [flowers, setFlowers] = useState(initialFlowers);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [flowersToShow, setFlowersToShow] = useState<Flower[]>(flowers);
  const [form, setForm] = useState<boolean>(false);
  const [passFlower, setPassFlower] = useState<Flower>(blankFlower);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [count, setCount] = useState<number>(defaultNumber);

  useEffect(() => {
    filterFlowers();
  }, [searchTerm]);

  useEffect(() => {
    setFlowersToShow(flowers);
    filterFlowers();
  }, [flowers]);

  const filterFlowers = () => {
    var result: Flower[] = flowers.filter((flower) => {
      return flower.title.includes(searchTerm);
    });
    setFlowersToShow(result);
  };

  const handleDeleteClick = (id: string) => {
    const index = flowers.findIndex((x) => x.id === id);
    if (index >= 0) {
      const newData = [...flowers];
      newData.splice(index, 1);
      setFlowers(newData);
    }
  };

  const handleUpdateClick = (flowerId: string) => {
    setForm(false);
    setIsUpdate(true);
    const updateFlower: Flower[] = flowers.filter((flower) => {
      return flower.id.includes(flowerId);
    });
    setPassFlower(updateFlower[0]);
    setForm(true);
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    closeForm();
    setPassFlower(blankFlower);
    setForm(true);
  };

  const closeForm = () => {
    setForm(false);
    setIsUpdate(false);
  };

  const handleAddFlower = (flower: Flower) => {
    var newData: Flower = {
      id: flower.id,
      title: flower.title,
      inStock: flower.inStock,
    };
    var newArr: Flower[] = [...flowers];
    newArr.push(newData);
    setFlowers(newArr);
    setForm(false);
    var newCount: number = count + 1;
    setCount(newCount);
  };

  const handleUpdateFlower = (flower: Flower) => {
    var index = _.findIndex(flowers, { id: flower.id });
    var newArr = [...flowers];
    newArr.splice(index, 1);
    newArr.splice(index, 0, flower);
    setFlowers(newArr);
    setForm(false);
  };

  return (
    <div>
      <h1
        style={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        Welcome to my flower Manager
      </h1>
      <Header />

      {form ? (
        <AddEditForm
          flower={passFlower}
          closeForm={closeForm}
          handleAddFlower={handleAddFlower}
          handleUpdateFlower={handleUpdateFlower}
          isUpdate={isUpdate}
          count={count}
        />
      ) : null}

      <div className="search-add">
        <div className="search-bar">
          <input
            type="text"
            placeholder="What would you like to search for?"
            onChange={handleSearch}
          ></input>
        </div>
        <div className="add-flower">
          <Button onClick={handleAddClick}>Add flower</Button>
        </div>
      </div>
      <FlowerTable
        flowers={flowersToShow}
        handleDeleteClick={handleDeleteClick}
        handleUpdateClick={handleUpdateClick}
      />
    </div>
  );
};

export default TableItem;
