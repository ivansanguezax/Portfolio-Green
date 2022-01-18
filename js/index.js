import CardCarousel from './modules/CardCarousel.js';

const content = 
{
    "development":{
        1:
        {
            href: "https://github.com/ivansanguezax/MonitumAqua",
            src: "Assets/png/projectsImages/1.png"
        },
        2:
            {
                href: "https://github.com/ivansanguezax/Tacaibot",
                src: "Assets/png/projectsImages/2.png"
            },
        3:
            {
                href: "https://github.com/ivansanguezax/QuetzalBot",
                src: "Assets/png/projectsImages/3.png"
            },
        4:
            {
                href: "https://github.com/ivansanguezax/OrbitarStudio",
                src: "Assets/png/projectsImages/4.png"
            },
        5:
            {
                href: "https://github.com/ivansanguezax/iCheck",
                src: "Assets/png/projectsImages/5.png"
            },
        6:
            {
                href: "https://github.com/ivansanguezax/QuetzalBot",
                src: "Assets/png/projectsImages/6.png"
            }
    },
    "videos":{
        1:
        {
                href: "https://github.com/ivansanguezax/Tacaibot",
                src: "Assets/png/projectsImages/2.png"
           
        },
        2:
            {
                href: "https://github.com/ivansanguezax/MonitumAqua",
                src: "Assets/png/projectsImages/1.png"
            },
        3:
            {
                href: "https://github.com/ivansanguezax/OrbitarStudio",
                src: "Assets/png/projectsImages/4.png"
                
            },
        4:
            {
                href: "https://github.com/ivansanguezax/QuetzalBot",
                src: "Assets/png/projectsImages/3.png"
            },
        5:
            {
                href: "https://github.com/ivansanguezax/iCheck",
                src: "Assets/png/projectsImages/5.png"
            },
        6:
            {
                href: "https://github.com/ivansanguezax/QuetzalBot",
                src: "Assets/png/projectsImages/6.png"
            }
        },
    "design":{
        1:
        {
            href: "https://github.com/ivansanguezax/OrbitarStudio",
            src: "Assets/png/projectsImages/4.png"
            
        },
        2:
            {
                href: "https://github.com/ivansanguezax/Tacaibot",
                src: "Assets/png/projectsImages/2.png"
            },
        3:
            {
                href: "https://github.com/ivansanguezax/QuetzalBot",
                src: "Assets/png/projectsImages/6.png"
            },
        4:
            {
                href: "https://github.com/ivansanguezax/MonitumAqua",
                src: "Assets/png/projectsImages/1.png"
            },
        5:
            {
                href: "https://github.com/ivansanguezax/iCheck",
                src: "Assets/png/projectsImages/5.png"
            },
        6:
            {
                href: "https://github.com/ivansanguezax/QuetzalBot",
                src: "Assets/png/projectsImages/3.png"
                
            }
    }
};

window.cards = document.querySelectorAll(".item-portafolio");
const cardC = new CardCarousel(content,window.cards);

for (let index = 0; index < 3; index++) {
    console.log(document.querySelector(`#portfolio-nav-item-${index+1}`))
    document.querySelector(`#portfolio-nav-item-${index+1}`).addEventListener("click", () => cardC.changePage(index));
}

