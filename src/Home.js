import TodoList from "./TodoList";
import useFetch from "./useFetch";

const URL = "http://127.0.0.1:8000/todos";

const Home = () => {
    const {data:todos, error, loading} = useFetch(URL);

    return (
        <div className="home">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {todos && <TodoList todos={todos} />}
        </div>
    );
}

export default Home;