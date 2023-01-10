import React from 'react';

function StepList(props) {
    const StepListItems = props.steps.map((step, index) => {
        return (
            <li key={index}>
                {step}
            </li>
        );
    });

    return (
        <ol>
            {StepListItems}
        </ol>
    );
}

export default StepList;