import React, { useState } from 'react'
import './App.css';

function App() {
  const [personagem, setPersonagem] = useState('Scooby-Doo')
  const [qtdDeCasosResolvidos, setQtdDeCasosResolvidos] = useState(0)

  return (
    <div className="App">
      Meu personagem {personagem}
      <button data-testid="botao-muda" onClick={() => setPersonagem('Salsicha')}>Muda personagem</button>

      Quantidade de casos resolvidos: {qtdDeCasosResolvidos}
      <button
        data-testid="botao-resolve-caso"
        onClick={
          () => setQtdDeCasosResolvidos(qtdDeCasosResolvidos + 1)
        }>
        Resolve caso
      </button>
    </div>
  );
}

export default App;
