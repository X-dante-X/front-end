import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState, useContext } from "react";
import AppContext from '../data/AppContext';
import { useNavigate } from "react-router-dom";

const confirmPasswordField = "confirmPassword";
const passwordField = "password";
const emailField = "email";

function FormPageAdd() {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const items = context.items;
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    console.log("Submitting...");
    const data = new FormData(e.target);

    if (data.get(confirmPasswordField) !== data.get(passwordField)) {
      setErrors([...errors, "Password and confirmed password do not match!"]);
      return;
    }

    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSending(false);

    const newItem = {
      id: items.length + 1, 
      name: data.get(emailField), 
      birth: data.get("birth"), 
      eyes: data.get("eyes"),
      rating: data.get("rating")
    };

    dispatch({ type: "add", item: newItem });

    console.log(items);
    for (let key of data.keys()) {
      e.target[key].value = "";
    }

    setErrors([]);
    navigate("/lab4");
  };

  return (
    <>
      <h1>Register</h1>

      <div className="text-danger">
        {errors.map((e, i) => <p key={i}>{e}</p>)}
      </div>

      <Form className="text-primary" onSubmit={onSubmitFunction}>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <FormControl
            required
            id={emailField}
            type="email"
            name={emailField}
            className="text-lg"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">Input valid email</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={passwordField}>Password</Form.Label>
          <FormControl
            required
            id={passwordField}
            type="password"
            minLength={6}
            name={passwordField}
            placeholder="Enter your password"
          />
          <Form.Text className="text-muted">
            Input minimum 6 characters, one digit, and one special character
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="confirmPassword">Confirm password</Form.Label>
          <FormControl
            required
            id={confirmPasswordField}
            type="password"
            name={confirmPasswordField}
            minLength={6}
            placeholder="Re-enter your password"
          />
          <Form.Text className="text-muted">
            Confirm your password, it should be the same as above!
          </Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="birth">Birth</Form.Label>
          <FormControl
            required
            id="birth"
            type="date"
            name="birth"
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="eyes">Eyes</Form.Label>
          <FormControl
            required
            id="eyes"
            type="text"
            name="eyes"
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rating">Rating</Form.Label>
          <FormControl
            required
            id="rating"
            type="number"
            name="rating"
          />
          <Form.Text className="text-muted">
            Confirm your password, it should be the same as above!
          </Form.Text>
        </Form.Group>

        <div className="d-grid">
          <Button disabled={isSending} type="submit" variant="outline-primary" size="lg">
            Register
          </Button>
        </div>
        
      </Form>
    </>
  );
}

export default FormPageAdd;
