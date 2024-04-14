import { createUseStyles } from "react-jss";
import style from "./Style";
import Header from "./Header";
import SearchResult from "./SearchResults";

function App() {
  const classes = createUseStyles(style)();
  return (
    <div className={classes.mainBody}>
      <Header />
      <h1>Recipe Viewer</h1>
      <SearchResult />
    </div>
  );
}

export default App;
