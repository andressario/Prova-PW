import "./Menu.css"
function Menu(){

    return(
        <div className='container'>
         
            <ol className="li">
            <div className="image">
            <img src="logo.svg" />
            </div>
           
              <li>Entregador</li>
              <li>Restaurante e Mercado</li>
              <li>Carreiras</li>
              <li>iFood Card </li>

              <button className="but">Criar conta</button>
            <button className="b">Entrar </button>
             
            </ol>
            <h1 className="h">Destaques</h1>
        </div>
    );
    
}
export default Menu;