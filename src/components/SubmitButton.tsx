export default function SubmitButton(props: { value: string }) {
    return (
        <div className="form-group mt-2">
            <button type='submit' className='btn btn-warning'>{props.value}</button>
        </div>
    );
}

SubmitButton.defaultProps = {
    value: 'Envoyer',
};
