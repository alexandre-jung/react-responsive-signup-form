import React, { FormEvent, ReactNode } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import FormIllustration from './FormIllustration';
import validateEmail from '../lib/validation';

interface SignupFormProps {
    title: string,
}

interface SignupFromState {
    email: string,
    password: string,
    passwordCheck: string,
}

export default class SignupForm extends React.Component<SignupFormProps, SignupFromState> {

    static defaultProps = {
        title: '',
    }

    /**
     * Constructor
     */
    public constructor(props: SignupFormProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordCheck: '',
        }
    }

    /**
     * Handle the form submitting
     */
    protected handleSubmit = (event: FormEvent<HTMLFormElement>): void => {

        // Prevent the browser from submitting the form and reload the page
        event.preventDefault();

        if (this.validateEmail() &&
            this.validatePassword() &&
            this.validatePasswordCheck()) {
            alert('Le formulaire est valide !');
            return;
        }
        alert("Le formulaire n'est pas valide...");
    }

    /**
     * Update the email value
     */
    protected updateEmail = (email: string): void => {
        this.setState({ email });
    }

    /**
     * Update the password value
     */
    protected updatePassword = (password: string): void => {
        this.setState({ password });
    }

    /**
     * Update the password verification value
     */
    protected updatePasswordCheck = (passwordCheck: string): void => {
        this.setState({ passwordCheck });
    }

    protected validateEmail(): boolean | null {
        let { email } = this.state;
        email = email.trim();
        return email ? validateEmail(email) : null;
    }

    /**
     * Check the password and return a boolean or null if empty
     */
    protected validatePassword(): boolean | null {
        let { password } = this.state;
        return password ? password.length >= 8 : null;
    }


    /**
     * Check wether the password verification matches the password
     * and return a boolean or null if empty
     */
    protected validatePasswordCheck(): boolean | null {
        let { password, passwordCheck } = this.state;
        return passwordCheck ? passwordCheck === password : null;
    }

    /**
     * Render the email field
     */
    protected renderEmailField(): ReactNode {
        return (
            <Input id='email'
                type='email'
                label='Email'
                placeholder='jean-dupont@gmail.com'
                onChange={this.updateEmail}
                isValid={this.validateEmail()}
                required />
        );
    }

    /**
     * Render the password field
     */
    protected renderPasswordField(): ReactNode {
        return (
            <Input id='password'
                type='password'
                label='Mot de passe'
                placeholder='Au moins 8 caractères'
                isValid={this.validatePassword()}
                onChange={this.updatePassword}
                required compact />
        );
    }

    /**
     * Render the password verification field
     */
    protected renderPasswordCheckField(): ReactNode {
        return (
            <Input id='passwordCheck'
                type='password'
                label='Vérifiez le mot de passe'
                onChange={this.updatePasswordCheck}
                isValid={this.validatePasswordCheck()}
                required compact />
        );
    }

    /**
     * Render this component
     */
    public render(): ReactNode {
        let { title } = this.props;
        return (
            <div className="d-flex form rounded shadow mx-auto overflow-hidden flex-column flex-lg-row" id='signup'>
                <FormIllustration />
                <form className='justify-content-center p-4 container-fluid' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <h2 className='fw-bold mb-4'>{title}</h2>
                        <Input id='lastName' type='text' label='Nom' placeholder='Dupont' compact />
                        <Input id='firstName' type='text' label='Prénom' placeholder='Jean' compact />
                        {this.renderEmailField()}
                        {this.renderPasswordField()}
                        {this.renderPasswordCheckField()}
                        <small className='form-text text-muted mt-3'>Les champs marqués d'un * sont obligatoires</small>
                        <SubmitButton value='Inscription' />
                    </div>
                </form>
            </div>
        );
    }
}
