import EventHandling from "./Components/EventHandling"
import Props from "./Components/Props"
import PropsDrill from "./Components/PropsDrill"
import RenderDynamic from "./Components/RenderDynamic"


function App() {
  const list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  const marks = {
    maths: 90,
    physics: 80,
    chemistry: 70
  }
  const info = [{
    name: "Address",
    value: "Bhagalpur"
  },
  {
    name: "Phone",
    value: "1234567890"
  },
  {
    name: "Martial Status",
    value: "Single"
  }]


  return (
    <div>
      <h1 className="text-3xl font-bold">App is Root Components</h1>

      {/* Here using the info={info} is not required , short hand is working with spread only but avoid it !!! */}
      {/* <Props
        title="Props and prop-types "
        username="@anshroshan"
        email="ansh@roshan.com"
        islogged={true}
        age={22}
        // Spread props directly when structure is known:
        {...list}
        {...marks}
        // Spread info prop cautiously (consider alternatives):
        {...info}
      /> */}
      <Props title="Props and prop-types " Component={() => <PropsDrill username={"@anshroshan"} email={"ansh@roshan.com"} islogged={true} age={22} list={list} marks={marks} info={info} />} />
      <Props title={"Dynamically Render The Components"} Component={RenderDynamic} />
      <Props title={"Event Handling"} Component={EventHandling} />
    </div >
  )
}
export default App