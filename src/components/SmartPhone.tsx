import ElectronicTable from "./ElectronicTable";

const link = "https://66a9fc2b613eced4eba713e8.mockapi.io/electronic/smartphone"
function SmartPhone() {
  
  return (
    <>
      <ElectronicTable link={link} count={50}/>
    </>
  )
}

export default SmartPhone