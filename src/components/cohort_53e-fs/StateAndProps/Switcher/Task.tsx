import { useRef, useState } from "react";

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

    const [updatedTask, setUpdatedTask] = useState("");

    // handle = часто вручну прописані функції так позначаються
    const handleClickSave = () => {
        if(textRef.current) { // 👈 Перевіряємо, що current не null
            setUpdatedTask(textRef.current.value);
        //  textRef.current.value — це фактичне значення, введене в <textarea>.
        setIsEdit(false);}

        // useRef<HTMLTextAreaElement | null>(null) означає:
        // Спочатку textRef.current === null (бо ще немає <textarea> у DOM).
        // Після рендеру React призначає textRef.current посилання на <textarea>.
    }

    // React.useRef() - інструмент що допомагає отримати силку без назви на б-я елемент на сторінці
    // аналог до document.getElementById()
    // допомагає отр силку на той елемент в частині якого будуть відбуватися зміни
    // знову обходимо роботу з Дом і економимо ресурси програми
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    console.log(textRef);
    console.log(textRef.current);

    const handleClickDelete = () => {
        setUpdatedTask("");
    };

    // task focus with useRef
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleFocus = () => {
        inputRef.current?.focus(); // Фокусуємо інпут
    }

    // Збереження таймерів (setTimeout, setInterval)
    const timeoutRef = useRef<number | null>(null);

    const startTimer = () => {
        timeoutRef.current = window.setTimeout( () => {
            alert("In 3 sec!");
        }, 3000);
        console.log("Timer - start")
    };

    const cancelTimer = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        console.log("Timer - default")
    }
    // ммм, зашибісь весело 👍

    // коли ще використовують useRef: Використання в анімаціях (з GSAP, Framer Motion)

    return isEdit ? ( //режим редагування
        <>
            <>
            <textarea placeholder="Save your task" ref={textRef} defaultValue={updatedTask}></textarea>
            {/* onClick - це jsx - камелкейс */}
            <button onClick={handleClickSave}>Save</button>
            </>
            <hr />
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Focus</button>
            <hr />
            <button onClick={startTimer}>Alert - start timer</button>
            <button onClick={cancelTimer}>Alert - cancel timer</button>
        </>
    ) : ( //режим перегляду
        <>
            <>
            <p>{updatedTask}</p>
            {/* дивно, якщо прописана логіка кліку тільки для 1ї кнопки, то логіка кліку ні для кого не застосовується */}
            {/* result - я не розібралася яку логіку до якої кнопки я прописала і що нажимаю, так, все працює і в ондоразовому режимі*/}
            <button onClick={()=>{setIsEdit(true)}}>Edit</button>
            {/* змінюється тільки стан - state, a set... - метод який змінює цей стан (тільки так можна змінити стан - в ручну змінну ми ніколи не зміннює, тільки так)*/}
            <button onClick={handleClickDelete}>Delete</button>
            </>            
        </>
    ) 
};

export default Task;

// Найбільше useRef застосовується в:
// - Фокусуванні інпутів після відкриття модалки
// - Анімаціях
// - Збереженні setTimeout / setInterval
// - Обробці нестандартних DOM-операцій
// У великих ToDo-списках зазвичай useState або useReducer, а не useRef. 
// Якщо треба відстежувати введення в інпут — використовують onChange і useState.

// Що коли краще використовувати
// Збереження стану інпутів (текст, пароль)	= useState
// Збереження попереднього введеного значення	= useRef
// Автоматичний фокус після завантаження сторінки	= useRef
// Робота з формами (Formik, React Hook Form)	= useState, useReducer
// Валідація пароля / полів	= Yup, useState
// Обробка кожного введеного символу в реальному часі	= onChange + useState
// Автоматичне підставлення коду з SMS (OTP)	= useRef