
import './App.css';
import Todo from './components/todo'
function App() {

  const todos = [
    { id: 1, title:'to learn', complete: false, },
    { id: 2, title:'to code', complete: false, },
    { id: 3, title:'to test', complete: true, },
  ];

  return (
    <div className="App">
      {todos.map((todo) => {
        return (<Todo todo={todo}/>)
      })

      }
    </div>
  );
}

export default App;
