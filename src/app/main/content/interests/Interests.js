import InterestItem from "./InterestItem";

const Interests = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4" id="interests">
        {/* <p className="text-lg text-gray-500 font-bold m-6">Interests</p> */}
        <InterestItem />
        <InterestItem />
        <InterestItem />
      </div>
    </>
  )
}

export default Interests;