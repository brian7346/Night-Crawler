import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const SECTIONS = [
  {
    title: "Hats",
    imageUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    id: 1,
  },
  {
    title: " Jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    id: 2,
  },
  {
    title: "Sneakers1",
    imageUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    id: 3,
  },
  {
    title: " Mens",
    imageUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    id: 3,
    size: "large",
  },
  {
    title: " Womans",
    imageUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    id: 3,
    size: "large",
  },
];

const Directory = () => {
  const [sections] = useState(SECTIONS);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
