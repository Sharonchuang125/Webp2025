import logo from './logo.svg';
import './App.css';
// import MultiButton from './cgu multiButton'
import changeText from './cgu multiButton'
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <div>Hello CGU</div>
      <div>
      { MultiButton(10) }
      </div>
    </div>
  );
}


const MultiButton = (num) => {
  let output = [];
  for (let i = 1; i <= num; ++i) {
    output.push(
      <Button key={i} variant="contained" color="primary" onClick={changeText}>
        第{i}個按鍵
      </Button>
    );
  }
  return output;
};


// const MultiButton=(num)=>{
//   var output=[];
//   output.push(
//     <IconButton color='primary' aria-label='add to shopping cart'>
//     <AddShoppingCartIcon /></IconButton>)
//  output.push(<IconButton color='primary' aria-label='delete'>
//  <DeleteIcon /></IconButton>)
//  output.push(<IconButton color='primary' aria-label='add an alarm'>
//  <AlarmIcon /></IconButton>)
//  return output;
// }

export default App;
