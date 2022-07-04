import "./App.css"
import Menu from "./Menu.jsx";
import Container from "./Containe.jsx";

function App(){
    return(
        <div className="principal">

        <div className="menu1">
            <Menu />
        </div>

        <div className="menu2-cardapio">
            <Container />
        </div>
        </div>
);

}
export default App;
