import Dropdown from "./Dropdown";
import "./styles.css";

const options = [
  {
    value: "purple",
    label: "Purple",
    bgColor: "rgba(128,0,128,0.5)",
    textColor: "rgba(128,0,128,1)",
  },
  {
    value: "red",
    label: "Red",
    bgColor: "rgba(255,0,0,0.5)",
    textColor: "rgba(255,0,0,1)",
  },
  {
    value: "orange",
    label: "Orange",
    bgColor: "rgba(255,165,0,0.5)",
    textColor: "rgba(255,165,0,1)",
  },
  {
    value: "green",
    label: "Green",
    bgColor: "rgba(0,128,0,0.5)",
    textColor: "rgba(0,128,0,1)",
  },
  {
    value: "slate",
    label: "Slate",
    bgColor: "rgba(112,128,144,0.5)",
    textColor: "rgba(112,128,144,1)",
  },
  {
    value: "silver",
    label: "Silver",
    bgColor: "rgba(192,192,192,0.5)",
    textColor: "rgba(192,192,192,1)",
  },
];

export default function App() {
  return (
    <div className='App'>
      <Dropdown
        isSearchable
        isMulti={true}
        placeHolder='Select...'
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
