import FuncComp from "./components/cohort_53e-fs/React_Intro/FuncComp";
import Student from './components/cohort_53e-fs/StateAndProps/Student/Student';

function App() {
  return (
    <>
      <h1>Hi</h1>
      <FuncComp />
      <FuncComp />
      <FuncComp />
      <hr />
      <Student studentName="John" studentAge={25}/>
      <Student studentName="Emmy" studentAge={22}/>
      <Student studentName="Georg" studentAge={22-10}/>
    </>
  )
}

export default App;