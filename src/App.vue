<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
input:focus,
button:focus {
  outline: none;
}
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: var(--max-width);
  margin-left: 1rem;
  margin-right: 1rem;
  width: calc(100% - 2rem);

  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    width: 100%;
  }
}
:root {
  --letter-spacing: -0.035em;
  --max-width: 1200px;
}
.text--center {
  text-align: center;
}
.card {
  padding: 36px 32px;
  background: #fafafb;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 400px;
  &--subtitle {
    font-size: 10px;
    letter-spacing: var(--letter-spacing);
    font-weight: 500;
    color: #828282;
    margin-top: 16px;
    margin-bottom: 30px;
  }
  &_header {
    &--text {
      font-weight: 500;
      font-size: 18px;
      letter-spacing: var(--letter-spacing);
      color: #4f4f4f;
    }
  }
  &_body,
  .upload {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.btn {
  padding: 8px 16px;
  font-size: 12px;
  letter-spacing: var(--letter-spacing);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  max-height: 34px;

  &_primary {
    color: #ffffff;
    background-color: #2f80ed;
    &:hover {
      background-color: #1472dc;
    }
  }
  &_back {
    display: flex;
    align-items: center;
    &:hover {
      background-color: #eaeaea;
    }
  }
}

.title {
  font-weight: 500;
  font-size: 18px;
  letter-spacing: var(--letter-spacing);
  color: #4f4f4f;
}

.footer--title {
  margin-top: 3rem;
  display: block;
}

.fadeIn {
  animation: fade-in 2s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
