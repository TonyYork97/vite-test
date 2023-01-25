import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'

export const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  function one(func?: any) {
    return func ? func(1) : 1
  }
  function two(func?: any) {
    return func ? func(2) : 2
  }
  function three(func?: any) {
    return func ? func(3) : 3
  }

  function plus(a: any) {
    return (b: any) => a + b
  }
  function mult(a: any) {
    return (b: any) => a * b
  }

  // console.log(two(mult(three())));


  const concerts = {
    'Москва': new Date('2022-04-01'),
    'Казань': new Date('2023-07-02'),
    'Владивосток': new Date('2023-04-21'),
    'Калининград': new Date('2023-07-15'),
    'Омск': new Date('2023-04-18'),
    'Питер': new Date('2022-07-10'),
  }

  const concertsToArr = (obj: any) => {
    return Object.keys(obj)
      .filter(el => obj[el] > new Date())
      .sort((a, b) => obj[a] - obj[b])
    //   let cities = []
    //   for (let k in obj) {
    //     cities.push({ city: k, date: obj[k] })
    //   }
    //   let dateCities = cities
    //     .sort((a: any, b: any) => a.date - b.date)
    //     .filter(el => el.date > new Date())
    //     .map(el => el.city)
    //   console.log(dateCities);
    // 
  }
  console.log(concertsToArr(concerts));


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Header title='Hello' />
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

