import { useState } from "react";
import FuncComp from "./components/cohort_53e-fs/React_Intro/FuncComp";
import Student from './components/cohort_53e-fs/StateAndProps/Student/Student';
import Task from "./components/cohort_53e-fs/StateAndProps/Switcher/Task";

const initialStudents = [
 {id: 1, name: "John", age: 25},
 {id: 2, name: "Emmy", age: 24},
 {id: 3, name: "Georg", age: 28},
 {id: 4, name: "Bob", age: 20},
 {id: 5, name: "Bob", age: 20},
];

function App() {

  const [students, setStudents] = useState(initialStudents);

  const handleDeleteCard = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  }

  return (
    <>
      {/* <h1>Hi</h1> */}
      {/* <FuncComp /> */}
      {/* <FuncComp /> */}
      {/* <FuncComp /> */}
      <hr />
      {/* DRY - don`t repeat yourself */}
      {/* {} фігурні скобки вибивають нас в js з jsx*/}
      {students.map( (student) => <Student key={student.id} studentName={student.name} studentAge={student.age} onDelete={()=>handleDeleteCard(student.id)} />)}
      {/* {students.map( student => <Student key={Math.random() + new Date()} studentName={student.name} studentAge={student.age}/>)} */}
      {/* <Student studentName="John" studentAge={25}/>
      <Student studentName="Emmy" studentAge={22}/>
      <Student studentName="Georg" studentAge={22-10}/> */}
      {/* звертаємося до масиву, викликаємо метод map, де при кожній ітерації,(отр ітерований елемнт
      ми кожен раз звертаємося до елементу який виводить/повертає(=>) екземпляр Студент з унікальним ключом*/}
      <hr />
      {/* <Task /> */}
    </>
  )
}

export default App;