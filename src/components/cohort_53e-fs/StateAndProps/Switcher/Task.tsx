import { useRef, useState } from "react";
import default from './../../../../../node_modules/@typescript-eslint/eslint-plugin/dist/rules/consistent-type-definitions';

const Task = () => {
    // react не слідкує за змінною нище і не може її змінити -> треба використати хук useState
    // const isEdit = false;
    // const isEdit = true;

    // useState - метод який в якості параметра бажає знати дефолтне значення змінної за якою буде слідкувати реакт і за якою буде змінювати значення на сторінці,
    // вертає масив з 2 елементів
    // Кортеж - Tuple (часний випадок масиву - масив з наперед відомою к-тю елементів)
    const [isEdit, setIsEdit] = useState(true);
    // по дефолту в скобках в useState(); вже стоїть false
    // isEdit - змінна, setIsEdit - функція яка назначає нове значення для змінної

    const [updatedTask, setUpdatedTask] = useState("Task 1");

    // handle = часто вручну прописані функції так позначаються
    const handleClickSave = () => {
        setIsEdit(false);
        setUpdatedTask("!");
    }

    // React.useRef() - інструмент що допомагає отримати силку без назви на б-я елемент на сторінці
    // аналог до document.getElementById()
    // допомагає отр силку на той елемент в частині якого будуть відбуватися зміни
    // знову обходимо роботу з Дом і економимо ресурси програми
    const textRef = useRef();

    return isEdit ? ( //режим редагування
        <>
        <textarea placeholder="Edit your task" ref={textRef} default={updatedTask}></textarea>
        {/* onClick - це jsx - камелкейс */}
        <button onClick={handleClickSave}>Save</button>
        </>
    ) : ( //режим перегляду
        <>
        <p>{updatedTask}</p>
        {/* дивно, якщо прописана логіка кліку тільки для 1ї кнопки, то логіка кліку ні для кого не застосовується */}
        {/* result - я не розібралася яку логіку до якої кнопки я прописала і що нажимаю, так, все працює і в ондоразовому режимі*/}
        <button onClick={()=>{setIsEdit(true)}}>Edit</button>
        {/* змінюється тільки стан - state, a set... - метод який змінює цей стан (тільки так можна змінити стан - в ручну змінну ми ніколи не зміннює, тільки так)*/}
        <button>Delete</button>
        </>
    ) 
};

export default Task;