import { StudentAge, StudentCardBox, StudentName } from "./styles";

interface StudentProps {
    studentName: string;
    studentAge: number;
}
// {studentName, studentAge} = означають ці скобки {} те що, 1й параметр не називається а деструктуризужться = обєкт з якого ми хочемо дістати якість значення
//  => 1) ми хочемо дістати значення по ключу - studentName і 2) по ключу - studentAge
// Жеструктуризація - є СТРУКТУРА в обєкту, а нам від неї треба позбутися 
const Student = ( {studentName, studentAge}: StudentProps  )=> {
    return(
        <>
        <StudentCardBox>
            <StudentName>Name: {studentName}</StudentName>
            <StudentAge>Age: {studentAge}</StudentAge>
        </StudentCardBox>
        </>
    );
}

export default Student;