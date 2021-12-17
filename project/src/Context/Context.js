import React, { Component } from 'react';

export const DataContext = React.createContext({});

export class DataProvider extends Component {
    state = {
        loading: true,
        users: [],
        login: false,
        admin: false, 
        user: null
    }

    async componentDidMount() {

        const getDataUsers = async (id) => {
            let res = await fetch(`https://fakestoreapi.com/users/${id}`);
            let data = await res.json();
            data.admin=false;
            return data;
        }

        //Users
        let userAdmin = {

            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": 
            {
                "firstname": "john",
            },
            "admin": true
        }
        try {
            for (let i=0; i<10; i++)
            {
                let dataUser = await getDataUsers(i+1);
                this.state.users.push(dataUser);
            }
            this.state.users.push(userAdmin);
            console.log(this.state.users);
        }
        catch (error) {
            console.log(error);
        }
        this.setState({loading: false})
    }

   

    removeProduct = (id) => {
        const {cart} = this.state;
        cart.forEach((e, index) => {
            if (e.id===id) {
                cart.splice(index, 1);
            }
            this.setState({cart: cart});
        })
    }


    validateEmail = (element) => {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(element);
    }

    userInLogin = (email, password) => {
        const {users} = this.state;
        if (!this.validateEmail(email) || password.length===0) {
            alert('Error en su e-mail o contraseña ')
            return false;
        }
        else {
            for (let i=0; i<users.length; i++)
            {
                if (users[i].email===email && users[i].password===password) {
                    this.setState({login: true});

                    if (users[i].admin) {
                        this.setState({admin:true});
                    }

                    this.setState({user: users[i]});
                    console.log(this.state.user);
                    return true;
                }
            }
            alert('Error'); return false;
        }
    }

    userLogOut = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            this.setState({login: false, admin: false, user: null, cart: []});
        }
    }

    freeUserToRegister = (username) => {
        const {users} = this.state;
        for (let i=0; i<users.length; i++) {
            if (users[i].username===username) {
                return false;
            }
        }
        return true;
    }
    freeEmailToRegister = (email) => {
        const {users} = this.state;
        for (let i=0; i<users.length; i++) {
            if (users[i].email===email) {
                return false;
            }
        }
        return true;
    }
    
    userSignUp = (email, username, password, repeatPassword, name) => {
        
        if (!this.validateEmail(email)||!this.freeEmailToRegister(email)) {
            alert('E-mail inválido');
            return false;
        } else if (username.length<=5 ||!this.freeUserToRegister(username)) {
            alert('Username inválido.');
            return false;
        } else if (password!==repeatPassword || password.length<=5) {
            alert('Password inválido');
            return false;
        } else {
            let us1 = {
                
                "id": this.state.users.length+1,
                "email": email,
                "username": username,
                "password": password,
                "name": {
                    "firstname": name,
                },
            }
            this.state.users.push(us1);
            this.setState({user: us1});
            console.log(this.state.users);
            return true;
        }
    }

    
    
    render () {
        const {loading, login, admin, user} = this.state;
        const {userInLogin, userLogOut, userSignUp} = this;
        return (
            <DataContext.Provider value={{loading, login, admin,
                userInLogin, user, userLogOut,userSignUp}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider;