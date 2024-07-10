import onlineCv from "../assets/projects/online-cv.mp4";
import portfolio from "../assets/projects/portfolio.mp4";
import note from "../assets/projects/note.mp4";

function useData() {
    const allProjects = [
        {
            video: note,
            heading: "Note Taking App",
            subHeading: "Built with React for Seamless User Experience and Efficient Information Organization",
            year: "2023",
            type: "Application",
            url: "https://iamfiham.github.io/note-taking-app/",
        },
        {
            video: onlineCv,
            heading: "Online CV",
            subHeading:
                "Discover a Personalized CV Website Powered by React, Showcasing Skills, Experience, and Achievements!",
            year: "2022",
            type: "Personal Website",
            url: "https://iamfiham.github.io/online-cv/",
        },
        {
            video: portfolio,
            heading: "Personal Website ",
            subHeading:
                "Crafted with Html,CSS and Javascript for a Dynamic and Engaging Presentation of Skills and Projects",
            year: "2021",
            type: "Softwere",
            url: "https://iamfiham.github.io/portfolio/",
        },
    ];
    const socialMedia = [
        {
            website: "LinkedIn",
            link: "https://www.linkedin.com/in/iamfiham/",
        },

        {
            website: "GitHub",
            link: "https://github.com/iamfiham",
        },
        {
            website: "Fiverr",
            link: "https://www.fiverr.com/s/jjeQ0bw",
        },
    ];

    return { allProjects, socialMedia };
}

export default useData;
