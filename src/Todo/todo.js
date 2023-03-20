import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const Todo = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);

    const addTodo = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "hihellohr"), {
                todo: todo,
            }).then(x => fetchPost());
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    const fetchPost = async () => {

        await getDocs(collection(db, "hihellohr"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTodos(newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])


    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>

                <div>

                    <div>
                        <input
                            type="text"
                            placeholder="What do you have to do today?"
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>

                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>

                </div>

                <div className="todo-content">
                    {todos && todos.length > 0 && todos.map(item => (
                        <h3 key={item.id} >{item.todo}</h3>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Todo