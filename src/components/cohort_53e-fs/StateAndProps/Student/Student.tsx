import { useRef, useState } from "react";
import { StudentAge, StudentCardBox, StudentName } from "./styles";

interface StudentProps {
  studentName: string;
  studentAge: number | string;
  index?: number;
  isActive?: boolean;
  onDelete?: () => void;
}
// {studentName, studentAge} = означають ці скобки {} те що, 1й параметр не називається а деструктуризужться = обєкт з якого ми хочемо дістати якість значення
//  => 1) ми хочемо дістати значення по ключу - studentName і 2) по ключу - studentAge
// Жеструктуризація - є СТРУКТУРА в обєкту, а нам від неї треба позбутися

const Student = ({ studentName, studentAge, onDelete }: StudentProps) => {

  const [isEdit, setIsEdit] = useState(false);
  const [updatedName, setUpdatedName] = useState<string>(studentName);
  const [updatedAge, setUpdatedAge] = useState<number | string>(studentAge);
  const [isActive, setIsActive] = useState(true);

  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputAgeRef = useRef<HTMLInputElement | number | string>(18);

  const handleClickSave = () => {
    if (inputNameRef.current) {
      setUpdatedName(inputNameRef.current.value);
      setUpdatedAge(inputAgeRef.current.value);
      setIsEdit(false);
    }
  };

  const handleClickDelete = () => {
    // setIsActive(false);
  }

  return isActive ? (isEdit ? (
    <>
      <StudentCardBox>
        <input ref={inputNameRef} type="text" placeholder="Write new name: " defaultValue={updatedName} />
        <input
          ref={inputAgeRef}
          type="number"
          placeholder="Write new age: "
          min={0}
          max={125}
          defaultValue={updatedAge}
        />
        <button onClick={handleClickSave}>Save</button>
      </StudentCardBox>
    </>
  ) : (
    <>
      <StudentCardBox>
        <StudentName>Name: {updatedName}</StudentName>
        <StudentAge>Age: {updatedAge}</StudentAge>
        <button onClick={() => setIsEdit(true)}>Edit</button>
        {/* <button onClick={handleClickDelete}>Delete</button> */}
        <button onClick={onDelete}>Delete</button>
      </StudentCardBox>
    </>
  )
) : (<></>)
  // return (
  //     <>
  //     <StudentCardBox>
  //         <StudentName>Name: {updatedName}</StudentName>
  //         <StudentAge>Age: {updatedAge}</StudentAge>
  //         {isEdit ? (
  //            <>
  //                 <button onClick={handleClickSave}>Save</button>
  //                 <input ref={inputNameRef} type="text" placeholder="Write new name: " />
  //                 <input ref={inputAgeRef} type="number" placeholder="Write new age: " min={0}/>
  //            </>
  //         ) :  (<button onClick={() => setIsEdit(true)}>Edit</button>)}
  //     </StudentCardBox>
  //     </>
  // );
};

export default Student;
