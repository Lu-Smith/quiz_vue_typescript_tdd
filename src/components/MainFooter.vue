<template>
    <footer>Coded by <a href="https://www.lunasmithart.com/" target="_blank">Luna Smith</a>, open-sourced on 
    <a href="https://github.com/Lu-Smith/quiz_vue_typescript_tdd" target="_blank">GitHub</a>.</footer>
</template>

<style>
  footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 20px;
    color: #eeeeee; 
    background: #2d4059; 
    font-size: 13px;
  }
  
  footer a {
    color: #eeeeee; 
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  
  footer a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #ff5722; 
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  
  footer a:hover::before {
    visibility: visible;
    transform: scaleX(1);
    animation: hover-effect 0.3s ease-in-out infinite alternate; 
  }

  @keyframes hover-effect {
    0% {
      transform: scaleX(0.8);
      background-color: #ff5722;
    }
    50% {
      background-color: #22f8ff; 
    }
    100% {
      transform: scaleX(1.3); 
      background-color: #ff5722; 
    }
  }

  @media screen and (max-width: 900px) {
    footer {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 480px) {
    footer {
      padding: 10px;
      font-size: 11px;
    }
  }
</style>