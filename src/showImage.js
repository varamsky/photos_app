import React from 'react';

function ShowImage() {

    const images = [
        "https://images.unsplash.com/photo-1601725176416-749ce812c9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1601733799451-ee61f1f4e107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1601736045776-a9e675dd6264?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
        "https://images.unsplash.com/photo-1601898077476-1da58d2098c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1601758064224-c3c5ec910095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=847&q=80",
    ];


    return (
        <React.StrictMode>
            <section>
                <div>
                    {
                        images.map((image) => {
                            return (
                                <div style={{display:"inline"}}>
                                    <img alt="unsplash imagery" src={image} width="150" height="100" style={{padding: "10px"}} />
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </React.StrictMode>
    );

}

export default ShowImage;