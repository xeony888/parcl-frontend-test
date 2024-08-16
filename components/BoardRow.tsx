

function SVG() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.161133 5.75024L1.63569 6.4056C3.05564 7.03467 4.19847 8.15727 4.85181 9.56711L5.7054 11.4058L6.55899 9.56711C7.21232 8.15929 8.35516 7.03669 9.7751 6.4056L11.2497 5.75024L9.7751 5.09488C8.35516 4.46581 7.21232 3.34321 6.55899 1.93337L5.7054 0.0947266L4.85181 1.93337C4.19847 3.34119 3.05564 4.46379 1.63569 5.09488L0.161133 5.75024Z" fill="#FAE24D" />
        </svg>
    );
}
export default function BoardRow({ data, num }: { data: any, num: number; }) {
    return (
        <div className="w-full flex flex-row justify-center items-center py-2">
            <p className="w-[2%]">{num}</p>
            <div className="grid grid-cols-5 place-items-center items-center w-full">
                <p className="text-white text-left w-full px-5">{data.address}</p>
                <div className="flex flex-row justify-start items-center w-full">
                    <SVG />
                    <p>{data.lp}</p>
                </div>
                <div className="flex flex-row justify-start items-center w-full">
                    <SVG />
                    <p>{data.trade}</p>
                </div>
                <div className="flex flex-row justify-start items-center w-full">
                    <SVG />
                    <p>{data.referral}</p>
                </div>
                <div className="w-full flex flex-row justify-end items-center">
                    <SVG />
                    <p>{data.total}</p>
                </div>
            </div>
        </div>
    );
}