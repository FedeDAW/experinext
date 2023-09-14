'use client'

import { useState } from 'react';

export function Counter() {
    const [count, SetCount] = useState(0)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => SetCount(count + 1)}>Increment</button>
        </div>
    )
    
}