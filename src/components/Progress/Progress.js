import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Progress = ({ now, max }) => {
    const progBar = {
        height: "1.5rem",
        borderRadius: "10rem"
    }
    return (
        <div style={{ flexGrow: 1 }}>
            <ProgressBar style={progBar} variant="info" min={0} max={max} now={now} />
        </div>
    );
}

export default Progress