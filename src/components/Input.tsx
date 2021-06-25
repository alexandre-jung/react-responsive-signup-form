import React from "react";

interface InputProps {
    id: string,
    type: string,
    label: string,
    required: boolean,
    compact: boolean,
    placeholder: string,
    isValid: boolean | null,
    onChange: (password: string) => void,
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
        placeholder: '',
        isValid: null,
        onChange: (_: string) => { },
    }

    /**
     * Constructor
     */
    public constructor(props: InputProps) {
        super(props);
        this.state = {
            value: '',
        };
    }

    /**
     * Handle changes on the input
     */
    protected handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

        // Do something before state update
        // ...

        this.setState({
            value: event.target.value,
        }, () => {
            // Do something after state update
            this.props.onChange(this.state.value);
        });
    }

    /**
     * Get the class for the valid-invalid prop
     */
    protected getInputValidState(): string {
        if (this.props.isValid === null)
            return '';
        if (this.props.isValid)
            return ' is-valid ';
        return ' is-invalid ';
    }

    /**
     * Render this component
     */
    public render(): React.ReactNode {
        let {
            id,
            type,
            label,
            required,
            compact,
            placeholder
        } = this.props;

        return (
            <div className={"form-group col-12 my-2" + (compact ? ' col-md-6' : undefined)}>
                <label htmlFor={id} className={!this.props.required ? 'optional' : undefined}>{label}</label>
                <input type={type} id={id}
                    className={'form-control' + this.getInputValidState()}
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder={placeholder}
                    required={required} />
            </div>
        );
    }
}
