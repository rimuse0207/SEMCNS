import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BodyMainPage from './Components/Body/MainPage/BodyMainPage';
import PersonalMainPage from './Components/Body/PersonalMainPage/PersonalMainPage';
import PersonalApplyMainPage from './Components/Body/PersonalMainPage/PersonalMainPageApply/PersonalApplyMainPage';
import NavigationMainPage from './Components/Header/NavigationMainPage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <header>
                        <NavigationMainPage></NavigationMainPage>
                    </header>
                    <body>
                        <Route exact path="/main" component={BodyMainPage}></Route>
                        <Route exact path="/personal" component={PersonalMainPage}></Route>
                        <Route exact path="/personal/apply" component={PersonalApplyMainPage}></Route>
                    </body>
                    <footer></footer>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
