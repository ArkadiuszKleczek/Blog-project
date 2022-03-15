import React from 'react';
import useFetch from "./useFetch";

function AboutMe(props) {
    const { error, isPending } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            <h1>Arkadiusz Kłeczek</h1>
            <h3><span>Class:</span> Beginner programmer</h3>
            <h3><span>Level:</span> 30</h3>
            <br/>
            <p>Hello i'm Arek. Im a motivated beginner programmer with high goals.<br/> When im not programming i go to
                the gym, to get in shape. To get my brain in shape im in the midst of developing reading habits. Mostly
                books about psychology, self development and business. In the past i was part of medieval reenactors group.
                I used to wear a 20kg plate armor, and fought other for sports. But since Covid came in thous fairs are hard
                to organise.
            </p>
            <br/>
            <h4>Join my discord server: <a style={{textDecoration: "none" }} href="https://discord.gg/9AYV8FzP">Join!</a></h4>

        </div>
    );
}
export default AboutMe;