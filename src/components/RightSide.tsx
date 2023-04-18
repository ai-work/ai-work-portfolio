export default function RightSide() {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
            <a href='mailto:asifgvs@gmail.com'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hoverL:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <p className='text-sm rotate-90 w-72 -tracking-wide text-textGreen'>asifgvs@gmail.com</p>
                </span>
            </a>
            <div className='w-[2px] h-32 bg-textDark'></div>
        </div>
    );
}