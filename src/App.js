import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useLocalStorage } from "react-use";
import QuotationTable from "./QuotationTable";
import "./App.css";

function App() {
  const itemRef = useRef();
  const ppuRef = useRef();
  const qtyRef = useRef();
  const dscRef = useRef();

  const [dataItems, setDataItems] = useLocalStorage("dataItems", []);
  const [dupDataItems, setDupDataItems] = useLocalStorage("dupDataItems", []);

  const dummyProducts = [
    { id: "02", name: "A", price: 4 },
    { id: "01", name: "A-", price: 3.75 },
    { id: "03", name: "B+", price: 3.25 },
    { id: "04", name: "B", price: 3 },
    { id: "05", name: "B-", price: 2.75 },
    { id: "06", name: "C+", price: 2.25 },
    { id: "07", name: "C", price: 2 },
    { id: "08", name: "C-", price: 1.75 },
    { id: "09", name: "D", price: 1 },
    { id: "10", name: "F", price: 0 },
  ];

  const dummySubjects = [
    {id: "code", title: "name", group: "groupName4"}
  ]





  const addItem = () => {
    // if (parseFloat(dscRef.current.value) > parseFloat(ppuRef.current.value)) {
    //   alert("Discount exceeds amount: Please try again!");
    //   return;
    // }

    // if (
    //   qtyRef.current.value === "0" ||
    //   qtyRef.current.value === "" ||
    //   qtyRef.current.value === " "
    // ) {
    //   alert("Cannot log empty quantity");
    //   return;
    // }

    const pid = itemRef.current.value;
    const product = dummyProducts.find((e) => e.id === pid);

    // if (Object.keys(dataItems).length > 0) {
    //   for (var key in dataItems) {
    //     if (
    //       product.name !== dataItems[key].item &&
    //       product.price !== dataItems[key].price
    //     ) {
    //       dataItems[key].qty =
    //         parseFloat(qtyRef.current.value) + parseFloat(dataItems[key].qty);
    //       dataItems[key].dsc =
    //         parseFloat(dscRef.current.value) + parseFloat(dataItems[key].dsc);
    //       setDataItems([...dataItems]);
    //     } else {
    //       setDupDataItems([...dupDataItems]);
    //     }
    //   }
    // }

    var itemObj = {
      item: product.name,
      ppu: ppuRef.current.value,
      qty: qtyRef.current.value,
      dsc: dscRef.current.value,
    };

    dataItems.push(itemObj);
    setDataItems([...dataItems]);
    console.log(dataItems[1].item);
    console.log(itemRef.current.value);
    console.log(dataItems);
  };

  const productChange = (e) => {
    const pid = itemRef.current.value;
    const product = dummyProducts.find((e) => e.id === pid);
    ppuRef.current.value = product.price;
  };

  const options = dummyProducts.map((v) => {
    return <option value={v.id}>{v.name}</option>;
  });

  return (
    <Container style={{ width: "50%", margin: "30px" }}>
      <Row>
        <h1>Morgan 6135229</h1>
        <Col>
          <Row>
            <Col>
              Subject
              {/* <input type="text" ref={itemRef} /> */}
              <Form.Select ref={itemRef} onChange={productChange}>
                {options}
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              Grade
              {/* <input type="text" ref={itemRef} /> */}
              <Form.Select ref={itemRef} onChange={productChange}>
                {options}
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="app-label">weight</Form.Label>
              <Form.Control disabled={false} type="number" ref={ppuRef} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="app-label">Semester</Form.Label>
              <Form.Control type="number" ref={dscRef} defaultValue ={1}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="app-label">Year</Form.Label>
              <Form.Control type="number" ref={qtyRef} />
            </Col>
          </Row>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={addItem}>
              Add
            </Button>
          </div>
          {/* {JSON.stringify(dataItems)} */}
        </Col>
        <Col md={8}>
          <QuotationTable data={dataItems} setDataItems={setDataItems} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
