import React, { useState }  from 'react'

export default function Abc(props) {
    const [count, setCount] = useState(0);

    function suma(a,b){
        return a+b;
    }

    const addCount = () => {
        setCount(count+1);
    };

    const InnetComponent = () => {
        

        return(
            <p>
                <p>Inner</p>
                <p>compoentn</p>
            </p>
        )
    };

    return (
        <div>
            <p>Count:{count}</p>
            <InnetComponent/>
            <p>{suma(props.val1, props.val2)}</p>
            <button onClick={addCount}>SUMAR</button>
        </div>
    )
}
