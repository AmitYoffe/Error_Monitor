interface IAgenciesItem {
  agency: string;
  timeRecieved: string;
  info: object;
  //   ??need to check db??
}

const status = 'all good'
// const status = 'problematic'
// const status = 'very bad'

let bgColor = '#4ade80';

if (status !== 'all good') {
  if (status === 'problematic') {
    bgColor = "#fdba74";
  } else {
    bgColor = "#dc2626";
  }
}

export default function AgencyItem({ agency, timeRecieved, info }: IAgenciesItem) {
  return (
    <div className="flex-column flex justify-center">
      <div className="flex-column flex gap-6 border-2 p-3" style={{ background: bgColor }}>
        <div className="gap-6">
          <p className="pb-2 text-center font-bold min-w-72">{agency}</p>
          <p>{`last time received: ${timeRecieved}`}</p>
          <p>{`info: ${JSON.stringify(info)}`}</p>
        </div>
      </div>
    </div>
  );
}
