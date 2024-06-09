import { useState } from "react";
import "../styles/about.css";


const texts = {
    introduction_1: "My name is Karim Biscaiburo, born on 08/28/2002 in Santa Cruz, Rio Gallegos-Argentina, but currently residing in Mar del Plata, Buenos Aires-Argentina.",
    introduction_2: "I look forward to any opportunity to develop my skills professionally in order to participate in the solution and resolution of as many problems as required.",

    howIStarted_1: "During my last year of high school, and the pandemic, I began to venture into the world of web development and programming, learning about algorithms and the logic that they entail.",
    howIStarted_2: "When I finished high school, I decided to further reinforce this knowledge by enrolling in a Programming Technique. After a year of studying, I discovered that I am passionate about web design and everything it encompasses, so I changed my course and started taking online courses, in academies and with mentors on YouTube, on web design.",

    howAmI_1: "I consider myself a very productive, detailed and organized person. I like to pay attention to every detail so that it is as perfect as possible, planning it for a better resolution.",
    howAmI_2: "I can quickly join a work team and its methodologies thanks to the fact that I pay a lot of attention and adapt quickly.",

    myObjective_1: "I am passionate about learning new things, so my goal is to gain as much experience as I can to grow professionally and personally.",
    myObjective_2: "I want to become a very cultured and dedicated person in the area, so it is also of my interest to develop my individual and group capabilities, acquiring the ability to work with different work methodologies.",

    whatIWant_1: "I want that in 10 years I can look back in time and be proud of the person I became, feel that everything I did was worth it to have a happy and comfortable life.",
    whatIWant_2: "I also want to try things, whether they turn out good or bad, but not be left wanting to have tried them, learn from it and use it to move forward."
}

export default function About() {
    // Toggle active title selected
    const [titleSelected, setTitleSelected] = useState("Introduction");

    const titles = ["Introduction", "How I started", "How am I", "My objective", "What I want"];

    function handleActiveTitle (index) {
        setTitleSelected(index)
    }

    return (
        <section className="about-section" id="about">
            <h2>About Me</h2>

            <div className="about-details">
                <div className="titles">
                    {
                        titles.map((index) => (
                            <h3
                                key={index}
                                className={titleSelected === index ? "active" : null}
                                onClick={()=>{handleActiveTitle(index)}}
                            >
                                <span></span>
                                {index}
                            </h3>
                        ))
                    }
                </div>  
                <div className="texts">
                    <p>
                        {
                            titleSelected === "Introduction" ? texts.introduction_1 : titleSelected === "How I started" ? texts.howIStarted_1 : titleSelected === "How am I" ? texts.howAmI_1 : titleSelected === "My objective" ? texts.myObjective_1 : texts.whatIWant_1
                        }
                    </p>
                    <p>
                    {
                            titleSelected === "Introduction" ? texts.introduction_2 : titleSelected === "How I started" ? texts.howIStarted_2 : titleSelected === "How am I" ? texts.howAmI_2 : titleSelected === "My objective" ? texts.myObjective_2 : texts.whatIWant_2
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}