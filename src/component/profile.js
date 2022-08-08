import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <>
               
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={user.picture} alt={user.name} />
                    <Card.Body>
                        <Card.Title><h2>Welcome , {user.name}</h2></Card.Title>
                        <Card.Text>
                            <p>{user.email}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </>
        )
    );
};

export default Profile;