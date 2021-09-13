import React from 'react';
import Image from 'next/image'

export default function Footer() {
    return(
        <footer>
            <div className="footer">
                <div className="">
                    Comic Vine
                </div>
                <div className="">
                    {new Date(Date.now()).toLocaleString()}
                </div>
            </div>
        </footer>
    )
}
