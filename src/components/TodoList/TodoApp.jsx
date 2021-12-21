import React from 'react';
import PostService from '../../API/PostService';
import '../../scss/todoList.scss';

const TodoApp = () => {
    const [messageList, setMessageList] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const addTodo = (message) => {
        setMessageList([...messageList, { title: message }]);
    };

    const deleteTodo = (message) => {
        let deleteMessageIndex = messageList.indexOf(message);
        setMessageList([
            ...messageList.slice(0, deleteMessageIndex),
            ...messageList.slice(deleteMessageIndex + 1)
        ]);
    };

    async function fetchList() {
        const todoLists = await PostService.getAll();
        setMessageList(todoLists.slice(0, 10));
    }

    React.useEffect(() => {
        setLoading(true);
        fetchList();
        setLoading(false);
    }, []);

    return (
        <div id="app">
            {(loading)
            ? (
                <h2>Идет загрузка</h2>
            )
            : <FullTodoList addTodo={addTodo} messageList={messageList} deleteTodo={deleteTodo} />
            }
        </div>
    )
}

const FullTodoList = ({ addTodo, messageList, deleteTodo }) => (
    <div className="b-todo-list">
        <TodoHeader />
        <TodoForm addTodo={addTodo} />
        <TodoList messageList={messageList} deleteTodo={deleteTodo} />
    </div>
);

const TodoHeader = () => (
    <div className="header">
        <h2>Todo List</h2>
    </div>
);

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = React.useState("");

    const changeHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = (event) => {
        addTodo(input);
        setInput("");
    };

    return (
        <div className="form">
            <input
                className="form__input"
                type="text"
                value={input}
                onChange={changeHandler}
            />
            <button className="form__submit" onClick={submitHandler}>
                Добавить
            </button>
        </div>
    );
};

const TodoList = ({ messageList, deleteTodo }) => (
    <ol className="todolist">
        {messageList.map((message, index) => (
            <Todo message={message} deleteTodo={deleteTodo} key={index} />
        ))}
    </ol>
);

const Todo = ({ message, deleteTodo }) => {
    const handleSubmit = (event) => {
        deleteTodo(message);
    };

    return (
        <li className="todo">
            <span className="todo__label">{message.title + "  "}</span>
            <button className="todo__delete" onClick={handleSubmit}>
                Удалить
            </button>
        </li>
    );
};

export default TodoApp;