import React, { useEffect, useState } from "react";
import "../styles/UserContent.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions/Actions";
import Spinner from "./Spinner";
import { Button } from "@mui/material";
import { DropdownButton, Dropdown } from "react-bootstrap";
import UserCard from "./UserCard";

function UserContent() {
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const [selectedUser, setSelectedUser] = useState([]);
  const [ascendingUsers, setAscendingUsers] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onUserSelect = (cardEventKey, objectKey) => {
    const user = users.find(
      (element) => element.name === objectKey.target.lastChild.data
    );
    const userIndex = users.findIndex(
      (element) => element.name === objectKey.target.lastChild.data
    );
    users.splice(userIndex, 1);
    setSelectedUser([...selectedUser, user]);
  };

  const removeUserCard = (email) => {
    const filteredUsers = selectedUser.filter(
      (element) => element.email !== email
    );
    const addUsertoDropDown = selectedUser.find(
      (element) => element.email === email
    );
    console.log(addUsertoDropDown, "addUsertoDropDown");
    if (window.confirm("Do you want to close this?")) {
      users.push(addUsertoDropDown);
      setSelectedUser(filteredUsers);
    }
  };

  const sortAscending = (value) => {
    setAscendingUsers(value);
  };

  const sortByCompany = (users, asc) => {
    if (asc) {
      return users.sort((a, b) => {
        if (a.company.name > b.company.name) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      return users.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
    }
  };

  return (
    <div>
      {loading ? (
        <h2>
          <Spinner />
        </h2>
      ) : (
        <div className="div1">
          <DropdownButton
            onSelect={onUserSelect}
            id="dropdown-basic-button"
            title="List of the users"
            variant="success"
          >
            {users?.map((user) => (
              <Dropdown.Item href="#"> {user.name}</Dropdown.Item>
            ))}
          </DropdownButton>

          <div className="div2">
            {ascendingUsers ? (
              <Button onClick={() => sortAscending(false)}> DESC </Button>
            ) : (
              <Button onClick={() => sortAscending(true)}> ASC </Button>
            )}
          </div>
        </div>
      )}

      <div className="div3">
        {sortByCompany(selectedUser, ascendingUsers)?.map((user) => (
          <UserCard removeCard={removeUserCard} {...user} />
        ))}
      </div>
    </div>
  );
}

export default UserContent;
