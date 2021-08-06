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
    title: "Sunflower",
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

const blankFlower: Flower = {
  id: "",
  title: "",
  inStock: true,
};

export { initialFlowers, blankFlower };
export type { Flower };
