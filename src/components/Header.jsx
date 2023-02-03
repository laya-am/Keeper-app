import React from "react";
import EventNoteIcon from "@material-ui/icons/EventNote";

function Header() {
  return (
    <header>
      <h1>
        <EventNoteIcon fontSize="large" />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
