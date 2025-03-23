
function Greeting({name, age, last_name}) {
    var num = 501
    return (
        <>
        <h1>Hello {name} {last_name}</h1>
        <p>Your age {age}</p>
        <h3>{num} is {num%2 === 0? 'is Even' : 'is Odd'}</h3>
        </>
    )
}

// With the help of props you can do it like this as mentioned below
// function Greeting(props) {
//     return (
//         <h2>Hello, {props.name}</h2>
//     );
// }

export default Greeting;