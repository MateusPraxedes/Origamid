import { useRef, useEffect, useState } from 'react'

// Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

// const App = () => {
//   const video = useRef();

//   useEffect(() => {
//     console.log(video.current);
//   }, []);

//   return (
//     <>
//     <video ref={video}></video>
//     </>)

//   }
//  export default App;



// focus()
// É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.

// const App = () => {
//   const [comentarios, setComentarios] = useState([]);
//   const [input, setInput] = useState('');
//   const inputElement = useRef();

//   function handleClick() {
//     setComentarios((comentarios) => [...comentarios, input]);
//     setInput('');
//     inputElement.current.focus();
//   }

//   return (
//     <div>
//       <ul>
//         {comentarios.map((comentario) => (
//           <li key={comentario}>{comentario}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={input}
//         ref={inputElement}
//         onChange={({ target }) => setInput(target.value)}
//       />
//       <br />
//       <button onClick={handleClick}>Enviar</button>
//     </div>
//   );
// };

// export default App;


// Referência
// O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.

const App = () => {
  const [contar, setContar] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setNotificacao('Obrigado por comprar');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;

