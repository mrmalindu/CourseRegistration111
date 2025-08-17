import Table from 'react-bootstrap/Table';

export const CourseMaterial = () =>{
    const tblHeaders =[
      "Material Id",
      "File Name",
      "Material Name",
      "Material ",
      "Upload Time",
      "Course Id",
      "Option"
    ]
    return(
        <>
        <Table striped bordered hover>
        <thead>
          <tr>
            {tblHeaders.map((headings,index)=>(
                   <th key={index}>{headings}</th>
            ))};
         </tr>
        </thead>
        <tbody>
          <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}