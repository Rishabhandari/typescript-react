import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

export default function StateMultipleValue() {
    const [nationalId, setNationalId] = useState<string | number>('');  // now the national id can be number or string
    const changeNationalId = () => {
        setNationalId(12);
        setNationalId('wqwq');
    }
    return (
        <div>
            <button onClick={() => changeNationalId}>  SetNationalID</button>

            {/* can only pass 3 values - loading,suspense or error */}
            <ChildComponent loading={'error'} />
        </div>
    )
}
