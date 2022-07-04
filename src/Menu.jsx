import './Menu.css'

function Menu(){

return(
  <div className='itens'>

  <div className='item1'>
      <ol className="list">
        <div className="img">
          <img src='big-king.webp'></img>
            <li className='titulo'>Combo Big King</li>
            <li className='desc'>Um amburguer com duas carnes bovinas grelhadas...</li>
            <li className='quantidade'>Serve 1 pessoa</li>
            <li className='valor'>R$41,90</li>
        </div>
      </ol>
  </div>

  <div className='item2'>
      <ol className="list">
        <div className="img">
          <img src='cheddar-duplo.webp'></img>
            <li className='titulo'>Combo Cheedar Duplo</li>
            <li className='desc'>Um amburguer com duas carnes bovinas grelhadas...</li>
            <li className='quantidade'>Serve 1 pessoa</li>
            <li className='valor'>R$41,90</li>
        </div>
      </ol>
  </div>

  <div className='item3'>
      <ol className="list">
        <div className="img">
          <img src='cheeseburger-duplo.webp'></img>
            <li className='titulo'>Combo Cheeserburger Duplo com Bacon</li>
            <li className='desc'>Um amburguer com duas carnes bovinas grelhadas...</li>
            <li className='quantidade'>Serve 1 pessoa</li>
            <li className='valor'>R$39,90</li>
        </div>
      </ol>
  </div>

  <div className='item4'>
      <ol className="list">
        <div className="img">
          <img src='mega-stacker.webp'></img>
            <li className='titulo'>Combo Mega Stacker 2.0</li>
            <li className='desc'>Um amburguer com duas carnes bovinas grelhadas...</li>
            <li className='quantidade'>Serve 1 pessoa</li>
            <li className='valor'>R$51,90</li>
        </div>
      </ol>
  </div>

  </div>
)
}
export default Menu;