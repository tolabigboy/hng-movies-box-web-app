import React from "react";
import Nav from "./Nav";
import HeroPage from "./HeroPage";
import Modal from "./Modal";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const handleClickOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="relative">
      <Nav
        handleClickOpen={handleClickOpen}
        title={title}
        setTitle={setTitle}
      />
      <HeroPage />
      {isOpen && <Modal title={title} />}
    </header>
  );
};

export default Header;
