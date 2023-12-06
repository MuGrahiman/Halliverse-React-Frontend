import React, { useEffect, useState } from "react";
import { Button, Container } from "../StyledComponents/globalStyles";
import Modal from "./Modal";
import UsersList from "./UsersList";
import styled from "styled-components";
import useDataValidation from "../Hooks/useDataValidation";
import { useDispatch, useSelector } from "react-redux";
import { creatTeam, fetchAllTeamsData } from "../Store/Actions";
import Card from "./Card";
const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem auto;
  /* background: ; */
  border-radius: 5px;
  overflow-y: auto;
`;
const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  border: 1px solid lightgray;
  border-radius: 5px;
  overflow-y: auto;
`;
const ModalAligner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const teamData = useSelector((state) => state.teamReducer);
  const [validData, ValidateData, clearValidateData] = useDataValidation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTeamsData());
  }, [dispatch]);

  const closeModal = () => setIsModalOpen(false);

  const handleCheckboxChange = (userId) => ValidateData(userId);

  const handleCheckedBox = (id) => {
   
    return validData.includes(id);
  };
  const submitData = () => {
    dispatch(creatTeam(validData));
    clearValidateData();
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Button onClick={() => setIsModalOpen(true)}>Make Your Team</Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalAligner>
          <Button bg="#de4242" onClick={closeModal}>
            Close
          </Button>
          <h2>Select Your Team</h2>
          <Button bg="#3498db" onClick={submitData}>
            Create Team
          </Button>
        </ModalAligner>

        <UsersList
          isOpen={isModalOpen}
          handleCheckbox={handleCheckboxChange}
          checkedBox={handleCheckedBox}
        />
      </Modal>
      <TeamContainer>
        {teamData?.data?.map((data) => (
          <TeamWrapper>
            {data?.TeamData?.map((team) => (
              <Card
                firstName={team?.first_name}
                lastName={team?.last_name}
                key={team?._id}
                title={team?.productName}
                image={team?.avatar}
                Domain={team?.domain}
                Email={team?.email}
                Gender={team?.gender}
                Avialable={team?.available}
              />
            ))}
          </TeamWrapper>
        ))}
      </TeamContainer>
    </Container>
  );
};

export default Team;
