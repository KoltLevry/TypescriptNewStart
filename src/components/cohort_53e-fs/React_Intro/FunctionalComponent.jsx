// отр силку на кореневий елемент
const root = ReactDOM.createRoot(document.getElementById("root"));
// ств компонент
const Cohort53FS = () => {
    return(
        <div>
                <h1>Cohort 53 FS</h1>
            </div>
    );
}
// тут треба відмалювати компонент
root.render(
    <>
        <Cohort53FS/>
        <Cohort53FS/>
        <Cohort53FS/>
    </>
)