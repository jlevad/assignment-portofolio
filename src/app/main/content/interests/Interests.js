import InterestItem from "./InterestItem";

const dataInterests = [
  {
    title: "Coding",
    content: " Sometimes called computer programming, is how we communicate with computers. Code tells a computer what actions to take, and writing code is like creating a set of instructions. By learning to write code, you can tell computers what to do or how to behave in a much faster way. You can use this skill to make websites and apps, process data, and do lots of other cool things."
  },
  {
    title: "Traveling",
    content: " At work you can find yourself sitting at your desk all day long. Booking that trip away is guaranteed to get you moving. Once the trip is booked, you’ll be motivated to get planning and get organized. You’ll have a goal to work towards and once you arrive at your destination, the best way to explore a new place is by foot. If you’re exploring a new place on foot, you’ll be surprised at how far you’ll walk - and you probably won’t even notice! You’ll be so busy taking everything in, it won’t feel like you’ve actually done a LOT of exercise."
  },
  {
    title: "Cooking",
    content: "Cooking is often done in a kitchen using a stove or an oven. It can also be done over a fire (for example, over a campfire or on a barbecue). The heat for cooking can be made in different ways. It can be from an open fire that burns wood or charcoal. It can be on a stove or in an oven that uses propane, natural gas, or electricity.There are several different ways to cook food. Boiling cooks food in hot water. Frying (deep or shallow) cooks food in hot butter, fat or oil. Baking and roasting cook food by surrounding it with hot air. Grilling means cooking food on a metal grill that has heat under it.People often cook meat by boiling, roasting, frying, or grilling it. Some foods such as bread or pastries are usually baked.Usually food is cooked in some kind of pot or pan. Sometimes people cook food by putting it directly into the fire, or by wrapping the food in leaves before they put it into the fire."
  },
]

const Interests = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4" id="interests">
        {/* <p className="text-lg text-gray-500 font-bold m-6">Interests</p> */}
        {dataInterests.map((data) => (
          <InterestItem title={data.title} content={data.content} />
        ))}
      </div>
    </>
  )
}

export default Interests;