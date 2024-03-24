import { createUseStyles } from 'react-jss';
import style from './Style';

function App() {
  const classes = createUseStyles(style)();
    return (
        <div className={classes.mainHeader}>
            <a className={classes.headerItem}>
                Populate DB
            </a>
        </div>
    );
}

export default App;
