import React, { useEffect, useState } from 'react'

const ImageCmp = ({ src, placeholderImg, height, width }) => {

    const [imgSrc, setImgSrc] = useState(placeholderImg || src);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
        }
    }, []);

    return (
        <img
            src={imgSrc}
            height={height}
            width={width}
            className={`${placeholderImg && imgSrc === placeholderImg ? 'loading blur-sm' : 'loaded blur-0 transition-filter duration-500 ease-linear'}`}
        />
    )
}

export default ImageCmp