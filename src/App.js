import logo from './logo.svg';
import './App.css';

// Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

// Examples:
// numThenChar([
//   

// ]) ➞ [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, "a"],
//   ["b", "c"], ["d", "e", "f"]
// ]

// numThenChar([
//   [1, 2, 4.4, "f", "a", "b"],
//   [0], [0.5, "d","X",3,"s"],
//   ["f", "e", 8],
//   ["p","Y","Z"],
//   [12,18]
// ]) ➞ [
//   [0, 0.5, 1, 2, 3, 4.4],
//   [8],
//   [12, 18, "X", "Y", "Z"],
//   ["a", "b", "d"],
//   ["e", "f", "f"],
//   ["p", "s"]
// ]

function numTheChar(arr){
  const flatArr = arr.reduce((acc,val) => acc.concat(val) , []);
  const numbers = flatArr.filter(item => typeof item === 'number').sort((a,b) => a - b);
  const letters = flatArr.filter(item => typeof item === 'string').sort()

  const result = arr.map(subArr => {
    const numSubArr = subArr.filter(item => typeof item === 'number').sort((a,b) => a - b);
    const charSubArr = subArr.filter(item => typeof item === 'string').sort()
    return numSubArr.concat(charSubArr)
  })
  return result
}

function App() {

const sortedArray = numTheChar([
  [1, 2, 3, 4, 5, 6],
  [7, 8, "a"],
  ["b", "c"], ["d", "e", "f"]
])

console.log(sortedArray)

  return (
    <div className="App">
     <h2>Sorted Array</h2>
     <ul>
       {sortedArray.map((subArr,index) => (
         <>
          <li key={index}>
            {subArr.map((item,subIndex) => (
              <>
                <span key={subIndex}>{item}</span>
              </>
            ) )}
          </li>
         </>
       ))}
     </ul>
    </div>
  );
}

export default App;
