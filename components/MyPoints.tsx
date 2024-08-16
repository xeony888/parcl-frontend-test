import Gap from "./Gap";
import { commas } from "./utils";

type MyPointsProps = {
    points: number;
};
export default function MyPoints({ points }: MyPointsProps) {
    return (
        <div className="flex flex-col justify-center items-start w-full p-4 border border-gray-500 rounded-lg">
            <p className="text-white">My Points</p>
            <Gap />
            <div className="flex flex-row justify-between items-center gap-2 w-full">
                <div className="flex flex-row justify-center items-center">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11.5033L2.73686 12.7197C5.37236 13.8872 7.49352 15.9709 8.70615 18.5876L10.2904 22.0002L11.8747 18.5876C13.0874 15.9746 15.2085 13.891 17.844 12.7197L20.5809 11.5033L17.844 10.2869C15.2085 9.11932 13.0874 7.0357 11.8747 4.41897L10.2904 1.00635L8.70615 4.41897C7.49352 7.03194 5.37236 9.11556 2.73686 10.2869L0 11.5033Z" fill="#FAE24D" />
                        <path d="M14.916 2.94334L15.6856 3.28498C16.4252 3.6116 17.0184 4.19727 17.36 4.92935L17.8068 5.88669L18.2536 4.92935C18.5952 4.19727 19.1884 3.6116 19.928 3.28498L20.6976 2.94334L19.928 2.60171C19.1884 2.27509 18.5952 1.68942 18.2536 0.957336L17.8068 0L17.36 0.957336C17.0184 1.68942 16.4252 2.27509 15.6856 2.60171L14.916 2.94334Z" fill="#FAE24D" />
                    </svg>
                    <p><span className="text-3xl text-white mr-1">{`${commas(points)}`}</span>pts</p>
                </div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_43906_1951)" />
                    <defs>
                        <pattern id="pattern0_43906_1951" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_43906_1951" transform="scale(0.025)" />
                        </pattern>
                        <image id="image0_43906_1951" width="40" height="40" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAQlJREFUWEftWLENAjEMvFBRswETgICShgEQ01AiCkqG+g0QLEJBRQUo7ecs3csIUdyXlp1c7s+O4zJdH9/ofbfnpW/C5jxqbBlDt3814bPxorEVAwxoNoMZ/dVYmcFlt2uSRN38fphLrpPTVfJjTsUAAZjBSEA/0aBaqBlI9XZhGcvWS90kBgjADEbJlNIgK9RsQTUh1CtD3YPeJGqwCob5qXsY4BBdMhn9P4OP1VZqt9jp1OzMxBYDBOiLUGXfDNYsTmmQtVusNGS6Yrae2kvSh7sBAjCDmUahxsoMskL97dZKPQyrjbQOGuCAiZcZVPUXTbzk4ZHaomfa+9R0ywADLfgXR+JXa+0H5acZQV7bQfUAAAAASUVORK5CYII=" />
                    </defs>
                </svg>

            </div>
        </div>
    );
}

