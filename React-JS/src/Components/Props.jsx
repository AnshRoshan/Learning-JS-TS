import PropTypes from "prop-types"
import { useState } from "react"


function Props({ title, Component, children }) {

    // return createElement("div", null, createElement("p", null, "Username: "), createElement("div", null, createElement("p", null, "Email: ", createElement("span", null, " ")), createElement("button", null), createElement("section", null, createElement("ul", null, createElement("li", null, "Item 1"), createElement("li", null, "Item 2")))))

    const [visible, setVisible] = useState(false)
    const changeVisible = () => {
        setVisible(!visible)
    }

    return (

        <div className="bg-slate-300 p-4 text-xl m-4 rounded-xl">
            <button className={`text-center text-3xl font-semibold mb-4 pb-4 border-black w-full ${visible ? " border-b-4" : "border-4 shadow-lg shadow-purple-400 rounded-lg"}`} onClick={() => changeVisible()}>{title}</button>
            {visible && <Component />}
            {visible && children}
        </div >
    )

}

export default Props

Props.propTypes = {
    title: PropTypes.string.isRequired,
    Component: PropTypes.elementType.isRequired,
    children: PropTypes.element
}
