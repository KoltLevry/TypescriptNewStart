import FuncComp from "./components/cohort_53e-fs/React_Intro/FuncComp";
import Student from './components/cohort_53e-fs/StateAndProps/Student/Student';
import Task from "./components/cohort_53e-fs/StateAndProps/Switcher/Task";

const students = [
 {name: "John", age: 25},
 {name: "Emmy", age: 24},
 {name: "Georg", age: 28},
 {name: "Bob", age: 20},
 {name: "Bob", age: 20},
];

function App() {
  return (
    <>
      {/* <h1>Hi</h1> */}
      {/* <FuncComp /> */}
      {/* <FuncComp /> */}
      {/* <FuncComp /> */}
      <hr />
      {/* DRY - don`t repeat yourself */}
      {/* {} фігурні скобки вибивають нас в js з jsx*/}
      {students.map( student => <Student key={Math.random()} studentName={student.name} studentAge={student.age}/>)}
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