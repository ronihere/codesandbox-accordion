import React, {useState} from 'react'
import Section from './Section'

const Acc = () => {
  const namesList = ['First', 'Second', 'Third']
  const [currentVisible, setCurrentVisible] = useState(null)
  return (
    <>
      <div className="container">
        {namesList.map((name, index) => (
          <Section
            key={name}
            index={index}
            namesList={namesList}
            currentVisible={currentVisible}
            setCurrentVisible={setCurrentVisible}
          />
        ))}
      </div>
      {/* <Section
        name="First"
        currentVisible={currentVisible}
        setCurrentVisible={setCurrentVisible}
      />
      <br />
      <Section
        name="Second"
        currentVisible={currentVisible}
        setCurrentVisible={setCurrentVisible}
      />
      <br />
      <Section
        name="Third"
        currentVisible={currentVisible}
        setCurrentVisible={setCurrentVisible}
      /> */}
    </>
  )
}
export default Acc
