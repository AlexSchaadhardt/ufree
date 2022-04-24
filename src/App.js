import './App.css';
import HeaderComp from './HeaderComp';
import Login from './Login';
import CreateAccount from './Create-account';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
              <HeaderComp/>
              <Login/>
              <CreateAccount/>
              {/*
              <p style="text-align: center;"></p>
              <form action="./account" method="post">
                  <fieldset>
                      <legend> Log In: </legend>
                      <label> Username:
                          <input type={{text}} name={{username}} size={{30}} maxlength={{100}} required={{required}}> </input>
                      <br></br>
                      </label>
                      <label> Password:
                          <input type="password" name="password" size="30" maxlength="100" required="required"></input>
                      </label>
                      <button type="submit"> Submit</button>
                  </fieldset>

              </form>
              <br> </br>
              <form action="/create_account" method="post">
                  <fieldset>
                      <legend> Create Account: </legend>
                      <label> Username:
                          <input type="text" name="name" size="30" maxlength="100" required="required"></input>
                      </label>
                      <br></br>
                      <label> Email:
                          <input type="email" name="email" size="30" maxlength="100" required="required"></input>
                      </label>
                      <label> Password:
                          <input type="password" name="password" size="30" maxlength="100" required="required"></input>
                      </label>
                      <button type="submit"> Submit</button>
                  </fieldset>

              </form>
              <br></br>
              <footer>
                  Instead of messaging friends over and over again, invite them to use this application where they can share if they are free, when they are free.
              </footer>
  */}
      </header>
          
    </div>
  );
}

export default App;
