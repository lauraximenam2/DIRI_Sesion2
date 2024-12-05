import React from 'react';
import { StyleSheet } from 'react-native';


//Interface para las props del Header
interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps): JSX.Element {
  return (

    <div className="header">

      <div className="menuIcon">
        <div className="dash" ></div>
        <div className="dash"></div>
        <div className="dash"></div>
      </div>

      <h2 className="headerTitle">{title}</h2>

      <div className="fa fa-search searchIcon">

      </div>
    </div>

  );

}

//const styles = StyleSheet.create({
//  title: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 10,


//  }
//});

export default Header; 
