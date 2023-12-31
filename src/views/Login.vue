<template>
<div class="login">

  <header class="login__header">
    <h2><svg class="icon">
        <use xlink:href="#icon-lock" />
      </svg>Zaloguj się</h2>
  </header>

  <form action="#" class="login__form" method="POST">

    <div>
      <label for="username">Login</label>
      <input type="username" id="username" name="username" required>
    </div>

    <div>
      <label for="password">Hasło</label>
      <input type="password" id="password" name="password" required>
    </div>

    <div>
      <input class="button" type="submit" value="Zaloguj się!">
    </div>

  </form>

</div>

<svg xmlns="http://www.w3.org/2000/svg" class="icons">

  <symbol id="icon-lock" viewBox="0 0 448 512">
    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
  </symbol>

</svg>


</template>

<style scoped>






h2 {
  font-size: 1.75rem;
}

input {
  background-image: none;
  border: none;
  font: inherit;
  margin: 0;
  padding: 0;
  transition: all 0.3s;
}

svg {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}



/* ---------- BUTTON ---------- */

.button {
  background-color: #33cc77;
  color: #fff;
  padding: 0.25em 1.5em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);


}

.button:focus,
.button:hover {
  background-color: #28ad63;
}

/* ---------- ICONS ---------- */
.icons {
  display: none;
}

.icon {
  fill: currentcolor;
  display: inline-block;
  height: 1em;
  width: 1em;
}

/* ---------- LOGIN ---------- */
.login {
  width: 350px;
  left:50%;
  position: relative;
  transform: translate(-50%);
  background-color: #FFF ;
  border-radius: 22px;
  
}

.login__header {
  background-color: #495057;
  border-top-left-radius: 1.25em;
  border-top-right-radius: 1.25em;
  color: #fff;
  padding: 1.25em 1.625em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);


}

.login__header :first-child {
  margin-top: 0;
}

.login__header :last-child {
  margin-bottom: 0;
}

.login h2 .icon {
  margin-right: 14px;
}

.login__form {
    background-color: rgb(229, 229, 229) ;
    border-bottom-left-radius: 1.25em;
  border-bottom-right-radius: 1.25em;
  color: #777;
  display: grid;
  gap: 0.875em;
  padding: 1.25em 1.625em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

}

.login input {
  border-radius: 0.1875em;
}

.login input[type="username"],
.login input[type="password"] {
  color: #777;
  padding: 0.25em 0.625em;
  width: 100%;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);

}

.login input[type="submit"] {
  display: block;
  margin: 0 auto;
}

.content-bg{
    background-color: white;
}
</style>