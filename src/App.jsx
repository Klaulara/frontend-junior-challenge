import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "components/TodoForm";

const App = () => {
  return (
    <div className="root max-w-lg container mx-auto">
      <TodoList />
      <TodoResults />
      <TodoForm />
    </div>
  );
};

export default App;
