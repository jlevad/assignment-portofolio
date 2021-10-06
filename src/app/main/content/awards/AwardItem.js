const AwardItem = (props) => {
  const { title, link } = props;
  return (
    <div className="rounded shadow p-5 m-5 bg-blue-300 flex justify-center items-center flex-col">
      <p className="m-10 text-xl font-bold">{title}</p>
      <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href={link} target="_blank" rel="noopener noreferrer" >view</a>
      </div>
    </div>
  );
};

export default AwardItem;
