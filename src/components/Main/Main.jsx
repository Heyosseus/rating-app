import main from './Main.module.css'
import { useState } from 'react'

const Main = ({display, setDisplay}) => {
  const [isActive, setIsActive] = useState(true);
  function activeClass(id) {
    setIsActive(current => !current)
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
            <div className={isActive ? main.circle : main.activeCircle} onClick={activeClass}><span>1</span> </div>
            <div className={main.circle}><span>2</span></div>
            <div className={main.circle}><span>3</span></div>
            <div className={main.circle}><span>4</span></div>
            <div className={main.circle}><span>5</span></div>
        </div>
        
          <button className={main.btn} onClick={changeCard}>SUBMIT</button>
        
    </div>
  )
}

export default Main