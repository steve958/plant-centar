/* eslint-disable @typescript-eslint/no-explicit-any */
import './News.css';
import { useRef } from 'react';

export default function News(props: any) {
    const ref = useRef(props.ref);

    return (
        <div className="news-container" ref={ref}>
            <div className="news-wrapper">
                <div className="meet-us-heading">
                    <h2>Aktuelnosti</h2>
                </div>
            </div>
        </div>
    );
}
