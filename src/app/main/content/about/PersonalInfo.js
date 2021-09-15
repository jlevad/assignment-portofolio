const dataPersonal = [
  {
    item: "Birthday",
    data: "27 Desember 1999"
  },
  {
    item: "Age",
    data: "22 Years Old"
  },
  {
    item: "Degree",
    data: "Bachelor of Computer Science"
  },
  {
    item: "City",
    data: "Tegal, Indonesia"
  },
  {
    item: "Email",
    data: "contact@miftakhussalam.com"
  },
  {
    item: "Phone",
    data: "+62 878787878"
  },
]

const PersonalInfo = () => {
  return (
    <div className="m-6">
      <p className="text-lg text-gray-500 font-bold">About Me</p>
      {dataPersonal.map((datas) => (
        <div className="flex m-4">
          <p className="font-bold w-32">{datas.item}</p>
          <p>: {datas.data}</p>
        </div>
      ))}
    </div>
  )
}

export default PersonalInfo;