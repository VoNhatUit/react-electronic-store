import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Button, 
    Rating, 
    TablePagination,

} from '@mui/material';
import { useTable } from "../hooks/useTable";

type props = {
    id: number;
    title: string;
    brand: string;
    rating: number;
    price: number;
  };

function ElectronicTable({link, count} : {link:string, count:number}){
    const { dataSource, page, limit, setPage, setLimit } = useTable({
        // url: 'https://jsonplaceholder.typicode.com/albums'
        url: `${link}`
      });
    const handleChangePage = (e:React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage); // MUI pagination starts at 0, your API starts at 1
      };
    
      const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
        setLimit(parseInt(e.target.value, 10));
        setPage(0); // Reset to the first page
      };
    return (
        <>
            <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Price($)</TableCell>
                <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

            {dataSource.map((item : props) => (
                <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell> <Rating value={item.rating} readOnly/> </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary">CHECKOUT</Button>
                </TableCell>
                </TableRow>
            ))}
                
                </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={count}
                page={page}
                rowsPerPage={limit}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                
            />
        </>
    )
}
export default ElectronicTable