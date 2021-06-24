import React from "react";

interface InputProps {
    id: string,
    type: string,
    label: string,
    required: boolean,
    compact: boolean,
}

interface InputState {
    value: string,
}

export default class Input extends React.Component<InputProps, InputState> {

    static defaultProps = {
        type: 'text',
        label: '',
        required: false,
        compact: false,
    }

    public constructor(props: InputProps) {
        super(props);
        this.state = {
            value: '',
        };
    }

    protected handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        // Do something before state update
        // ...

        this.setState({
            value: event.target.value,
        }, () => {
            // Do something after state update
            // ...
        });
    }

    public render() {
        let { id, type, label, required, compact } = this.props;
        return (
            <div className={"form-group col-12 my-2" + (compact ? ' col-md-6' : undefined)}>
                <label htmlFor={id} className={!this.props.required ? 'optional' : undefined}>{label}</label>
                <input type={type} id={id}
                    className='form-control'
                    onChange={this.handleChange}
                    value={this.state.value}
                    required={required} />
            </div>
        );
    }
}
