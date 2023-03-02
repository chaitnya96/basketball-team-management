import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";

import { toast } from "react-toastify";

function Quarter({ teams, savedTeamState, setSavedTeamState }) {
  const [form, setForm] = useState(savedTeamState);
  const [isHaveDuplicateName, setIsHaveDuplicateName] = useState(false);
  const [isHaveDuplicatePositions, setIsHaveDuplicatePositions] =
    useState(false);
  useEffect(() => {
    setForm(savedTeamState);
  }, [savedTeamState]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: form,
    onSubmit: (values) => {
      if (!isHaveDuplicateName && !isHaveDuplicatePositions) {
        setSavedTeamState(values);
        toast.success("Players saved");
      }
    },
  });

  const { setFieldValue, handleBlur, values, handleSubmit } = formik;

  const { player1, player2, player3, player4, player5 } = formik.values;
  let players = [player1, player2, player3, player4, player5];
  const {
    player1Position,
    player2Position,
    player3Position,
    player4Position,
    player5Position,
  } = formik.values;
  let playerPositions = [
    player1Position,
    player2Position,
    player3Position,
    player4Position,
    player5Position,
  ];
  const checkIsUniqueName = (id) => {
    if (!id) return false;
    return players.filter((item) => item?.id && item.id == id).length > 1;
  };
  const checkIsUniquePosition = (position) => {
    if (!position) return false;
    return (
      playerPositions.filter((item) => item?.value && item.value == position)
        .length > 1
    );
  };
  useEffect(() => {
    if (
      checkIsUniqueName(player1?.id) ||
      checkIsUniqueName(player2?.id) ||
      checkIsUniqueName(player3?.id) ||
      checkIsUniqueName(player4?.id) ||
      checkIsUniqueName(player5?.id)
    ) {
      setIsHaveDuplicateName(true);
    } else {
      setIsHaveDuplicateName(false);
    }
  }, [players]);
  useEffect(() => {
    if (
      checkIsUniquePosition(player1Position?.value) ||
      checkIsUniquePosition(player2Position?.value) ||
      checkIsUniquePosition(player3Position?.value) ||
      checkIsUniquePosition(player4Position?.value) ||
      checkIsUniquePosition(player5Position?.value)
    ) {
      setIsHaveDuplicatePositions(true);
    } else {
      setIsHaveDuplicatePositions(false);
    }
  }, [playerPositions]);
  const names = teams?.map((item, index) => ({
    id: index + 1,
    label: `${item.firstName} ${item.lastName} (${item.height})`,
    value: item,
  }));

  return (
    <Container className="my-4">
      <Form>
        <Row>
          <Form.Group className="d-flex mb-3">
            <Col>
              <Select
                name="player1"
                onChange={(value) => setFieldValue("player1", value)}
                onBlur={handleBlur}
                options={names}
                placeholder="Select Player Name"
                value={player1}
                className={
                  checkIsUniqueName(player1?.id) && "custom-border-danger"
                }
              />
            </Col>
            <Col className="mx-4">
              <Select
                options={values.player1?.value?.position}
                onChange={(value) => setFieldValue("player1Position", value)}
                placeholder="Select Position"
                value={player1Position}
                className={
                  checkIsUniquePosition(values.player1Position?.value) &&
                  "custom-border-danger"
                }
              />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex mb-3">
            <Col>
              <Select
                name="player2"
                onChange={(value) => setFieldValue("player2", value)}
                onBlur={handleBlur}
                options={names}
                placeholder="Select Player Name"
                value={player2}
                className={
                  checkIsUniqueName(player2?.id) && "custom-border-danger"
                }
              />
            </Col>
            <Col className="mx-4">
              <Select
                options={values.player2?.value?.position}
                onChange={(value) => setFieldValue("player2Position", value)}
                placeholder="Select Position"
                value={player2Position}
                className={
                  checkIsUniquePosition(values.player2Position?.value) &&
                  "custom-border-danger"
                }
              />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex mb-3">
            <Col>
              <Select
                name="player3"
                onChange={(value) => setFieldValue("player3", value)}
                onBlur={handleBlur}
                options={names}
                placeholder="Select Player Name"
                value={player3}
                className={
                  checkIsUniqueName(player3?.id) && "custom-border-danger"
                }
              />
            </Col>
            <Col className="mx-4">
              <Select
                options={values.player3?.value?.position}
                onChange={(value) => setFieldValue("player3Position", value)}
                placeholder="Select Position"
                value={player3Position}
                className={
                  checkIsUniquePosition(values.player3Position?.value) &&
                  "custom-border-danger"
                }
              />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex mb-3">
            <Col>
              <Select
                name="player4"
                onChange={(value) => setFieldValue("player4", value)}
                onBlur={handleBlur}
                options={names}
                placeholder="Select Player Name"
                value={player4}
                className={
                  checkIsUniqueName(player4?.id) && "custom-border-danger"
                }
              />
            </Col>
            <Col className="mx-4">
              <Select
                options={values.player4?.value?.position}
                onChange={(value) => setFieldValue("player4Position", value)}
                placeholder="Select Position"
                value={player4Position}
                className={
                  checkIsUniquePosition(values.player4Position?.value) &&
                  "custom-border-danger"
                }
              />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex mb-3">
            <Col>
              <Select
                name="player5"
                onChange={(value) => setFieldValue("player5", value)}
                onBlur={handleBlur}
                options={names}
                placeholder="Select Player Name"
                value={player5}
                className={
                  checkIsUniqueName(player5?.id) && "custom-border-danger"
                }
              />
            </Col>
            <Col className="mx-4">
              <Select
                options={values.player5?.value?.position}
                onChange={(value) => setFieldValue("player5Position", value)}
                placeholder="Select Position"
                value={player5Position}
                className={
                  checkIsUniquePosition(values.player5Position?.value) &&
                  "custom-border-danger"
                }
              />
            </Col>
          </Form.Group>
          {isHaveDuplicateName && (
            <div class="text-danger mb-2">* Players can be selected only once</div>
          )}
          {isHaveDuplicatePositions && (
            <div class="text-danger mb-2">* Players positions must be unique</div>
          )}
        </Row>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Save Team
        </Button>
      </Form>
    </Container>
  );
}

export default Quarter;
