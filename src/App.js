import React, {Component} from 'react'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }

    }
    componentWillMount(props, state){

    }
    componentDidMount(props, state){
        console.log('Mounted with: ', props, state)
    }
    componentWillReceiveProps(props){
        console.log(props)
    }

    componentWillUpdate(props, state){
        if(this.props.name !== props.name){
            //ce fa ma aicia
        }

    }

    componentDidUpdate(props, state){
        if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen){
            console.log('updating over ten')
            this.setState({overTen: true});
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render(){
        let {count} = this.state
        return(
            <div>
                <h1>Ai apasat pe buton de {count} ori</h1>
                {(this.state.overTen) ?
                    <h3>Beat high score of 10!</h3>
                 : null
                 }
                
                <span>
                    <button onClick = {() => this.handleClick()}>
                        apasa ma
                    </button>
                </span>
            </div>
        );
    }


}

export default App