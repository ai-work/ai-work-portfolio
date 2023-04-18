import {TbBrandGithub} from 'react-icons/tb';
import {SlSocialTwitter, SlSocialLinkedin} from 'react-icons/sl';

export default function LeftSide() {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
            <div className='flex flex-col gap-4'>
                <a href='https://github.com/ai-work' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hoverL:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandGithub />
                    </span>
                </a>
            </div>
            <div className='flex flex-col gap-4'>
                <a href='https://www.linkedin.com/in/asif-iqbal-8056026' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hoverL:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialLinkedin />
                    </span>
                </a>
            </div>
            <div className='flex flex-col gap-4'>
                <a href='https://twitter.com/doandwrite' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hoverL:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialTwitter />
                    </span>
                </a>
            </div>
            <div className='w-[2px] h-32 bg-textDark'></div>
        </div>
    );
}