import { useState } from "react";



export default function TextDisplay() {
    const paragrapgh = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

    const [data, setData] = useState<string>(paragrapgh);
    const [showLess, setShowLess] = useState(true);

    const handleTextDisplay = () => {
        console.log(showLess);
        setShowLess(!showLess);
        console.log(showLess);
    }

    return (
        <div>

            {showLess ? `${data.substring(0, 100)}` : data}
            <button onClick={handleTextDisplay}>{showLess ? 'SHOW MORE' : 'SHOW LESS'}</button>
        </div>
    )
}
