import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ListDataService from "../services/list.services";

const List = ({ getListId }) => {
  const [Lists, setLists] = useState([]);
  useEffect(() => {
    getLists();
  }, []);

  const getLists = async () => {
    const data = await ListDataService.getAllLists();
    console.log(data.docs);
    setLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ListDataService.deleteList(id);
    getLists();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getLists}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(Lists, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Lists.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.description}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getListId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete mx-2"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default List;