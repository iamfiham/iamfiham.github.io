import video from "../assets/projects/video.webm";

function useData() {
    const allProjects = [
        {
            video: video,
            heading: "Note Taking App",
            subHeading: "Built with React for Seamless User Experience and Efficient Information Organization",
            year: "2021",
            type: "Softwere",
            url: "https://iamfiham.github.io/note-taking-app/",
        },
        {
            video: video,
            heading: "E-Commerce Website",
            subHeading:
                "Leveraging React and Firebase for Dynamic Shopping Experiences and Seamlessly Managed Transactions",
            year: "2022",
            type: "Softwere",
            url: "https://iamfiham.github.io/e-commerce/",
        },
        {
            video: video,
            heading: "Portfolio Site",
            subHeading: "Crafted with React for a Dynamic and Engaging Presentation of Skills and Projects",
            year: "2023",
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
