import React, {useEffect} from 'react'
const Section = ({index, currentVisible, setCurrentVisible, namesList}) => {
  // const [show, setShow] = useState(true)
  useEffect(() => {
    console.log(currentVisible)
  })
  const ok = index === currentVisible
  return (
    <>
      {ok ? (
        <button onClick={() => setCurrentVisible(null)}>Hide</button>
      ) : (
        <button onClick={() => setCurrentVisible(index)}>Show</button>
      )}
      {ok && (
        <div className="text">
          {namesList[index] + ' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
      )}
    </>
  )
}
export default Section
