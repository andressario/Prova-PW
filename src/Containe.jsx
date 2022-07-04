import "./Container.css"
function Container(){

    return(
        <div className='container'>
         
            <ol className="lista">
            <div className="image">
            <img src="logo.svg" />
            </div>
           
              <li>Entregador</li>
              <li>Restaurante e Mercado</li>
              <li>Carreiras</li>
              <li>iFood Card </li>

              <button className="but">Criar conta</button>
            <button className="bu">Entrar </button>
             
            </ol>
            <h1 className="h1">Destaques</h1>
        </div>
    );
    
}
export default Container;