import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import './App.css';

function QuotationTable({ data, setDataItems }) {
  const [dataRows, setDataRows] = useState();
  const [total, setTotal] = useState(0);
  const [totaldsc, setTotalDsc] = useState(0);

  useEffect(() => {
    let sum = 0;
    let dscSum =0;
    const z = data.map((v, i) => {
      let amount = v.qty * v.ppu - v.dsc;
      sum += amount;
      dscSum += parseInt(v.dsc);
      return (
        <tr key={i}>
          <td>{v.item}</td>
          <td>{v.item}</td>
          <td>{v.ppu}</td>
          <td>{v.dsc}</td>
          <td>{amount}</td>
        </tr>
      );
    });

    setDataRows(z);
    setTotal(sum);
    // setTotalDsc(dscSum);
  }, [data]);




  const clearTable = () => {
    setDataItems([]);
    setDataRows([]);
  };

  return (
    <div>
      <h1>Quotation</h1>
      <Button onClick={clearTable} variant="outline-dark">
        Clear
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="table-header">Subject</th>
            <th className="table-header-item">Grade</th>
            <th className="table-header">Weight</th>
            <th className="table-header">Semester</th>
            <th className="table-header">Year</th>
          </tr>
        </thead>
        <tbody>{dataRows}</tbody>
        <tfoot>
          <tr>
            <td>
              GPA
            </td>
            <td>{total}</td>
            <td>
              Cumulative
            </td>
            <td>{totaldsc}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default QuotationTable;
