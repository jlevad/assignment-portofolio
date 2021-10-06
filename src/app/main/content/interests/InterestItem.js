const InterestItem = (props) => {

  return(
    <div className="rounded shadow p-5 m-5 bg-blue-300">
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

InterestItem.defaultProps = {
  title: "Lorem Ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export default InterestItem;
