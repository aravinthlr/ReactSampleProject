import logo from './logo.svg';
import './App.css';
import { useEffect , useState} from 'react';
import url from './server';
import Header from './components/Header/Header';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InsetDividers from './components/Divider/Divider';
import copyTextToClipboard from './utils/copyTextToClipboard';
console.log(process.env)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    cursor : "pointer",
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(32),
    },
  },
}));

function App() {
  const classes = useStyles();
const [dbData ,setDBData] = useState(null);
  useEffect(() => {
    fetch(url).then(response => response.json())
    .then(data => setDBData(data));
    // Overwrite what is being copied to the clipboard.
document.addEventListener('copy', function(e) {
  // e.clipboardData is initially empty, but we can set it to the
  // data that we want copied onto the clipboard.
  e.clipboardData.setData('text/plain', 'Hello, world!');

  // This is necessary to prevent the current document selection from
  // being written to the clipboard.
  e.preventDefault();
});
  },[]);

  return (
    <div className="App">
      <Header></Header>{console.log(dbData)}
      {/* <iframe src="https://www.goldpriceindia.com/wmshare-wlifop-002.php" style={{position:"fixed",top:0, left:0, bottom:0, right:0, width:"100%", height:"100%", border:"none", margin:0, padding:0, overflow:"hidden", zIndex:999999}}></iframe> */}
      {dbData && dbData.samsung && dbData.samsung.length && <div className="paperContainer">{dbData.samsung.map(data => <span className={classes.root} onClick={() => document.execCommand('copy')}><Paper elevation={3} children={<PaperContent data={data}/>}/></span>)}</div>}
    </div>
  );
}

function PaperContent({data}) {
  return <InsetDividers data={data}/>
  // return (<div>
  //   <div>{data.portal}</div>
  //   <div>{data.username}</div>
  //   <div>{data.password}</div>
  // </div>)
}

export default App;
