import HelpDialog from "./HelpDialog";
import StatisticsDialog from "./StatisticsDialog";

const Header = () => {
  return (
    <div className="h-[70px] w-[50%] p-2 bg-gray-100 rounded-[15px] flex justify-between items-center">
      <HelpDialog />
      <div className="ml-9">
        <h1 className="text-xl font-bold">Wordle</h1>
      </div>
      <div className="flex gap-1">
        <StatisticsDialog />
      </div>
    </div>
  );
};

export default Header;
