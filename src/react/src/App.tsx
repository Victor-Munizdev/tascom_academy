import Button from "./components/Button";
import Container from "./components/Container";
import Saudacao from "./components/Saudacao";

function App() {
  return (
    <main>
      <Container color="rgba(231, 14, 14, 0.96)"/>
      <Saudacao name="Victor" />

      <Button>Teste de botão 1</Button>
      <p/>  
      <Button>Teste de botão 2</Button>

    </main>
  );
}

export default App;
console.clear()
console.log("Olá mundo");