import InputTodo from "./InputTodo";
import TodoList from "./TodosList";

const TodosLogic = () => {
    const todos = [
        {
            id: 1,
            title: "setup development environment",
            completed: true,
        },
        {
            id: 2,
            title: "develop website and add content",
            completed: false,
        },
        {
            id: 3,
            title: "deploy to live server",
            completed: false,
        },
    ];

    return (
        <div>
            <InputTodo />
            <TodoList todosProps={todos} />
        </div>
    );
};

export default TodosLogic;
