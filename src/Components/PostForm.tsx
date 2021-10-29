import React from "react";

interface IState {
    title?: string;

}

interface ITarget {
    name: string;
    value: string;
}

export default class PostForm extends React.Component<IState> {

    constructor(props: IState) {
        super(props);

        this.state = {
            title: 'title',
        }
    }

    submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        console.log(this.props.title)

    }

    changeInputHandler = (event: { target: ITarget }) => {
        //method for all inputs if thay have name attribute
        this.setState((prev: {}) => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label className="form-check-label"
                           htmlFor='title'> Post title </label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           name="title"
                           value={this.props.title}
                           onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success"
                        type='submit'>Create
                </button>
            </form>
        )
    }
}