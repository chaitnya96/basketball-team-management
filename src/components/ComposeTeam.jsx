import { ErrorMessage, FormikProvider, useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { toast } from "react-toastify";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  height: Yup.number()
    .required("Height is Required")
    .min(1,"Must be greater than 0")
    .typeError("Height must be a number"),
  position: Yup.array()
    .min(1, "Position is Required")
    .required("Position is Required"),
});
function ComposeTeam({ onCreate }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      height: "",
      position: [],
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      onCreate(values);
      formik.resetForm();
      toast.success("Player has been added to list");
    },
  });
  const options = [
    { label: "point guard (PG)", value: "PG" },
    { label: "shooting guard (SG)", value: "SG" },
    { label: "small forward (SF)", value: "SF" },
    { label: "power forward (PF)", value: "PF" },
    { label: "center (C)", value: "C" },
  ];
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
    values,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form className="my-4">
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className={errors.firstName && touched.firstName && "border-danger"}
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-danger"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className={errors.lastName && touched.lastName && "border-danger"}
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Last Name"
            value={values.lastName}
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-danger"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Height</Form.Label>
          <Form.Control
            className={errors.height && touched.height && "border-danger"}
            name="height"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Enter Height"
            value={values.height}
          />
          <ErrorMessage name="height" component="div" className="text-danger" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Position</Form.Label>
          <Select
            className={
              errors.position && touched.position && "custom-border-danger"
            }
            name="position"
            placeholder="Select Position"
            options={options}
            isMulti
            onChange={(value) => setFieldValue("position", value)}
            onBlur={handleBlur}
            value={values.position}
          />
          <ErrorMessage
            name="position"
            component="div"
            className="text-danger"
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Save
        </Button>
      </Form>
    </FormikProvider>
  );
}

export default ComposeTeam;
