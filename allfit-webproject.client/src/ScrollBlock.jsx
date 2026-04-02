import { useState } from 'react';


function ScrollBlock({ items }) {
    const [index, setIndex] = useState(0);

    function handleNext() {
        if (index + 1 < items.length) {
            setIndex(index + 1);
        } else {
            setIndex(0)
        }
    }
    function handlePrev() {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        } else {
            setIndex(items.length - 1)
        }
    }

    let item = items[index];
    return (
        <div>
            {item}
            <button onClick={handlePrev}>
                Previous
            </button>
            <h3>
                ({index + 1} of {items.length})
            </h3>
            <button onClick={handleNext}>
                Next
            </button>
        </div>

  );
}

export default ScrollBlock;