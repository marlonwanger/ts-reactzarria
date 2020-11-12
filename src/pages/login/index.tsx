import React, { useEffect, useState, useCallback } from 'react';
import { Button, Grid } from '@material-ui/core';
import firebase from '../../services/firebase';
import styled from 'styled-components';

import { ReactComponent as MainLogo } from './logo-react-zzaria.svg';

interface GitHubUser {
  uid: string;
  displayName: string | null;
  email: string;
  photoURL: string;
}

// Removo essa funcao do Loginpage pq eu nao preciso recriar essa funcao sempre
// que o componente atualizar/renderizar

function LoginPage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [userGithub, setUserGithub] = useState<GitHubUser>();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setIsUserLoggedIn(!!user);
      setUserGithub(user);
    });
  }, []);

  const GitHubAuth = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  // essa funcao eu nao posso remover ela do componente, pois ela utiliza de States
  // dessa forma essa funcao semppre é recriada, cada vez que o componentes atualizar.
  // para evitar, utilizamos o useCallback
  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Deslogou');
        setIsUserLoggedIn(false);
        setUserGithub(undefined);
      });
  }, []);

  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify="center">
          <GithubButton onClick={GitHubAuth}>Entrar com github</GithubButton>
          {console.log(isUserLoggedIn)}
          {console.log(userGithub)}
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
