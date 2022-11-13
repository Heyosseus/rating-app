import main from './Main.module.css'
import { useState } from 'react'

const Main = ({setDisplay, count, setCount}) => {
  // const [count, setCount] = useState(false)
  const [toggle, setToggle] = useState(true);

 
  function activeClass(id) {
    if (toggle === 1 || toggle === 2 || toggle === 3 || toggle === 4 || toggle === 5) {
      setToggle(0)
    } else {
      setToggle(id)
    }
   }
  

  function changeCard() {
    setDisplay(display => !display)
  }

  return (  
    <div className={main.container}>
      <div className={main.star}></div>
        <h1 className={main.heading}>How did we do?</h1>
        <p className={main.paragraph}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className={main.rating}>
        <div className={toggle === 1 ? main.activeCircle : main.circle} onClick={() => activeClass(1)}><span>{toggle === 1 ? setCount(1) :''}1</span> </div>
        <div className={toggle === 2 ? main.activeCircle : main.circle} onClick={() => activeClass(2)}><span>{toggle === 2 ? setCount(2) :''}2</span></div>
        <div className={toggle === 3 ? main.activeCircle : main.circle} onClick={() => activeClass(3)}><span>{toggle === 3 ? setCount(3) :''}3</span></div>
        <div className={toggle === 4 ? main.activeCircle : main.circle} onClick={() => activeClass(4)}><span>{toggle === 4 ? setCount(4) :''}4</span></div>
        <div className={toggle === 5 ? main.activeCircle : main.circle} onClick={() => activeClass(5)}><span>{toggle === 5 ? setCount(5) : ''}5</span></div>
        </div>
        
        <button className={main.btn} onClick={changeCard}>SUBMIT</button>
        
    </div>
  )
}

export default Main