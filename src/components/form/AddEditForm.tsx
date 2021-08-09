import React, { FC, useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

import { Flower, blankFlower } from "../table/type";

interface FlowerProps {
  flower: Flower;
  handleAddFlower(arg: Flower): void;
  handleUpdateFlower(arg: Flower): void;
  closeForm: () => void;
  isUpdate: boolean;
  count: number;
}

const AddEditForm: FC<FlowerProps> = (props: FlowerProps) => {
  const [flowerID, setFlowerID] = useState<string>(props.flower.id);
  const [flowerTitle, setFlowerTitle] = useState<string>(props.flower.title);
  const [flowerStock, setFlowerStock] = useState<boolean>(props.flower.inStock);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!props.isUpdate) {
      setFlowerID(blankFlower.id);
      setFlowerTitle(blankFlower.title);
      setFlowerStock(blankFlower.inStock);
    } else {
      setFlowerID(props.flower.id);
      setFlowerTitle(props.flower.title);
      setFlowerStock(props.flower.inStock);
    }
  }, [props.isUpdate, props.flower.id]);

  const validateForm = (element: string) => {
    const valid: boolean = /^([a-zA-Z]+)$/.test(element);
    setErrorMessage(
      valid
        ? ""
        : "Must contain 2+ characters, no digits, no special characters, no white spaces"
    );
    return valid;
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateForm(flowerTitle);
    setFlowerTitle(event.target.value);
  };

  const handleStockChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value === "Yes" ? setFlowerStock(true) : setFlowerStock(false);
    console.log(flowerStock);
  };

  const handleAddButton = (event: any) => {
    event.preventDefault();
    var valid: boolean = validateForm(flowerTitle);
    console.log(valid);
    if (valid) {
      var newData: Flower = {
        id: "flower" + (props.count + 1).toString(),
        title: flowerTitle,
        inStock: flowerStock,
      };
      props.handleAddFlower(newData);
    }
  };

  const handleUpdateButton = (event: any) => {
    event.preventDefault();
    var valid: boolean = validateForm(flowerTitle);
    console.log(valid);
    if (valid) {
      var newData: Flower = {
        id: flowerID,
        title: flowerTitle,
        inStock: flowerStock,
      };
      props.handleUpdateFlower(newData);
    }
  };

  const handleCancelButton = () => {
    props.closeForm();
  };
  return (
    <div>
      <div className="form-style-10">
        <h1>{props.isUpdate ? "Update flower" : "Add new flower"}</h1>
        <form onSubmit={handleUpdateButton}>
          <div className="inner-wrap">
            <label>
              Flower ID{" "}
              <input
                value={
                  props.isUpdate
                    ? flowerID
                    : "flower" + (props.count + 1).toString()
                }
                type="text"
                placeholder="Type flower ID"
                readOnly
                disabled
              />
            </label>
            <label>
              Flower Title
              <input
                onChange={handleTitleChange}
                value={flowerTitle}
                type="text"
                placeholder="Type flower Name"
              />
              {errorMessage ? (
                <div className="error-label">{errorMessage}</div>
              ) : null}
            </label>
            <label>
              In stock?
              <select
                onChange={handleStockChange}
                name="In stock?"
                placeholder="Select stock condition"
                defaultValue={flowerStock ? "Yes" : "No"}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            {props.isUpdate ? (
              <Button onClick={handleUpdateButton}>Update flower</Button>
            ) : (
              <Button onClick={handleAddButton}>Add flower</Button>
            )}
            <Button onClick={handleCancelButton}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditForm;
