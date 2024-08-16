import BoardRow from "@/components/BoardRow";
import Bonus from "@/components/Bonus";
import Gap from "@/components/Gap";
import MyPoints from "@/components/MyPoints";
import PointsCard from "@/components/PointsCard";

const defaultText = "Lorem ipsum is a default filler test that is used by *anyone* who doesn't need focus on text.";
const data = Array.from({ length: 10 }).map(() => {
  return {
    address: "HAPD.23EF",
    lp: 100,
    trade: 100,
    referral: 100,
    total: 100,
  };
});
export default function Home() {
  return (
    <main className="flex flex-row justify-center items-center gap-4 w-screen h-screen p-4">
      <div className="flex flex-col justify-start items-center gap-2 w-[70%] h-full">
        <p className="text-white font-bold w-full text-left text-3xl">Active Achievements</p>
        <div className="grid grid-cols-3 place-items-center items-center gap-4 w-full">
          <PointsCard title="Points Card" text={defaultText} color="yellow" highlight="green" points={4} />
          <PointsCard title="Points Card" text={defaultText} color="red" highlight="red" points={4} />
          <PointsCard title="Points Card" text={defaultText} color="yellow" highlight="green" points={4} />
        </div>
        <div className="h-4" />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-row justify-center items-center w-full">
            <p className="w-[2%]">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.375 5C2.69531 5 2.08594 4.64844 1.73438 4.0625C1.40625 3.5 1.40625 2.77344 1.73438 2.1875C2.08594 1.625 2.69531 1.25 3.375 1.25C4.03125 1.25 4.64062 1.625 4.99219 2.1875C5.32031 2.77344 5.32031 3.5 4.99219 4.0625C4.64062 4.64844 4.03125 5 3.375 5ZM12 5C11.3203 5 10.7109 4.64844 10.3594 4.0625C10.0312 3.5 10.0312 2.77344 10.3594 2.1875C10.7109 1.625 11.3203 1.25 12 1.25C12.6562 1.25 13.2656 1.625 13.6172 2.1875C13.9453 2.77344 13.9453 3.5 13.6172 4.0625C13.2656 4.64844 12.6562 5 12 5ZM1.125 5.75H4.59375C4.52344 6.00781 4.5 6.24219 4.5 6.5C4.5 7.41406 4.875 8.21094 5.50781 8.75H0L1.125 5.75ZM15 8.75H9.46875C10.1016 8.21094 10.5 7.41406 10.5 6.5C10.5 6.24219 10.4531 6.00781 10.4062 5.75H13.875L15 8.75ZM7.5 5.375C7.07812 5.375 6.72656 5.60938 6.51562 5.9375C6.30469 6.28906 6.30469 6.73438 6.51562 7.0625C6.72656 7.41406 7.07812 7.625 7.5 7.625C7.89844 7.625 8.25 7.41406 8.46094 7.0625C8.67188 6.73438 8.67188 6.28906 8.46094 5.9375C8.25 5.60938 7.89844 5.375 7.5 5.375ZM7.5 8.75C6.67969 8.75 5.95312 8.32812 5.53125 7.625C5.13281 6.94531 5.13281 6.07812 5.53125 5.375C5.95312 4.69531 6.67969 4.25 7.5 4.25C8.29688 4.25 9.02344 4.69531 9.44531 5.375C9.84375 6.07812 9.84375 6.94531 9.44531 7.625C9.02344 8.32812 8.29688 8.75 7.5 8.75ZM4.94531 10.625L4.5 12.125H10.4766L10.0312 10.625H4.94531ZM10.875 9.5L11.6484 12.125L12 13.25H10.8047H4.17188H3L3.32812 12.125L4.125 9.5H10.875Z" fill="#9B9C9D" />
              </svg>
            </p>
            <div className="grid grid-cols-5 place-items-center items-center w-full">
              <p className="text-white w-full text-left">{data.length}</p>
              <p className="w-full text-left">LP</p>
              <p className="w-full text-left">Trade</p>
              <p className="w-full text-left">Referral</p>
              <p className="w-full text-right">Trade</p>
            </div>
          </div>
          <Gap />
          {data.map((data, i) => {
            return (
              <>
                <BoardRow num={i + 1} data={data} key={i} />
                <Gap />
              </>
            );
          })

          }
        </div>
      </div>
      <div className="w-[30%] flex flex-col justify-start overflow-y-auto items-center gap-4  h-full">
        <MyPoints points={100000000000} />
        <Bonus special={true} text={defaultText} title="+5% TENSORIANS" />
        <Bonus special={false} text={defaultText} title="+10% SNAPSHOT 2.0+" />
      </div>
    </main>
  );
}

