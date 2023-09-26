import React from 'react'
import Game1 from '../Games/Figuras_Geometricas1'
import Game2 from '../Games/MemoriaAnimales'
import Game3 from '../Games/MemoriaVocal'
import Game4 from '../Games/GamesSumRes1'
const Games = () => {
  return (
    <div>
    <div className="collapse collapse-plus w-15 collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
      Juego 1
    </div>
    <div className="collapse-content " > 
      <Game1></Game1>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
    Juego 2
    </div>
    <div className="collapse-content"> 
    <Game2></Game2>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
    Juego 3
    </div>
    <div className="collapse-content"> 
    <Game3></Game3>
    </div>
  </div>

  <div className="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
    Juego 4
    </div>
    <div className="collapse-content"> 
    <Game4></Game4>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
    Juego 5
    </div>
    <div className="collapse-content"> 
    <iframe src="https://v6p9d9t4.ssl.hwcdn.net/html/5137922/index.html" title="sd" width="100%" height="500"></iframe>
    </div>
  </div>


  </div>
  )
}

export default Games