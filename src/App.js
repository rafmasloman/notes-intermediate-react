import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddNotes from './pages/AddNotes';
import DetailNotes from './pages/DetailNotes';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { NotesAPI } from './utils/api';

import React, { Component } from 'react';
import ArchiveNote from './pages/ArchiveNote';
import { ThemeProvider } from './context/ThemeContext';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initalizing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme,
          };
        });
      },
    };

    this.onLoggedHandler = this.onLoggedHandler.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { error, data } = await NotesAPI.getUserLogged();
    console.log(this.state.authedUser);
    document.documentElement.setAttribute('data-theme', this.state.theme);
    this.setState(() => {
      return {
        authedUser: data,
        initalizing: false,
      };
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  async onLoggedHandler({ accessToken }) {
    NotesAPI.setAccessToken(accessToken);
    const { error, data } = await NotesAPI.getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    NotesAPI.setAccessToken('');
  }

  render() {
    // if (!this.state.initalizing) {
    //   return null;
    // }
    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <div>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<Login authLogin={this.onLoggedHandler} />}
                />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider value={this.state}>
        <div className="App">
          <header>
            <Navbar logout={this.onLogout} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addNotes" element={<AddNotes />} />
              <Route path="/notes/:id" element={<DetailNotes />} />
              <Route path="/archives" element={<ArchiveNote />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

// function App() {
//   const [authedUser, setAuthedUser] = useState(null);

//   const onLoggedHandler = async ({ accessToken }) => {
//     NotesAPI.setAccessToken(accessToken);
//     const user = await NotesAPI.getUserLogged();

//     setAuthedUser(() => {
//       return {
//         authedUser: user,
//       };
//     });
//   };

//   // useEffect(() => {
//   //   const user = NotesAPI.getUserLogged();

//   //   setAuthedUser(() => {
//   //     return {
//   //       authedUser: user,
//   //     };
//   //   });
//   // });

//   if (authedUser === null) {
//     return (
//       <div>
//         <main>
//           <Routes>
//             <Route path="/*" element={<Login authLogin={onLoggedHandler} />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </main>
//       </div>
//     );
//   } else {
//     return (
//       <div className="App">
//         <header>
//           <Navbar />
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/addNotes" element={<AddNotes />} />
//             <Route path="/notes/:id" element={<DetailNotes />} />
//           </Routes>
//         </main>
//       </div>
//     );
//   }
// }

// export default App;
