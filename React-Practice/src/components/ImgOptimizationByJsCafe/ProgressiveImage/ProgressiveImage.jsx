import ImageCmp from "./ImageCmp";

const largeImg = 'https://rarjh9ldquohoi50.public.blob.vercel-storage.com/large-1024x682-mNeQHze8d0WnwEWoDJBT7ibmJhgjOR.jpeg';
const tinyImg = 'https://rarjh9ldquohoi50.public.blob.vercel-storage.com/tiny-9cyFO1xTRadjycFbY3lQfTH3wQnegw.jpeg';
const ProgressiveImage = () => {
    return (
        <div>
            <h1>Progressive Image</h1>
            <ImageCmp
                src={largeImg}
                placeholderImg={tinyImg}
                height={450}
                width={450}
            />
        </div>
    )
}

export default ProgressiveImage;