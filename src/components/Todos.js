import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './services/action/TodosAction';

function Todos() {
    const { isLoading, todos, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <div>
            <h2>TODOS APPLICATION</h2>
            {isLoading && <h3>Loading....</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos &&
                    todos.map((todo) => (
                        <article key={todo.id}>
                            <h4>{todo.id}</h4>
                            <h4>{todo.title}</h4>
                        </article>
                    ))}
            </section>
        </div>
    );
}

export default Todos;
