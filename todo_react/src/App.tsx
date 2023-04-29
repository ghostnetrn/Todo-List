import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <p>Formulário</p>
        </div>
        <div>
          <h2>Suastarefas:</h2>
          <p>lista</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
