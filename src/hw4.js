import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
}));

const Hw4=()=>{
    const class1 = useStyles();
    class UserGithub extends React.Component { 
        constructor(props) { 
            super(props); 
            this.state = { 
                avatarUrl: '',
                username: '', 
                githubtUrl: '', 
                Location: '',
                ID: '',
                Login: '',
            } 
        } 
        componentDidMount() { 
            $.get(this.props.source, (result) => { 
                console.log(result); 
                const data = result; 
                if (data) { 
                    this.setState({ 
                        avatarUrl: data.avatar_url,
                        username: data.name, 
                        githubtUrl: data.html_url, 
                        Location: data.location, 
                        ID: data.id,
                        Login: data.login
                    }); 
                } 
            }); 
        } 
        render() { 
            return ( 
            <div className={class1.root}> 
                <img src={this.state.avatarUrl} /> 
                <h1>{this.state.username}</h1> 
                <h2>{this.state.Login}</h2>
                <h3>ID:{this.state.ID}</h3>
                <h3>{this.state.Location}</h3>
                <a href={this.state.githubtUrl}>Github Link</a>. 
            </div> 
            ); 
        } 
    }
    ReactDOM.render( 
        <UserGithub source="https://api.github.com/users/ziLun19" />, 
        document.getElementById('root') 
    );
    var output=[];
    output.push(<UserGithub/>)
    return output
}
export default Hw4;