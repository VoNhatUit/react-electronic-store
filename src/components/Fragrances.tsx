import ElectronicTable from "./ElectronicTable";

const link = 'https://66ac3159f009b9d5c7314a1c.mockapi.io/api/fragrance'
function Fragrances() {

  return (
    <>
      <ElectronicTable link={link} count={50}/>
    </>
  )
}

export default Fragrances