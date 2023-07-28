import React, { useEffect, useState } from 'react';
import styles from '../../styles/Preloader.module.css';

const words = ['P', 'U', 'R', 'B', 'A', 'N', 'I'];

const Preloader = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 4000); // Set the time for the animation to complete (4 seconds in this case)

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`${styles.preloader} ${animationComplete ? styles.fadeOut : ''}`}>
            <div className={styles.animationContainer}>
                {words.map((word, index) => (
                    <div key={index} className={styles.fallingText}>
                        {word}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Preloader;