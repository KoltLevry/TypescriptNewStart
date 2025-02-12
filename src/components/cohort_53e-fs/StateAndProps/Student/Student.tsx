interface StudentProps {
    studentName: string;
    studentAge: number;
}

const Student = ( {studentName, studentAge}: StudentProps  )=> {
    return(
        <>
        <div>
            <p>Name: {studentName}, Age: {studentAge}</p>
        </div>
        </>
    );
}

export default Student;