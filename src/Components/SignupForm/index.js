import React, { useState } from 'react';
import { ReactDOM } from 'react';
import "../../Screens/Sigup/signup.css";
import { initializeApp, app, auth, connected, db } from "../../config/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();

    const fullNameVal = (e) => {
        setFullName(e.target.value);
    }

    const phoneNumberVal = (e) => {
        setPhoneNumber(e.target.value);
    }

    const passwordVal = (e) => {
        setPassword(e.target.value);
    }

    const emailVal = (e) => {
        setEmail(e.target.value);
    }

    const signUp = async () => {
        // if (email == "" || password == "" || phoneNumber == "" || fullName == "" || gender == "") {
        //     alert("All fields required to be filled");
        // } else {
        //     const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        //     console.log("User uid", userCredential.user.uid);
        //     await addUserToDb(userCredential.user.uid);
        // }

        if (email == "") {
            alert("Email required")
        } else if (password == "") {
            if (password.length < 6) {
                alert("Password must be equals or greater than 6 characters")
            }
            alert("Password required")
        } else if (phoneNumber == "") {
            alert("Phone number required");
        } else if (fullName == "") {
            alert("Name required")
        }
        else {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log("User uid", userCredential.user.uid);
            await addUserToDb(userCredential.user.uid);
        }

    }


    const addUserToDb = async (uid) => {
        try {
            return setDoc(doc(db, "users", uid), { fullName, email, phoneNumber });
            console.log("Data stored successfully");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    console.log("Value", fullName);

    return (
        <div className='signup-form-main' >
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onChange={(e) => fullNameVal(e)} type="string" placeholder="Enter full name" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control onChange={(e) => phoneNumberVal(e)} type="string" placeholder="Contact number" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => emailVal(e)} type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => passwordVal(e)} type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" /> 
                </Form.Group> */}
            </Form>
            <Button variant="primary" type="submit" className='signup-btn' onClick={signUp} >
                Sign Up
            </Button>
        </div>
    )
}

export default SignupForm;