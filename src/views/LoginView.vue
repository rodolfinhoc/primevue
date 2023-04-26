<template>
    <div class="login-container p-d-flex p-jc-center p-ai-center">
      <form @submit="login" class="p-card padding">
        <img src="../assets/logo.png" class="img-login p-mb-2 p-mt-4" />
        <div class="p-fluid">
          <div class="p-field p-mb-2">
            <InputText v-model="usuario" name="usuario" placeholder="Usuário" />
          </div>
          <div class="p-field p-mb-2">
            <Password v-model="senha" name="senha" :toggleMask="true" :feedback="false" placeholder="Senha" />
          </div>
          <Button type="submit" class="login-button p-button p-mt-2">LOGIN</Button>
        </div>
      </form>
    </div>
    <Toast :position="'bottom-center'" />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {  useRouter } from 'vue-router';
  
  export default defineComponent({
    data() {
      return {
        usuario: '',
        senha: '',
      };
    },
    methods: {
      login() {  
        // Faz a verificação das credenciais do usuário aqui.
        if (this.usuario === 'rodolfo' && this.senha === '123') {
          // Define o estado de login para verdadeiro no armazenamento local.
          localStorage.setItem('loggedIn', 'true');
  
          // Redireciona para a página home.
         this.$router.push('/');
        }
      },
    },
  });
  </script>
  
  <style scoped lang="scss">
  .padding {
    margin: 20px;
  }
  
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: #eef2ff;
  
    .img-login {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      height: 50%;
    }
  
    form {
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 5px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    //   max-width: 100%;
    width: 445px;
  
      .login-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: #ffffff;
        border-radius: 5px;
        border: none;
        font-size: 1.2rem;
        margin-top: 1rem;
      }
  
      .login-google-button {
        display: flex;
        align-items: center;
        text-align: center;
        width: 100%;
        border-radius: 5px;
        border: none;
        font-size: 1.2rem;
        margin-top: 1rem;
        justify-content: center;
        background-color: #4285F4;
      }
  
      .p-field {
        margin-bottom: 0;
        margin-top: 1rem;
      }
    }
  }
  </style>
  