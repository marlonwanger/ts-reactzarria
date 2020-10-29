import React, { useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';

import { ReactComponent as MainLogo } from './logo-react-zzaria.svg';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyD_AojUgMbMtrlWmbxsF97bd__eM8VcT1c',
  authDomain: 'reactzzaria-fb987.firebaseapp.com',
  databaseURL: 'https://reactzzaria-fb987.firebaseio.com',
  projectId: 'reactzzaria-fb987',
  storageBucket: 'reactzzaria-fb987.appspot.com',
  messagingSenderId: '509358972386',
  appId: '1:509358972386:web:38ca3aa92cda432bafedbb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function LoginPage() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) console.log('Usuario logado', user);
      else console.log('Usuario nao logado', user);
    });
  }, []);

  function GitHubAuth() {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify="center">
          <GithubButton onClick={GitHubAuth}>Entrar com github</GithubButton>
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const Logo = styled(MainLogo)`
  width: 100%;
`;

//attrs sao proprs do button do material
const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true,
})`
  && {
    font-size: 25px;
    padding: 15px;
    text-transform: none;
    max-width: 430px;
  }
`;

export default LoginPage;
