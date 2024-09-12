import React from "react";
import { Container, RowContainer, Box, List, ListItem } from "./styled";
import Photo from "./photo.png";
function App() {
  const initialData = [
    {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
      },
      children: ["Anna", "Peter"],
      photo: Photo,
    },
    {
      name: "Jane",
      age: 25,
      address: {
        street: "456 Park Ave",
        city: "San Francisco",
      },
      children: ["John"],
      photo: Photo,
    },
    {
      name: "Tom",
      age: 35,
      address: {
        street: "789 Broadway",
        city: "Boston",
      },
      children: ["Jane", "John"],
    },
    {
      name: "juan",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
      },
      children: ["Anna", "Peter"],
    },
    {
      name: "odin",
      age: 25,
      address: {
        street: "456 Park Ave",
        city: "San Francisco",
      },
      children: ["John"],
      photo: Photo,
    },
    {
      name: "edgar",
      age: 35,
      address: {
        street: "789 Broadway",
        city: "Boston",
      },
      children: ["Jane", "John"],
    },
  ];

  const matrix = () => {
    let chunks = [];
    for (let i = 0; i < initialData.length; i += 3) {
      chunks.push(initialData.slice(i, i + 3));
    }
    return chunks;
  };

  const grids = matrix().map((row, index) => {
    return (
      <RowContainer key={index}>
        {row.map((item, index) => {
          return (
            <Box key={index}>
              <img src={item.photo} alt="profile" />
              <List>
                <ListItem>Name: {item.name}</ListItem>
                <ListItem>Age: {item.age}</ListItem>
                <ListItem>
                  Address: {item.address.street}, {item.address.city}
                </ListItem>
                <ListItem>Children: {item.children.join(", ")}</ListItem>
              </List>
            </Box>
          );
        })}
      </RowContainer>
    );
  });

  return <Container>{grids}</Container>;
}

export default App;
