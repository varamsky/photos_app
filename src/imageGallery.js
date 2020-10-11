import React, { useState } from 'react';
import "./imageGallery.css";

function ImageGallery() {

    const [images, setImages] = useState(
        [
            "https://images.unsplash.com/photo-1601725176416-749ce812c9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1601733799451-ee61f1f4e107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1601736045776-a9e675dd6264?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
            "https://images.unsplash.com/photo-1601898077476-1da58d2098c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1601758064224-c3c5ec910095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=847&q=80",
        ]
    );

    const [newImageUrl, setNewImageUrl] = useState("");

    const [isHovering, setisHovering] = useState(-1);

    // when image gallery mounts
    React.useEffect(() => {
        console.log("Image gallery Mounted");
    }, []);

    // when image gallery unmounts
    React.useEffect(() => {
        return () => {
            console.log("Image gallery Unmounted");
        }
    }, []);

    function ShowImage() {
        return (
            images.map((image, index) => {
                return (
                    <div key={index} style={{ margin: "10px" }}>
                        <div style={{ position: "relative" }} onMouseEnter={() => setisHovering(index)} onMouseLeave={() => setisHovering(-1)}>
                            <i
                                /* this is for showing the cross icon only when you hover on the image */
                                className={isHovering === index ? "fas fa-times" : "fas fa-times hidden"}

                                onClick={() => handleRemove(index)}>
                            </i>
                            <img alt="unsplash imagery" src={image} width="150" height="100" />
                        </div>
                    </div>
                );
            })
        );
    }

    // remove the selected image
    function handleRemove(index) {
        // filter is used to filter arrays w.r.t. a boolean condition i.e., here it is i !== index
        setImages(images.filter((image, i) => i !== index));
    }

    function handleChange(event) {
        setNewImageUrl(event.target.value);
    }

    function handleAddNewImage() {
        if (newImageUrl !== "") {
            setImages([...images, newImageUrl]);
            setNewImageUrl("");
        }
    }

    return (
        <React.StrictMode>
            <section >
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <ShowImage />
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" value={newImageUrl} onChange={handleChange} style={{ padding: "2px", borderRadius: "5px", marginRight: "50px" }} />
                    <button
                        disabled={newImageUrl === ""}
                        style={{ padding: "2px", backgroundColor: newImageUrl === "" ? "greenyellow" : "green", color: "white", borderRadius: "5px" }}
                        onClick={handleAddNewImage}>Add new image</button>
                </div>
            </section>
        </React.StrictMode>
    );

}

export default ImageGallery;