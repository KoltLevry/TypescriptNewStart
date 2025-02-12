const root = ReactDOM.createRoot(document.getElementById("root"));
// class краще для життєвого циклу компонента
class Cohort53FS extends React.Component {
    render() {
        return(
            <div>
                <h1 style={{textAlign: "center"}}>Cohort 53 FS</h1>
            </div>
        );
    }
}

root.render(
    <>
        <Cohort53FS/>
        <Cohort53FS/>
        <Cohort53FS/>
    </>
)