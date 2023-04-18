import {motion} from 'framer-motion';

export default function Hero() {
    return (
        <section id='hero' className='max-w-container mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4'>
            <motion.h3 initial={{ y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration: 0.5, delay:0.6}} className='text-lg font-titleFont tracking-wide text-textGreen'>
                Hi, my name is
            </motion.h3>
            <motion.h1 initial={{ y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration: 0.5, delay:0.7}} className='text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col' >
                Asif Iqbal. <span className='text-textDark mt-2 lg:mt-4'>I build things for future digital world.</span>
            </motion.h1>
            <motion.p initial={{ y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration: 0.5, delay:0.8}} className='text-base md:max-w-[650px] text-textDark font-medium'>
                {" "}
                I am IT veteran with 15+ years of varied experience in cloud-based applications, enterprise software, backend architecture and development. Mortgage, Telecom, Entertainment, Consumer Electronics and eCommerce are some of the vertical industries I have worked for. {" "}
                <a href=''>
                    <span>Learn More</span>
                </a>
            </motion.p>
        </section>
    )
}