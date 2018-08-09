class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. There are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    } 
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visible = false;

// const onToggle = () => {
//     visible = !visible;
//     renderApp();
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>{visible ? 'Hide details' : 'Show details'}</button>
//             {visible && (
//                 <div>
//                     <p>Hey. There are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderApp();