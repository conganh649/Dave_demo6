import React, { useState, FC, useEffect } from "react";
import { Button } from "semantic-ui-react";
import _ from "lodash";

import FlowerTable from "./FlowerTable";
import AddEditForm from "../form/AddEditForm";
import { Flower, initialFlowers, blankFlower } from "./type";

const TableItem: FC = () => {
  const [flowers, setFlowers] = useState(initialFlowers);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [flowersToShow, setFlowersToShow] = useState<Flower[]>(flowers);
  const [form, setForm] = useState<boolean>(false);
  const [passFlower, setPassFlower] = useState<Flower>(blankFlower);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

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
    setIsUpdate(true);
    setForm(true);
    const updateFlower: Flower[] = flowers.filter((flower) => {
      return flower.id.includes(flowerId);
    });
    setPassFlower(updateFlower[0]);
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  function showForm() {
    setForm(true);
  }

  const closeForm = () => {
    setForm(false);
    setPassFlower(blankFlower);
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
    closeForm();
  };

  const handleUpdateFlower = (flower: Flower) => {
    var index = _.findIndex(flowers, { id: flower.id });
    var newArr = [...flowers];
    newArr.splice(index, 1);
    newArr.splice(index, 0, flower);
    setFlowers(newArr);
    closeForm();
  };

  return (
    <div>
      {form ? (
        <AddEditForm
          flower={passFlower}
          closeForm={closeForm}
          handleAddFlower={handleAddFlower}
          handleUpdateFlower={handleUpdateFlower}
          isUpdate={isUpdate}
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
          <Button onClick={showForm}>Add flower</Button>
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
