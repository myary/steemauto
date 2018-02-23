var DisplayContainer = React.createClass({
    
    getInitialState: function getInitialState() {
        return {
            editorID: "vitusc-editor" ,
            simplemde: null ,
            value:''
        }
    },
    componentDidMount: function componentDidMount() {
        //init simplemde lib
        this.setState({
            simplemde: new SimpleMDE({ 
                element: document.getElementById( this.state.editorID ),
                initialValue: this.state.value 
            })
            } ,
           
        ) ;
    },
    render: function render() {
        return  React.createElement( RawInput ,
                    {id: this.state.editorID} 
               ) ;
    }
});

var RawInput = React.createClass({
   
    render: function render() {
        return  React.createElement("textarea" ,
                    {rows: "22",  type: "text", id: this.props.id } 
               ) ;
    }
});

ReactDOM.render(React.createElement(DisplayContainer, null), document.getElementById("content"));
