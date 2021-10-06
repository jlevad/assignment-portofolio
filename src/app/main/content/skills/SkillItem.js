const SkillItem = (props) => {
  const { name, persent } = props;

  return (
    <div className="m-5">
      <p className="text-lg font-semibold">{name}</p>
      <div className="flex items-center">
        <div className="h-5 rounded-full w-full bg-blue-100">
          <div
            style={{ width: `${persent}%` }}
            className="bg-blue-300 h-5 rounded-full"
          ></div>
        </div>
        <p className="text-lg">{persent}%</p>
      </div>
    </div>
  );
};

export default SkillItem;
