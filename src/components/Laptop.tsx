import ElectronicTable from "./ElectronicTable";

const link = "https://66a9fc2b613eced4eba713e8.mockapi.io/electronic/laptop"
function Laptop() {

  return (
    <>
      <ElectronicTable link={link} count={50}/>
    </>
  )
}

export default Laptop