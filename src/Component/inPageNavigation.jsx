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
    <div className="w-full" >
      <div className={"bg-blue-500 w-full flex justify-between items-end" + (teams.length > 2 ? "h-[100px]":"h-[50px]")}>


        {teams.length > 2 ?
          teams.map(({ path, title }, i) =>
          (
            <Link to={path}>
              <button
                ref={i == 0 ? btnRef : null}
                key={i}
                className={"bg-gray-200/20 font-bold px-7 lg:px-16 py-5 text-sm hover:bg-gray-200/20 mr-1  " + (index == i ? "text-white bg-gray-200/20" : "text-gray-400")}
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
              className={" border border-gray-500 w-[50%] h-full bg-black mr-1 px-10 " + (index == i ? "text-white" : "text-gray-400")}
              onClick={(e) => toggleBtn(e.target, i)}>

              {data}
            </button>
          ))
        }
        <hr
          ref={tabLineRef} className="border-black border-2 absolute duration-300"
        />
      </div>

      {teams.length > 2 ? "" : children[index]}
    </div>
  )
}
