import React from 'react'

const ResponsiveImage = () => {
    return (
        <div>
            <h1>Responsive Image</h1>
            <img
                src="https://rarjh9ldquohoi50.public.blob.vercel-storage.com/cat-500-qFjiS0w5QlkcWjA6dnyijf9tqqyEuW.jpeg"
                srcset="https://rarjh9ldquohoi50.public.blob.vercel-storage.com/cat-500-qFjiS0w5QlkcWjA6dnyijf9tqqyEuW.jpeg 500w,
                https://rarjh9ldquohoi50.public.blob.vercel-storage.com/cat-1000-TTTlNnnqAoE6GbXZHQQgujP2lyNiTg.jpeg 1000w,
                https://rarjh9ldquohoi50.public.blob.vercel-storage.com/cat-1500-1024x1024-ODlST0VPJ9HDXPh0NI6gRJjEoL6pYX.jpeg 1500w"
                alt="A responsive image of a cat"
            />
        </div>
    )
}

export default ResponsiveImage