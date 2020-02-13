import React, { Component } from"react";
import SignOutButton from '../components/SignOut/index'
class Test extends Component {
 render() {
   return (
    <div>
        <h1>Home</h1>

     <button>Admin</button>
     <button>Celibrity</button>
     <SignOutButton />

    </div>

);
 }
}
export default Test;