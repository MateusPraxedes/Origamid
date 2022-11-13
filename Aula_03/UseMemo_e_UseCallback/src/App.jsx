import { useState, useMemo, useCallback } from 'react'
import '../public/style.css'

// useMemo
// Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.

// const local = localStorage.setItem('produto', 'notebook');

// const App = () => {
//   const [contar, setContar] = useState(0);
//   const valor = useMemo(() => {
//     const localStorageItem = window.localStorage.getItem('produto');
//     // só será executado uma vez
//     console.log('teste');
//     return localStorageItem;
//   }, []);
//   console.log(valor);

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
// };

// export default App;

// Serve para casos em que você faz uma operação lenta para retornar um valor.

// useMemo Teste

// function operacaoLenta() {
//   let c;
//   for (let i = 0; i < 100000000; i++) {
//     c = i + i / 10;
//   }
//   return c;
// }

// const App = () => {
//   const [contar, setContar] = useState(0);
//   const t1 = performance.now();
//   const valor = useMemo(() => operacaoLenta(), []);
//   // é mais rápido que
//   // const valor = operacaoLenta();
//   console.log(performance.now() - t1);

//   return <button onClick={() => setContar(contar + 1)}>{(performance.now() - t1)}</button>;
// };

// export default App;

// useCallback
// Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.

// const App = () => {
//   const [contar, setContar] = useState(0);

//   const handleClick = useCallback(() => {
//     setContar((contar) => contar + 1);
//   }, []);

//   return <button onClick={handleClick}>{contar}</button>;
// };

// export default App;

// Dificilmente você irá encontrar um cenário em que essa função seja útil

// useCallback Teste
// Uma prova de que o useCallback não irá criar uma nova função. Isso não significa que ele é mais ou menos otimizado. O Set() é utilizado pois ele permite apenas valores únicos dentro do mesmo.


const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2:', set2);
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;