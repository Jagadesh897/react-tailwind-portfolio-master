import websiteImg1 from '../assets/Netflix-Gpt.png';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/PaymentApplication.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Build a Netflix-GPT and  User Movie Recommendations Using OpenAI',
                link: 'https://github.com/Jagadesh897/Netflix-Gpt'
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce website using  Swiggy API, Built with React js & Tailwind Css',
                link: 'https://github.com/Jagadesh897/Food-vila'
            },
            {
                image: websiteImg3,
                description: 'Basic Transaction Web Application Using Mern Stack',
                link: 'https://github.com/Jagadesh897/PaybyDay'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and Tailwind CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}