import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Wacth Product 01",
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300?grayscale",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 101,
      count: 1,
    },
    {
      _id: "2",
      title: "Wacth Product 02",
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300?grayscale",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 102,
      count: 1,
    },
    {
      _id: "3",
      title: "Wacth Product 03",
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300?grayscale",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 103,
      count: 1,
    },
    {
      _id: "4",
      title: "Wacth Product 04",
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300?grayscale",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 104,
      count: 1,
    },
    {
      _id: "5",
      title: "Wacth Product 05",
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300?grayscale",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 105,
      count: 1,
    },
    {
      _id: "6",
      title: "Wacth Product 06",
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300?grayscale",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 106,
      count: 1,
    },
  ]);
  return (
    <DataContext.Provider value={[products, setProducts]}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
