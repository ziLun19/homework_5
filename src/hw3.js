import TextField from '@material-ui/core/TextField';

const hw3=()=>{
    return(
        <div>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="email"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <button>sign in</button>
        </div>
    )
}
export default hw3;