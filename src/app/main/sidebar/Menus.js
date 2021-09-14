const listItem = [
  {
    item: "Home",
    href: "#home"
  },
  {
    item: "About",
    href: "#about"
  },
  {
    item: "Experience",
    href: "#experience"
  },
  {
    item: "Skills",
    href: "#skills"
  },
  {
    item: "Interest",
    href: "#interests"
  },
  {
    item: "Awards",
    href: "#awards"
  },
]

const Menus = () => {
  return (
    <ul class="space-y-2 text-sm">
      {listItem.map((items) => (
        <li>
          <a href={items.href} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">
            <span>{items.item}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Menus;