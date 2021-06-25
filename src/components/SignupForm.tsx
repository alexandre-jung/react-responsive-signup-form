import React, { FormEvent } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import FormIllustration from './FormIllustration';

interface SignupFormProps {
    title: string,
}

export default class SignupForm extends React.Component<SignupFormProps> {

    static defaultProps = {
        title: '',
    }

    protected handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        // The form is being submitted
        // ...
        alert('Le formulaire a été soumis');
        event.preventDefault();
    }

    public render() {
        let { title } = this.props;
        return (
            <div className="d-flex form rounded shadow mx-auto overflow-hidden flex-column flex-lg-row">
                <FormIllustration />
                <form className='justify-content-center p-4 container-fluid' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <h2 className='fw-bold mb-4'>{title}</h2>
                        <Input id='lastName' type='text' label='Nom' compact />
                        <Input id='firstName' type='text' label='Prénom' compact />
                        <Input id='email' type='email' label='Email' required />
                        <Input id='password' type='password' label='Mot de passe' required compact />
                        <Input id='passwordCheck' type='password' label='Vérifiez le mot de passe' required compact />
                        <small className='text-black-50 mt-3'>Les champs marqués d'un * sont obligatoires</small>
                        <SubmitButton value='Inscription' />
                    </div>
                </form>
            </div>
        );
    }
}
