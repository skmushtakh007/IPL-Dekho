/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function InPageNavigation({ teams, children }) {
  const [index, setIndex] = useState(0);


  let tabLineRef = useRef();  // to set width of button;
  let btnRef = useRef()
  // to set width equals to the button
  function toggleBtn(btn, i) {
    // console.log(tabLineRef.current)

    // note if we want to access any TRBL simply we have to set position
    let { offsetWidth, offsetLeft } = btn;
    tabLineRef.current.style.width = offsetWidth + "px"
    tabLineRef.current.style.left = offsetLeft + "px"
    setIndex(i)
  }
  // to remove line(hr) on first render
  useEffect(() => {
    toggleBtn(btnRef.current, 0)
  }, [])
  return (
    <div>
      {teams.length > 2 ?
        teams.map(({ path, title }, i) =>
        (
          <Link to={path}>
            <button
              ref={i == 0 ? btnRef : null}
              key={i}
              className={"bg-gray-200  mr-1 px-10 " + (index == i ? "text-black" : "text-gray-400")}
              onClick={(e) => toggleBtn(e.target, i)}>
              {title}
            </button>
          </Link>
        ))
        :
        teams.map((data, i) =>
        (
          <button
            ref={i == 0 ? btnRef : null}
            key={i}
            className={"bg-gray-200  mr-1 px-10 " + (index == i ? "text-black" : "text-gray-400")}
            onClick={(e) => toggleBtn(e.target, i)}>

            {data}
          </button>
        ))
      }
      <hr
        ref={tabLineRef} className="border-black relative"
      />

      {teams.length > 2 ? "" : children[index]}
    </div>
  )
}
