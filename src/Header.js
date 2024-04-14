import { createUseStyles } from "react-jss";
import { useState } from "react";
import style from "./Style";

function Header() {
  const classes = createUseStyles(style)();
  const [dataBase, setDataBase] = useState({
    status: false,
    size: 0,
  });
  function populateDB() {
    console.log("Button clicked!");
    try {
      fetch("http://localhost:3000/populateDB", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setDataBase({
              status: true,
              size: data.amount,
            });
            console.log(data.amount);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className={classes.mainHeader}>
      {dataBase.status ? (
        <p className={classes.successMessage}>
          {dataBase.size} recipe(s) successfully added to the database
        </p>
      ) : (
        <a className={classes.headerItem} onClick={populateDB}>
          Populate DB
        </a>
      )}
    </div>
  );
}

export default Header;
