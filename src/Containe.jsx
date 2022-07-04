import './Containe.css'

function Containe(){

return(
  <div className='itens'>

  <div className='item1'>
      <ol className="lista">
        <div className="img">
          <img src='big-king.webp'></img>
            <li className='titulo'>Combo Big King</li>
            <li className='desc'>Um hambúguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...</li>
            <li className='quantidade'>Serve 1 pessoa</li>
            <li className='valor'>R$41,90</li>
        </div>
      </ol>
  </div>

  <div className='item2'>
      <ol className="list">
        <div className="img">
          <img src='cheddar-duplo.webp'></img>
            <li className='titulo'>Combo Cheddar Duplo</li>
            <li className='desc'>Um hambúguer com duas carnes bovinas grelhadas de 57g, pão preto com gergelim...</li>
            <li className='quantidade'>Serve 1 pessoa</li>
            <li className='valor'>R$41,90</li>
        </div>
      </ol>
  </div>

  <div className='item3'>
      <ol className="lista">
        <div className="img">
          <img src='cheeseburger-duplo.webp'></img>
            <li className='titulo'>Combo Cheeseburger Duplo com Bacon</li>
            <li className='desc'>Um hambúguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...</li>
            <li className='quantidade'>Serve 1 pessoa</li>
            <li className='valor'>R$36,90</li>
        </div>
      </ol>
  </div>

  <div className='item4'>
      <ol className="lista">
        <div className="img">
          <img src='mega-stacker.webp'></img>
            <li className='titulo'>Combo Mega Stacker 2.0</li>
            <li className='desc'>Um hambúguer com duas carnes bovinas grelhadas de 113g, pão com gergelim, queijo...</li>
            <li className='quantidade'>Serve 1 pessoa</li>
            <li className='valor'>R$51,90</li>
        </div>
      </ol>
  </div>

  </div>
)
}
export default Containe;