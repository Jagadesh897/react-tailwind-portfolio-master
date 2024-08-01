import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hello! My name is S Jagadesh, and I am a passionate Full Stack Web Developer. I specialize in creating beautiful, responsive websites using modern technologies.',
        line2: 'On the frontend, I am proficient in React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, and more. For the backend, I have experience with Node.js, Express.js, MongoDB, and Mongoose. This combination allows me to build dynamic user interfaces and robust server-side applications.',
        line3: 'I have practical experience through an internship at Internzy as a Full Stack Developer. I have completed projects like a user movie recommendation application and a payment application using the MERN stack. Currently, I am pursuing a B.Tech in IT at Jeppiaar Institute of Technology, continually enhancing my web development skills.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}