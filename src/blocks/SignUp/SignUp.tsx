import React from 'react'

import {
    Button,
    Card,
    Input
} from 'webcoreui/react'

const SignUp = () => {

    return (
        <Card title="Sign up">
            <form className="flex column">
                <Input label="Email" placeholder="Enter your email" />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    subText="Generate a unique password <a href='#'>here</a>"
                />
                <div className="flex xs wrap">
                    <Button theme="success">Create an account</Button>
                    <Button theme="secondary">Sign in</Button>
                </div>
            </form>
        </Card>
    )
}

export default SignUp
