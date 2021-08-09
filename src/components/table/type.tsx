type Flower = {
  id: string;
  title: string;
  inStock: boolean;
};

const initialFlowers: Flower[] = [
  {
    id: "flower1",
    title: "Sunflower",
    inStock: false,
  },
  {
    id: "flower2",
    title: "Sunflower",
    inStock: true,
  },
  {
    id: "flower3",
    title: "Daisy",
    inStock: true,
  },
  {
    id: "flower4",
    title: "Orchid",
    inStock: false,
  },
];

const blankFlower: Flower = {
  id: "",
  title: "",
  inStock: true,
};

const defaultNumber: number = 4;

export { initialFlowers, blankFlower, defaultNumber };
export type { Flower };
