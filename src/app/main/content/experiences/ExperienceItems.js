const ExperienceItems = (props) => {
  const { header, description, period } = props;
  return (
    <div className="rounded shadow p-5 m-5 bg-blue-300">
      <h3 className="font-bold text-lg">{header}</h3>
      <p>{description}</p>
      <p>{period}</p>
    </div>
  )
}

export default ExperienceItems;
