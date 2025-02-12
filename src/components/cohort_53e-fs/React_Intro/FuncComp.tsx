function FuncComp() {

    const num = Math.random();

    return(
        <>
        {/* старатися якумога більше спільного коду винести за скобки */}
        {num > 0.5 ? <p>Random number <strong>{num}</strong> more than 0.5</p> : <p>Random number <strong>{num}</strong> less than 0.5 </p>}
        {num > 0.4 && <h1>The num is more than 0.4</h1>}
        </>
    )
}

export default FuncComp;