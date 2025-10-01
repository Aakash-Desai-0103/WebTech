import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// functional component, return JSX
function App(){
  return <>
    <h2>My First React App</h2>
    <h3>Welcome Shridevi</h3>
    <Student  name="John Smith" roll="10" marks="89"/>
    <Student />
    <hr />
    <Footer year="2025" company="PES University"></Footer>
  </>
}

function Student(props){
  return <div className='card'>
    <h4>Name: {props.name ? props.name : "demo"} </h4>
    <h5>Roll No: {props.roll ? props.roll : "0"}</h5>
    <h6>Marks: {props.marks ? props.marks : "--"} </h6>
  </div>
}

function Footer({year, company}){
  return <>
    <h6>&copy; Copyright {year}, {company}</h6>
  </>
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
