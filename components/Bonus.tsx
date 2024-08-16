
type BonusProps = {
    special: boolean;

    text: string;
    title: string;
};
export default function Bonus({ special, text, title }: BonusProps) {
    return (
        <div className={`p-[1px] w-full h-auto ${special ? "gradient-background" : "bg-gray-600"} rounded-lg`}>
            <div className={`flex flex-col justify-center items-start gap-2 rounded-lg bg-gray-700  p-4 w-full z-50 relative`}>
                <div className="flex flex-row justify-between items-center w-full">
                    {special ?
                        <>
                            <div className="gradient-background rounded-sm py-1 px-2 text-white">
                                {title}
                            </div>
                            <Check />
                        </>
                        :
                        <>
                            <div className="bg-gradient-to-r from-white to-blue-200 rounded-sm py-1 px-2 text-black">
                                {title}
                            </div>
                            <Check />
                        </>
                    }

                </div>
                <p>{text}</p>
                <p className="text-white">Trades <span className="text-gray-500">&#8226;</span> LP</p>
            </div>
        </div>
    );
}
function Check() {
    return (
        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3.75C6.65625 3.75 4.53125 5 3.34375 7C2.1875 9.03125 2.1875 11.5 3.34375 13.5C4.53125 15.5312 6.65625 16.75 9 16.75C11.3125 16.75 13.4375 15.5312 14.625 13.5C15.7812 11.5 15.7812 9.03125 14.625 7C13.4375 5 11.3125 3.75 9 3.75ZM9 18.25C6.125 18.25 3.5 16.75 2.0625 14.25C0.625 11.7812 0.625 8.75 2.0625 6.25C3.5 3.78125 6.125 2.25 9 2.25C11.8438 2.25 14.4688 3.78125 15.9062 6.25C17.3438 8.75 17.3438 11.7812 15.9062 14.25C14.4688 16.75 11.8438 18.25 9 18.25ZM12.5312 8.78125L8.53125 12.7812L8 13.3125L7.46875 12.7812L5.46875 10.7812L4.9375 10.25L6 9.21875L6.53125 9.75L8 11.2188L11.4688 7.75L12 7.21875L13.0625 8.25L12.5312 8.78125Z" fill="#6FD572" />
        </svg>
    );
}