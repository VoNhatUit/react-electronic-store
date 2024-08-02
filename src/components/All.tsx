import ElectronicTable from "./ElectronicTable";


const link = 'https://66ac3159f009b9d5c7314a1c.mockapi.io/api/electronic'

function All(){

    return (
        <>
          <ElectronicTable link={link} count={100}/>
        </>
      )
}
export default All