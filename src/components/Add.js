import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ListDataService from "../services/list.services";

const Add = ({ id, setListId }) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || description === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newList = {
      title,
      description,
    };
    console.log(newList);

    try {
      if (id !== undefined && id !== "") {
        await ListDataService.updateList(id, newList);
        setListId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ListDataService.addLists(newList);
        setMessage({ error: false, msg: "New List added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setdescription("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ListDataService.getList(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setdescription(docSnap.data().description);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formListTitle">
            <InputGroup>
              <InputGroup.Text id="formListTitle">Task TItle</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Task TItle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formListdescription">
            <InputGroup>
              <InputGroup.Text id="formListdescription">Task Description</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Add;